import { type Static, Type } from "@sinclair/typebox";

export const Latitude = Type.Number({
  $id: "Latitude",
  minimum: -90,
  maximum: 90,
});
export type Latitude = Static<typeof Latitude>;

export const Longitude = Type.Number({
  $id: "Longitude",
  minimum: -180,
  maximum: 180,
});
export type Longitude = Static<typeof Longitude>;

export const Altitude = Type.Number({ $id: "Altitude" });
export type Altitude = Static<typeof Altitude>;

export const Position2D = Type.Tuple([Longitude, Latitude], {
  $id: "Position2D",
});
export type Position2D = Static<typeof Position2D>;

export const Position3D = Type.Tuple([Longitude, Latitude, Altitude], {
  $id: "Position3D",
});
export type Position3D = Static<typeof Position3D>;

export const Position = Type.Union([Position2D, Position3D], {
  $id: "Position",
});
export type Position = Static<typeof Position>;

export const BBox2D = Type.Tuple([Longitude, Latitude, Longitude, Latitude], {
  $id: "BBox2D",
});
export type BBox2D = Static<typeof BBox2D>;

export const BBox3D = Type.Tuple(
  [Longitude, Latitude, Altitude, Longitude, Latitude, Altitude],
  { $id: "BBox3D" },
);
export type BBox3D = Static<typeof BBox3D>;

export const BBox = Type.Union([BBox2D, BBox3D], { $id: "BBox" });
export type BBox = Static<typeof BBox>;

export const MultiPointCoordinates = Type.Array(Position, {
  $id: "MultiPointCoordinates",
});
export type MultiPointCoordinates = Static<typeof MultiPointCoordinates>;

export const LineStringCoordinates = Type.Unsafe<
  [Position, Position, ...Position[]]
>(Type.Array(Position, { minItems: 2, $id: "LineStringCoordinates" }));
export type LineStringCoordinates = Static<typeof LineStringCoordinates>;

export const MultiLineStringCoordinates = Type.Array(LineStringCoordinates, {
  $id: "MultiLineStringCoordinates",
});
export type MultiLineStringCoordinates = Static<
  typeof MultiLineStringCoordinates
>;

export const LinearRing = Type.Unsafe<
  [Position, Position, Position, Position, ...Position[]]
>(Type.Array(Position, { minItems: 4, $id: "LinearRing" }));
export type LinearRing = Static<typeof LinearRing>;

export const PolygonCoordinates = Type.Array(LinearRing, {
  $id: "PolygonCoordinates",
});
export type PolygonCoordinates = Static<typeof PolygonCoordinates>;

export const MultiPolygonCoordinates = Type.Array(PolygonCoordinates, {
  $id: "MultiPolygonCoordinates",
});
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

export const GeometryType = Type.Union(
  [
    PointType,
    MultiPointType,
    LineStringType,
    MultiLineStringType,
    PolygonType,
    MultiPolygonType,
    GeometryCollectionType,
  ],
  { $id: "GeometryType" },
);
export type GeometryType = Static<typeof GeometryType>;

export const FeatureType = Type.Literal("Feature");
export type FeatureType = Static<typeof FeatureType>;

export const FeatureCollectionType = Type.Literal("FeatureCollection");
export type FeatureCollectionType = Static<typeof FeatureCollectionType>;

export const GeoJSONType = Type.Union(
  [...Type.Rest(GeometryType), FeatureType, FeatureCollectionType],
  { $id: "GeoJSONType" },
);
export type GeoJSONType = Static<typeof GeoJSONType>;

export const PointGeometry = Type.Object(
  {
    type: PointType,
    coordinates: Position,
  },
  { $id: "PointGeometry" },
);
export type PointGeometry = Static<typeof PointGeometry>;

export const MultiPointGeometry = Type.Object(
  {
    type: MultiPointType,
    coordinates: MultiPointCoordinates,
  },
  { $id: "MultiPointGeometry" },
);
export type MultiPointGeometry = Static<typeof MultiPointGeometry>;

export const LineStringGeometry = Type.Object(
  {
    type: LineStringType,
    coordinates: LineStringCoordinates,
  },
  { $id: "LineStringGeometry" },
);
export type LineStringGeometry = Static<typeof LineStringGeometry>;

export const MultiLineStringGeometry = Type.Object(
  {
    type: MultiLineStringType,
    coordinates: MultiLineStringCoordinates,
  },
  { $id: "MultiLineStringGeometry" },
);
export type MultiLineStringGeometry = Static<typeof MultiLineStringGeometry>;

export const PolygonGeometry = Type.Object(
  {
    type: PolygonType,
    coordinates: PolygonCoordinates,
  },
  { $id: "PolygonGeometry" },
);
export type PolygonGeometry = Static<typeof PolygonGeometry>;

export const MultiPolygonGeometry = Type.Object(
  {
    type: MultiPolygonType,
    coordinates: MultiPolygonCoordinates,
  },
  { $id: "MultiPolygonGeometry" },
);
export type MultiPolygonGeometry = Static<typeof MultiPolygonGeometry>;

export const GeometryCollectionGeometry = Type.Recursive(
  (Self) =>
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
        ]),
      ),
    }),
  { $id: "GeometryCollectionGeometry" },
);
export type GeometryCollectionGeometry = Static<
  typeof GeometryCollectionGeometry
>;

export const Geometry = Type.Union(
  [
    PointGeometry,
    MultiPointGeometry,
    LineStringGeometry,
    MultiLineStringGeometry,
    PolygonGeometry,
    MultiPolygonGeometry,
    GeometryCollectionGeometry,
  ],
  { $id: "Geometry" },
);
export type Geometry = Static<typeof Geometry>;

export const GeoJSONProperties = Type.Record(Type.String(), Type.Unknown(), {
  $id: "GeoJSONProperties",
});
export type GeoJSONProperties = Static<typeof GeoJSONProperties>;

export const Feature = Type.Object(
  {
    id: Type.Optional(Type.Union([Type.String(), Type.Number()])),
    type: FeatureType,
    geometry: Type.Union([Geometry, Type.Null()]),
    properties: Type.Union([GeoJSONProperties, Type.Null()]),
  },
  { $id: "Feature" },
);
export type Feature = Static<typeof Feature>;

export const FeatureCollection = Type.Object(
  {
    type: FeatureCollectionType,
    features: Type.Array(Feature),
  },
  { $id: "FeatureCollection" },
);
export type FeatureCollection = Static<typeof FeatureCollection>;
