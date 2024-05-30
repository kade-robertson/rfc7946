import { FeatureCollection } from "@rfc7946/json-schema";
import { Ajv } from "ajv";

const ajv = new Ajv();

export const validate = ajv.compile(FeatureCollection);
