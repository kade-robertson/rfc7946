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
} from "@rfc7946/json-schema";
import { Type } from "@sinclair/typebox";
import { Ajv } from "ajv";

export const schemas = [
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
];

const ajv = new Ajv();
for (const schema of schemas) {
  ajv.addSchema(schema);
}

export const validate = ajv.compile(FeatureCollection);
