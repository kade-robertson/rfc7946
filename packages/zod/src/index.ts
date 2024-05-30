import z from "zod";

export type Latitude = z.infer<typeof Latitude>;
export const Latitude = z.number().min(-90).max(90);

export type Longitude = z.infer<typeof Longitude>;
export const Longitude = z.number().min(-180).max(180);

export type Altitude = z.infer<typeof Altitude>;
export const Altitude = z.number();

export type Position2D = z.infer<typeof Position2D>;
export const Position2D = z.tuple([Longitude, Latitude]);

export type Position3D = z.infer<typeof Position3D>;
export const Position3D = z.tuple([Longitude, Latitude, Altitude]);

export type Position = z.infer<typeof Position>;
export const Position = z.union([Position2D, Position3D]);

export type BBox2D = z.infer<typeof BBox2D>;
export const BBox2D = z.tuple([Longitude, Latitude, Longitude, Latitude]);

export type BBox3D = z.infer<typeof BBox3D>;
export const BBox3D = z.tuple([
  Longitude,
  Latitude,
  Altitude,
  Longitude,
  Latitude,
  Altitude,
]);

export type BBox = z.infer<typeof BBox>;
export const BBox = z.union([BBox2D, BBox3D]);

export type MultiPointCoordinates = z.infer<typeof MultiPointCoordinates>;
export const MultiPointCoordinates = z.array(Position);

export type LineStringCoordinates = z.infer<typeof LineStringCoordinates>;
export const LineStringCoordinates = z.array(Position).min(2);

export type MultiLineStringCoordinates = z.infer<
  typeof MultiLineStringCoordinates
>;
export const MultiLineStringCoordinates = z.array(LineStringCoordinates);

export type LinearRing = z.infer<typeof LinearRing>;
export const LinearRing = z.array(Position).min(4);

export type PolygonCoordinates = z.infer<typeof PolygonCoordinates>;
export const PolygonCoordinates = z.array(LinearRing);

export type MultiPolygonCoordinates = z.infer<typeof MultiPolygonCoordinates>;
export const MultiPolygonCoordinates = z.array(PolygonCoordinates);

export type GeometryType = z.infer<typeof GeometryType>;
export const GeometryType = z.union([
  z.literal("Point"),
  z.literal("MultiPoint"),
  z.literal("LineString"),
  z.literal("MultiLineString"),
  z.literal("Polygon"),
  z.literal("MultiPolygon"),
  z.literal("GeometryCollection"),
]);

export type GeoJSONType = z.infer<typeof GeoJSONType>;
export const GeoJSONType = z.union([
  z.literal("Point"),
  z.literal("MultiPoint"),
  z.literal("LineString"),
  z.literal("MultiLineString"),
  z.literal("Polygon"),
  z.literal("MultiPolygon"),
  z.literal("GeometryCollection"),
  z.literal("Feature"),
  z.literal("FeatureCollection"),
]);

export type PointGeometry = z.infer<typeof PointGeometry>;
export const PointGeometry = z.object({
  type: z.literal("Point"),
  coordinates: Position,
});

export type MultiPointGeometry = z.infer<typeof MultiPointGeometry>;
export const MultiPointGeometry = z.object({
  type: z.literal("MultiPoint"),
  coordinates: MultiPointCoordinates,
});

export type LineStringGeometry = z.infer<typeof LineStringGeometry>;
export const LineStringGeometry = z.object({
  type: z.literal("LineString"),
  coordinates: LineStringCoordinates,
});

export type MultiLineStringGeometry = z.infer<typeof MultiLineStringGeometry>;
export const MultiLineStringGeometry = z.object({
  type: z.literal("MultiLineString"),
  coordinates: MultiLineStringCoordinates,
});

export type PolygonGeometry = z.infer<typeof PolygonGeometry>;
export const PolygonGeometry = z.object({
  type: z.literal("Polygon"),
  coordinates: PolygonCoordinates,
});

export type MultiPolygonGeometry = z.infer<typeof MultiPolygonGeometry>;
export const MultiPolygonGeometry = z.object({
  type: z.literal("MultiPolygon"),
  coordinates: MultiPolygonCoordinates,
});

export type GeometryCollectionGeometry = {
  type: "GeometryCollection";
  geometries: Array<
    | GeometryCollectionGeometry
    | PointGeometry
    | MultiPointGeometry
    | LineStringGeometry
    | MultiLineStringGeometry
    | PolygonGeometry
    | MultiPolygonGeometry
  >;
};
export const GeometryCollectionGeometry: z.ZodType<GeometryCollectionGeometry> =
  z.lazy(() =>
    z.object({
      type: z.literal("GeometryCollection"),
      geometries: z.array(
        z.union([
          GeometryCollectionGeometry,
          PointGeometry,
          MultiPointGeometry,
          LineStringGeometry,
          MultiLineStringGeometry,
          PolygonGeometry,
          MultiPolygonGeometry,
        ]),
      ),
    }),
  );
export type Geometry = z.infer<typeof Geometry>;
export const Geometry = z.union([
  PointGeometry,
  MultiPointGeometry,
  LineStringGeometry,
  MultiLineStringGeometry,
  PolygonGeometry,
  MultiPolygonGeometry,
  GeometryCollectionGeometry,
]);

export type Feature = z.infer<typeof Feature>;
export const Feature = z.object({
  id: z.union([z.string(), z.number()]).optional(),
  type: z.literal("Feature"),
  geometry: z.union([Geometry, z.null()]),
  properties: z.union([z.record(z.unknown()), z.null()]),
});

export type FeatureCollection = z.infer<typeof FeatureCollection>;
export const FeatureCollection = z.object({
  type: z.literal("FeatureCollection"),
  features: z.array(Feature),
});
