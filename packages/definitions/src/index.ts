import { type Static, Type } from "@sinclair/typebox";

export const Latitude = Type.Number({
  minimum: -90,
  maximum: 90,
});
export type Latitude = Static<typeof Latitude>;

export const Longitude = Type.Number({
  minimum: -180,
  maximum: 180,
});
export type Longitude = Static<typeof Longitude>;

export const Altitude = Type.Number();
export type Altitude = Static<typeof Altitude>;

export const Position2D = Type.Tuple([Longitude, Latitude]);
export type Position2D = Static<typeof Position2D>;

export const Position3D = Type.Tuple([Longitude, Latitude, Altitude]);
export type Position3D = Static<typeof Position3D>;

export const Position = Type.Union([Position2D, Position3D], {
  $id: "Position",
});
export type Position = Static<typeof Position>;

export const BBox2D = Type.Tuple([Longitude, Latitude, Longitude, Latitude]);
export type BBox2D = Static<typeof BBox2D>;

export const BBox3D = Type.Tuple([
  Longitude,
  Latitude,
  Altitude,
  Longitude,
  Latitude,
  Altitude,
]);
export type BBox3D = Static<typeof BBox3D>;

export const BBox = Type.Union([BBox2D, BBox3D]);
export type BBox = Static<typeof BBox>;

export const MultiPointCoordinates = Type.Array(Position);
export type MultiPointCoordinates = Static<typeof MultiPointCoordinates>;

export const LineStringCoordinates = Type.Unsafe<
  [Position, Position, ...Position[]]
>(Type.Array(Position, { minItems: 2 }));
export type LineStringCoordinates = Static<typeof LineStringCoordinates>;

export const MultiLineStringCoordinates = Type.Array(LineStringCoordinates);
export type MultiLineStringCoordinates = Static<
  typeof MultiLineStringCoordinates
>;

export const LinearRing = Type.Unsafe<
  [Position, Position, Position, Position, ...Position[]]
>(Type.Array(Position, { minItems: 4 }));
export type LinearRing = Static<typeof LinearRing>;

export const PolygonCoordinates = Type.Array(LinearRing);
export type PolygonCoordinates = Static<typeof PolygonCoordinates>;

export const MultiPolygonCoordinates = Type.Array(PolygonCoordinates);
export type MultiPolygonCoordinates = Static<typeof MultiPolygonCoordinates>;

export const PointType = Type.Literal("Point");
export type PointType = Static<typeof PointType>;

export const MultiPointType = Type.Literal("MultiPoint");
export type MultiPointType = Static<typeof MultiPointType>;

export const LineStringType = Type.Literal("LineString");
export type LineStringType = Static<typeof LineStringType>;

export const MultiLineStringType = Type.Literal("MultiLineString");
export type MultiLineStringType = Static<typeof MultiLineStringType>;

export const PolygonType = Type.Literal("Polygon");
export type PolygonType = Static<typeof PolygonType>;

export const MultiPolygonType = Type.Literal("MultiPolygon");
export type MultiPolygonType = Static<typeof MultiPolygonType>;

export const GeometryCollectionType = Type.Literal("GeometryCollection");
export type GeometryCollectionType = Static<typeof GeometryCollectionType>;

export const GeometryType = Type.Union([
  PointType,
  MultiPointType,
  LineStringType,
  MultiLineStringType,
  PolygonType,
  MultiPolygonType,
  GeometryCollectionType,
]);
export type GeometryType = Static<typeof GeometryType>;

export const FeatureType = Type.Literal("Feature");
export type FeatureType = Static<typeof FeatureType>;

export const FeatureCollectionType = Type.Literal("FeatureCollection");
export type FeatureCollectionType = Static<typeof FeatureCollectionType>;

export const GeoJSONType = Type.Union([
  ...Type.Rest(GeometryType),
  FeatureType,
  FeatureCollectionType,
]);
export type GeoJSONType = Static<typeof GeoJSONType>;

export const PointGeometry = Type.Object({
  type: PointType,
  coordinates: Position,
});
export type PointGeometry = Static<typeof PointGeometry>;

export const MultiPointGeometry = Type.Object({
  type: MultiPointType,
  coordinates: MultiPointCoordinates,
});
export type MultiPointGeometry = Static<typeof MultiPointGeometry>;

export const LineStringGeometry = Type.Object({
  type: LineStringType,
  coordinates: LineStringCoordinates,
});
export type LineStringGeometry = Static<typeof LineStringGeometry>;

export const MultiLineStringGeometry = Type.Object({
  type: MultiLineStringType,
  coordinates: MultiLineStringCoordinates,
});
export type MultiLineStringGeometry = Static<typeof MultiLineStringGeometry>;

export const PolygonGeometry = Type.Object({
  type: PolygonType,
  coordinates: PolygonCoordinates,
});
export type PolygonGeometry = Static<typeof PolygonGeometry>;

export const MultiPolygonGeometry = Type.Object({
  type: MultiPolygonType,
  coordinates: MultiPolygonCoordinates,
});
export type MultiPolygonGeometry = Static<typeof MultiPolygonGeometry>;

export const GeometryCollectionGeometry = Type.Recursive((Self) =>
  Type.Object({
    type: GeometryCollectionType,
    geometries: Type.Array(
      Type.Union([
        Self,
        PointGeometry,
        MultiPointGeometry,
        LineStringGeometry,
        MultiLineStringGeometry,
        PolygonGeometry,
        MultiPolygonGeometry,
      ])
    ),
  })
);
export type GeometryCollectionGeometry = Static<
  typeof GeometryCollectionGeometry
>;

export const Geometry = Type.Union([
  PointGeometry,
  MultiPointGeometry,
  LineStringGeometry,
  MultiLineStringGeometry,
  PolygonGeometry,
  MultiPolygonGeometry,
  GeometryCollectionGeometry,
]);
export type Geometry = Static<typeof Geometry>;

export const GeoJSONProperties = Type.Record(Type.String(), Type.Unknown());
export type GeoJSONProperties = Static<typeof GeoJSONProperties>;

export const Feature = Type.Object({
  id: Type.Optional(Type.Union([Type.String(), Type.Number()])),
  type: FeatureType,
  geometry: Type.Union([Geometry, Type.Null()]),
  properties: Type.Union([GeoJSONProperties, Type.Null()]),
});
export type Feature = Static<typeof Feature>;

export const FeatureCollection = Type.Object({
  type: FeatureCollectionType,
  features: Type.Array(Feature),
});
export type FeatureCollection = Static<typeof FeatureCollection>;
