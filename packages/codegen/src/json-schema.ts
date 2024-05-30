import {
  ModelToJsonSchema,
  type TypeBoxModel,
} from "@sinclair/typebox-codegen";
import { makePackage } from "./shared.js";

export const makeJsonSchemaPackage = async (model: TypeBoxModel) => {
  await makePackage("json-schema", model, ModelToJsonSchema.Generate, {
    name: "json-schema",
    description: "JSON Schema definitions for RFC 7946",
  });
};
