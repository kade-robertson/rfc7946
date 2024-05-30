// @ts-nocheck

import type { TypeBoxModel } from "@sinclair/typebox-codegen";

import {
  Altitude,
  BBox,
  BBox2D,
  BBox3D,
  Feature,
  FeatureCollection,
  GeoJSONType,
  Geometry,
  GeometryCollectionGeometry,
  GeometryType,
  Latitude,
  LineStringCoordinates,
  LineStringGeometry,
  LinearRing,
  Longitude,
  MultiLineStringCoordinates,
  MultiLineStringGeometry,
  MultiPointCoordinates,
  MultiPointGeometry,
  MultiPolygonCoordinates,
  MultiPolygonGeometry,
  PointGeometry,
  PolygonCoordinates,
  PolygonGeometry,
  Position,
  Position2D,
  Position3D,
} from "@rfc7946/definitions";
import { makeTypescriptPackage } from "./typescript/index.js";
import { makeTypeboxPackage } from "./typebox.js";
import { makeZodPackage } from "./zod.js";
import { makeJsonSchemaPackage } from "./json-schema.js";

const Model: TypeBoxModel = {
  types: [
    Latitude,
    Longitude,
    Altitude,
    Position2D,
    Position3D,
    Position,
    BBox2D,
    BBox3D,
    BBox,
    MultiPointCoordinates,
    LineStringCoordinates,
    MultiLineStringCoordinates,
    LinearRing,
    PolygonCoordinates,
    MultiPolygonCoordinates,
    GeometryType,
    GeoJSONType,
    PointGeometry,
    MultiPointGeometry,
    LineStringGeometry,
    MultiLineStringGeometry,
    PolygonGeometry,
    MultiPolygonGeometry,
    GeometryCollectionGeometry,
    Geometry,
    Feature,
    FeatureCollection,
  ],
};

const exporters = [
  // makeTypescriptPackage,
  makeTypeboxPackage,
  makeZodPackage,
  // makeJsonSchemaPackage,
];

for (const exporter of exporters) {
  await exporter(Model);
}
