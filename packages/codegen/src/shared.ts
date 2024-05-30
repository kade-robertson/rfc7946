import path from "node:path";
import fs from "node:fs/promises";
import { formatDocument } from "./format.js";
import type { TypeBoxModel } from "@sinclair/typebox-codegen";

export const ROOT_PATH = path.join(import.meta.dirname, "../../..");
export const packagePath = (name: string) =>
  path.join(ROOT_PATH, "packages", name);
export type CreatePackageOptions = {
  name: string;
  description: string;
  peerDependencies?: Record<string, string>;
};

const createPackageJson = (options: CreatePackageOptions) => {
  return {
    name: `@rfc7946/${options.name}`,
    version: "1.0.0",
    author: "Kade Robertson <kade@kaderobertson.dev>",
    license: "MIT",
    description: options.description,
    main: "dist/cjs/index.js",
    module: "dist/esm/index.js",
    types: "dist/cjs/index.d.ts",
    exports: {
      ".": {
        import: "./dist/esm/index.js",
        require: "./dist/cjs/index.js",
      },
    },
    scripts: {
      "build:cjs": "tsc -p tsconfig.cjs.json",
      "build:esm": "tsc -p tsconfig.esm.json",
      "build:pkg": 'echo \'{ "type": "module" }\' > dist/esm/package.json',
      build: "pnpm build:cjs && pnpm build:esm && pnpm build:pkg",
    },
    peerDependencies: options.peerDependencies,
  };
};

export const writePackageJson = async (
  dir: string,
  options: CreatePackageOptions
) => {
  const packageJson = JSON.stringify(createPackageJson(options), null, 2);
  const filePath = path.join(dir, "package.json");
  const formatted = await formatDocument(packageJson, filePath);
  await fs.writeFile(filePath, formatted.content);
};

const createTsConfigJson = (kind: "cjs" | "esm") => {
  return {
    extends: "../../tsconfig.json",
    compilerOptions: {
      outDir: `dist/${kind}`,
      module: kind === "cjs" ? "CommonJS" : "ESNext",
      moduleResolution: kind === "cjs" ? "Node" : "Bundler",
      target: "ESNext",
      declaration: true,
    },
    include: ["src"],
  };
};

const writeTsConfigFile = async (dir: string, kind: "cjs" | "esm") => {
  const tsConfigJson = JSON.stringify(createTsConfigJson(kind), null, 2);
  const filePath = path.join(dir, `tsconfig.${kind}.json`);
  const formatted = await formatDocument(tsConfigJson, filePath);
  await fs.writeFile(filePath, formatted.content);
};

export const writeTsConfigFiles = async (dir: string) => {
  await writeTsConfigFile(dir, "cjs");
  await writeTsConfigFile(dir, "esm");
};

const NPM_IGNORE = `node_modules
src
tsconfig.cjs.json
tsconfig.esm.json
`;
export const writeNpmIgnore = async (dir: string) => {
  const filePath = path.join(dir, ".npmignore");
  await fs.writeFile(filePath, NPM_IGNORE);
};

export const writeLicense = async (dir: string) => {
  await fs.copyFile(
    path.join(ROOT_PATH, "LICENSE.md"),
    path.join(dir, "LICENSE.md")
  );
};

export const writeSourceFile = async (
  dir: string,
  model: TypeBoxModel,
  transformer: (model: TypeBoxModel) => string | Promise<string>
) => {
  const definitions = await transformer(model);
  await fs.mkdir(path.join(dir, "src"), { recursive: true });
  const filePath = path.join(dir, "src/index.ts");
  const formatted = await formatDocument(definitions, filePath);
  await fs.writeFile(filePath, formatted.content);
};

export const makePackage = async (
  name: string,
  model: TypeBoxModel,
  transformer: (model: TypeBoxModel) => string | Promise<string>,
  packageJson: CreatePackageOptions
) => {
  const dir = packagePath(name);
  await fs.mkdir(dir, { recursive: true });
  await Promise.all([
    writePackageJson(dir, packageJson),
    writeTsConfigFiles(dir),
    writeSourceFile(dir, model, transformer),
    writeNpmIgnore(dir),
    writeLicense(dir),
  ]);
};
