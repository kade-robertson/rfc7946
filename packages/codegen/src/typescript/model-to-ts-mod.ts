/*--------------------------------------------------------------------------

@sinclair/typebox-codegen

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/

import * as Types from "@sinclair/typebox";
import {
  Formatter,
  PropertyEncoder,
  type TypeBoxModel,
} from "@sinclair/typebox-codegen";
import { TypeCompiler } from "@sinclair/typebox/compiler";

type TypeguardFn<T> = (value: unknown) => value is T;
type Visitor<T> = [TypeguardFn<T>, (schema: T) => string];

const ESArray = Array;

export namespace ModelToTypeScript {
  function Any(schema: Types.TAny) {
    return "any";
  }
  // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
  function Array(schema: Types.TArray) {
    const items = Visit(schema.items);
    if (schema.minItems != null && schema.maxItems == null) {
      let out = "[";
      for (let i = 0; i < schema.minItems; i++) {
        // biome-ignore lint/style/useTemplate: <explanation>
        out += items + ", ";
      }
      // biome-ignore lint/style/useTemplate: <explanation>
      return out + `...${items}[]]`;
    }
    return `${items}[]`;
  }
  // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
  function Boolean(schema: Types.TBoolean) {
    return "boolean";
  }
  // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
  function BigInt(schema: Types.TBigInt) {
    return "bigint";
  }
  function Constructor(schema: Types.TConstructor) {
    const params = schema.parameters
      .map((param, i) => `param${i}: ${Visit(param)}`)
      .join(", ");
    const returns = Visit(schema.returns);
    return `(new (${params}) => ${returns})`;
  }
  // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
  function Date(schema: Types.TDate) {
    return "Date";
  }
  // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
  function Function(schema: Types.TFunction) {
    const params = schema.parameters
      .map((param, i) => `param${i}: ${Visit(param)}`)
      .join(", ");
    const returns = Visit(schema.returns);
    return `((${params}) => ${returns})`;
  }
  function Integer(schema: Types.TInteger) {
    return "number";
  }
  function Intersect(schema: Types.TIntersect) {
    return `(${schema.allOf.map((schema) => Visit(schema)).join(" & ")})`;
  }
  function Literal(schema: Types.TLiteral) {
    if (typeof schema.const === "string") {
      return `'${schema.const}'`;
      // biome-ignore lint/style/noUselessElse: <explanation>
    } else {
      return `${schema.const}`;
    }
  }
  function Never(schema: Types.TNever) {
    return "never";
  }
  function Null(schema: Types.TNull) {
    return "null";
  }
  // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
  function String(schema: Types.TString) {
    return "string";
  }
  // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
  function Number(schema: Types.TNumber) {
    return "number";
  }
  // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
  function Object(schema: Types.TObject) {
    const properties: string = globalThis.Object.entries(schema.properties)
      .map(([key, property]) => {
        const optional = Types.TypeGuard.IsOptional(property);
        const readonly = Types.TypeGuard.IsReadonly(property);
        return optional && readonly
          ? `readonly ${key}?: ${Visit(property)}`
          : readonly
          ? `readonly ${key}: ${Visit(property)}`
          : optional
          ? `${key}?: ${Visit(property)}`
          : `${PropertyEncoder.Encode(key)}: ${Visit(property)}`;
      })
      .join(",\n");
    return `{\n${properties}\n}`;
  }
  // biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
  function Promise(schema: Types.TPromise) {
    const item = Visit(schema.item);
    return `Promise<${item}>`;
  }
  function Record(schema: Types.TRecord) {
    for (const [key, value] of globalThis.Object.entries(
      schema.patternProperties
    )) {
      const type = Visit(value);
      if (key === "^(0|[1-9][0-9]*)$") {
        return `Record<number, ${type}>`;
        // biome-ignore lint/style/noUselessElse: <explanation>
      } else {
        return `Record<string, ${type}>`;
      }
    }
    throw Error("TypeBoxToTypeScript: Unreachable");
  }
  function Ref(schema: Types.TRef) {
    return schema.$ref;
  }
  function This(schema: Types.TThis) {
    return schema.$ref;
  }
  function Tuple(schema: Types.TTuple) {
    // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
    if (schema.items === undefined) return `[]`;
    const items = schema.items.map((schema) => Visit(schema)).join(", ");
    return `[${items}]`;
  }
  function UInt8Array(schema: Types.TUint8Array) {
    // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
    return `Uint8Array`;
  }
  function Undefined(schema: Types.TUndefined) {
    // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
    return `undefined`;
  }
  function Union(schema: Types.TUnion) {
    return `(${schema.anyOf.map((schema) => Visit(schema)).join(" | ")})`;
  }
  function Unknown(schema: Types.TUnknown) {
    // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
    return `unknown`;
  }
  function Void(schema: Types.TVoid) {
    // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
    return `void`;
  }
  function Visit(schema: Types.TSchema): string {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    if (reference_map.has(schema.$id!)) return schema.$id!;
    if (schema.$id !== undefined) reference_map.set(schema.$id, schema);
    if (Types.TypeGuard.IsAny(schema)) return Any(schema);
    if (Types.TypeGuard.IsArray(schema)) return Array(schema);
    if (Types.TypeGuard.IsBoolean(schema)) return Boolean(schema);
    if (Types.TypeGuard.IsBigInt(schema)) return BigInt(schema);
    if (Types.TypeGuard.IsConstructor(schema)) return Constructor(schema);
    if (Types.TypeGuard.IsDate(schema)) return Date(schema);
    if (Types.TypeGuard.IsFunction(schema)) return Function(schema);
    if (Types.TypeGuard.IsInteger(schema)) return Integer(schema);
    if (Types.TypeGuard.IsIntersect(schema)) return Intersect(schema);
    if (Types.TypeGuard.IsLiteral(schema)) return Literal(schema);
    if (Types.TypeGuard.IsNever(schema)) return Never(schema);
    if (Types.TypeGuard.IsNull(schema)) return Null(schema);
    if (Types.TypeGuard.IsNumber(schema)) return Number(schema);
    if (Types.TypeGuard.IsObject(schema)) return Object(schema);
    if (Types.TypeGuard.IsPromise(schema)) return Promise(schema);
    if (Types.TypeGuard.IsRecord(schema)) return Record(schema);
    if (Types.TypeGuard.IsRef(schema)) return Ref(schema);
    if (Types.TypeGuard.IsThis(schema)) return This(schema);
    if (Types.TypeGuard.IsString(schema)) return String(schema);
    if (Types.TypeGuard.IsTuple(schema)) return Tuple(schema);
    if (Types.TypeGuard.IsUint8Array(schema)) return UInt8Array(schema);
    if (Types.TypeGuard.IsUndefined(schema)) return Undefined(schema);
    if (Types.TypeGuard.IsUnion(schema)) return Union(schema);
    if (Types.TypeGuard.IsUnknown(schema)) return Unknown(schema);
    if (Types.TypeGuard.IsVoid(schema)) return Void(schema);
    return "unknown";
  }
  const reference_map = new Map<string, Types.TSchema>();
  export function GenerateType(model: TypeBoxModel, $id: string) {
    reference_map.clear();
    const type = model.types.find((type) => type.$id === $id);
    if (type === undefined) return `export type ${$id} = unknown;`;
    return `export type ${
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      type.$id!
      // @ts-expect-error
    } = ${Visit(type)};`;
  }
  export function GenerateTypes(model: TypeBoxModel): string {
    reference_map.clear();
    const definitions: string[] = [];
    for (const type of model.types) {
      const definition = `export type ${
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        type.$id!
      } = ${
        // @ts-expect-error
        Visit(type)
      };`;
      definitions.push(`
      ${definition}
      `);
    }
    const output = [...definitions];
    return Formatter.Format(output.join("\n\n"));
  }
  export function Generate(model: TypeBoxModel): string {
    reference_map.clear();
    const definitions: string[] = [];
    for (const type of model.types) {
      const description = `/** ${type.description} */\n`;
      const definition = `export type ${
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        type.$id!

        // @ts-expect-error
      } = ${Visit(type)};`;
      const assertion = `export const ${
        // biome-ignore lint/style/noNonNullAssertion: <explanation>
        type.$id!
      } = (() => { ${TypeCompiler.Code(
        // @ts-expect-error
        type,
        model.types,
        { language: "typescript" }
      )} })();`;
      const rewritten = assertion.replaceAll(
        // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
        `return function check(value: any): boolean`,
        `return function check(value: any): value is ${
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          type.$id!
        }`
      );
      definitions.push(`
      ${description}
      ${definition}
      ${rewritten}
      `);
    }
    const output = [...definitions];
    return Formatter.Format(output.join("\n\n"));
  }
}
