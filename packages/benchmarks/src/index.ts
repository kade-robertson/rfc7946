import { FeatureCollection as TypeboxFeatureCollection } from "@rfc7946/typebox";
import { FeatureCollection as ZodFeatureCollection } from "@rfc7946/zod";

import { Value } from "@sinclair/typebox/value";
import { TypeCompiler } from "@sinclair/typebox/compiler";
import { Bench } from "tinybench";
import fs from "node:fs/promises";
import path from "node:path";
import { validate } from "./ajv.js";
import { Type } from "@sinclair/typebox";
import { schemas } from "./deref.js";

const DerefTypeboxSchema = Type.Deref(TypeboxFeatureCollection, schemas);

// const CompiledTypeboxFeatureCollection =
//   TypeCompiler.Compile(DerefTypeboxSchema);

const bench = new Bench({ time: 1000 });

const FIXTURES = await fs.readdir(path.join(import.meta.dirname, "fixtures"));
const CHECKERS = [
  {
    name: "Ajv",
    checker: (data: unknown) => validate(data),
  },
  {
    name: "Typebox",
    checker: (data: unknown) => Value.Check(DerefTypeboxSchema, data),
  },
  // {
  //   name: "Typebox (compiled)",
  //   checker: (data: unknown) => CompiledTypeboxFeatureCollection.Check(data),
  // },
  {
    name: "Zod",
    checker: (data: unknown) => ZodFeatureCollection.parse(data),
  },
];

for (const fixture of FIXTURES) {
  const data = JSON.parse(
    await fs.readFile(
      path.join(import.meta.dirname, "fixtures", fixture),
      "utf-8"
    )
  );

  for (const { name, checker } of CHECKERS) {
    bench.add(`${fixture} (${name})`, () => {
      checker(data);
    });
  }
}

await bench.warmup();
await bench.run();

console.table(bench.table());
