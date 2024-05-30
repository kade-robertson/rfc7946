import { ModelToZod, type TypeBoxModel } from "@sinclair/typebox-codegen";
import { makePackage } from "./shared.js";

export const makeZodPackage = async (model: TypeBoxModel) => {
  await makePackage("zod", model, ModelToZod.Generate, {
    name: "zod",
    description: "Zod definitions for RFC 7946",
    peerDependencies: {
      zod: "^3.0.0",
    },
  });
};
