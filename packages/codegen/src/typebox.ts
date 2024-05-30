import type { TypeBoxModel } from "@sinclair/typebox-codegen";
import { ROOT_PATH, makePackage } from "./shared.js";
import fs from "node:fs/promises";
import path from "node:path";

const fakeTransformer = () => {
  return fs.readFile(
    path.join(ROOT_PATH, "packages/definitions/src/index.ts"),
    { encoding: "utf-8" }
  );
};

export const makeTypeboxPackage = async (model: TypeBoxModel) => {
  await makePackage("typebox", model, fakeTransformer, {
    name: "typebox",
    description: "TypeBox definitions for RFC 7946",
    peerDependencies: {
      "@sinclair/typebox": "^0.32.0",
    },
  });
};
