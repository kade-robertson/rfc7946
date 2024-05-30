import type { TypeBoxModel } from "@sinclair/typebox-codegen";
import { ModelToTypeScript } from "./model-to-ts-mod.js";
import { makePackage } from "../shared.js";

export const makeTypescriptPackage = async (model: TypeBoxModel) => {
  await makePackage("ts", model, ModelToTypeScript.GenerateTypes, {
    name: "ts",
    description: "TypeScript definitions for RFC 7946",
  });
};
