export const Latitude = {
  $id: "Latitude",
  minimum: -90,
  maximum: 90,
  type: "number",
};
export const Longitude = {
  $id: "Longitude",
  minimum: -180,
  maximum: 180,
  type: "number",
};
export const Altitude = {
  $id: "Altitude",
  type: "number",
};
export const Position2D = {
  $id: "Position2D",
  type: "array",
  items: [
    {
      $ref: "Longitude",
    },
    {
      $ref: "Latitude",
    },
  ],
  additionalItems: false,
  minItems: 2,
  maxItems: 2,
};
export const Position3D = {
  $id: "Position3D",
  type: "array",
  items: [
    {
      $ref: "Longitude",
    },
    {
      $ref: "Latitude",
    },
    {
      $ref: "Altitude",
    },
  ],
  additionalItems: false,
  minItems: 3,
  maxItems: 3,
};
export const Position = {
  $id: "Position",
  anyOf: [
    {
      $ref: "Position2D",
    },
    {
      $ref: "Position3D",
    },
  ],
};
export const BBox2D = {
  $id: "BBox2D",
  type: "array",
  items: [
    {
      $ref: "Longitude",
    },
    {
      $ref: "Latitude",
    },
    {
      $ref: "Longitude",
    },
    {
      $ref: "Latitude",
    },
  ],
  additionalItems: false,
  minItems: 4,
  maxItems: 4,
};
export const BBox3D = {
  $id: "BBox3D",
  type: "array",
  items: [
    {
      $ref: "Longitude",
    },
    {
      $ref: "Latitude",
    },
    {
      $ref: "Altitude",
    },
    {
      $ref: "Longitude",
    },
    {
      $ref: "Latitude",
    },
    {
      $ref: "Altitude",
    },
  ],
  additionalItems: false,
  minItems: 6,
  maxItems: 6,
};
export const BBox = {
  $id: "BBox",
  anyOf: [
    {
      $ref: "BBox2D",
    },
    {
      $ref: "BBox3D",
    },
  ],
};
export const MultiPointCoordinates = {
  $id: "MultiPointCoordinates",
  type: "array",
  items: {
    $ref: "Position",
  },
};
export const LineStringCoordinates = {
  minItems: 2,
  $id: "LineStringCoordinates",
  type: "array",
  items: {
    $ref: "Position",
  },
};
export const MultiLineStringCoordinates = {
  $id: "MultiLineStringCoordinates",
  type: "array",
  items: {
    $ref: "LineStringCoordinates",
  },
};
export const LinearRing = {
  minItems: 4,
  $id: "LinearRing",
  type: "array",
  items: {
    $ref: "Position",
  },
};
export const PolygonCoordinates = {
  $id: "PolygonCoordinates",
  type: "array",
  items: {
    $ref: "LinearRing",
  },
};
export const MultiPolygonCoordinates = {
  $id: "MultiPolygonCoordinates",
  type: "array",
  items: {
    $ref: "PolygonCoordinates",
  },
};
export const GeometryType = {
  $id: "GeometryType",
  anyOf: [
    {
      const: "Point",
      type: "string",
    },
    {
      const: "MultiPoint",
      type: "string",
    },
    {
      const: "LineString",
      type: "string",
    },
    {
      const: "MultiLineString",
      type: "string",
    },
    {
      const: "Polygon",
      type: "string",
    },
    {
      const: "MultiPolygon",
      type: "string",
    },
    {
      const: "GeometryCollection",
      type: "string",
    },
  ],
};
export const GeoJSONType = {
  $id: "GeoJSONType",
  anyOf: [
    {
      const: "Point",
      type: "string",
    },
    {
      const: "MultiPoint",
      type: "string",
    },
    {
      const: "LineString",
      type: "string",
    },
    {
      const: "MultiLineString",
      type: "string",
    },
    {
      const: "Polygon",
      type: "string",
    },
    {
      const: "MultiPolygon",
      type: "string",
    },
    {
      const: "GeometryCollection",
      type: "string",
    },
    {
      const: "Feature",
      type: "string",
    },
    {
      const: "FeatureCollection",
      type: "string",
    },
  ],
};
export const PointGeometry = {
  $id: "PointGeometry",
  type: "object",
  properties: {
    type: {
      const: "Point",
      type: "string",
    },
    coordinates: {
      $ref: "Position",
    },
  },
  required: ["type", "coordinates"],
};
export const MultiPointGeometry = {
  $id: "MultiPointGeometry",
  type: "object",
  properties: {
    type: {
      const: "MultiPoint",
      type: "string",
    },
    coordinates: {
      $ref: "MultiPointCoordinates",
    },
  },
  required: ["type", "coordinates"],
};
export const LineStringGeometry = {
  $id: "LineStringGeometry",
  type: "object",
  properties: {
    type: {
      const: "LineString",
      type: "string",
    },
    coordinates: {
      $ref: "LineStringCoordinates",
    },
  },
  required: ["type", "coordinates"],
};
export const MultiLineStringGeometry = {
  $id: "MultiLineStringGeometry",
  type: "object",
  properties: {
    type: {
      const: "MultiLineString",
      type: "string",
    },
    coordinates: {
      $ref: "MultiLineStringCoordinates",
    },
  },
  required: ["type", "coordinates"],
};
export const PolygonGeometry = {
  $id: "PolygonGeometry",
  type: "object",
  properties: {
    type: {
      const: "Polygon",
      type: "string",
    },
    coordinates: {
      $ref: "PolygonCoordinates",
    },
  },
  required: ["type", "coordinates"],
};
export const MultiPolygonGeometry = {
  $id: "MultiPolygonGeometry",
  type: "object",
  properties: {
    type: {
      const: "MultiPolygon",
      type: "string",
    },
    coordinates: {
      $ref: "MultiPolygonCoordinates",
    },
  },
  required: ["type", "coordinates"],
};
export const GeometryCollectionGeometry = {
  $id: "GeometryCollectionGeometry",
  type: "object",
  properties: {
    type: {
      const: "GeometryCollection",
      type: "string",
    },
    geometries: {
      type: "array",
      items: {
        anyOf: [
          {
            $ref: "GeometryCollectionGeometry",
          },
          {
            $ref: "PointGeometry",
          },
          {
            $ref: "MultiPointGeometry",
          },
          {
            $ref: "LineStringGeometry",
          },
          {
            $ref: "MultiLineStringGeometry",
          },
          {
            $ref: "PolygonGeometry",
          },
          {
            $ref: "MultiPolygonGeometry",
          },
        ],
      },
    },
  },
  required: ["type", "geometries"],
};
export const Geometry = {
  $id: "Geometry",
  anyOf: [
    {
      $ref: "PointGeometry",
    },
    {
      $ref: "MultiPointGeometry",
    },
    {
      $ref: "LineStringGeometry",
    },
    {
      $ref: "MultiLineStringGeometry",
    },
    {
      $ref: "PolygonGeometry",
    },
    {
      $ref: "MultiPolygonGeometry",
    },
    {
      $ref: "GeometryCollectionGeometry",
    },
  ],
};
export const Feature = {
  $id: "Feature",
  type: "object",
  properties: {
    id: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "number",
        },
      ],
    },
    type: {
      const: "Feature",
      type: "string",
    },
    geometry: {
      anyOf: [
        {
          $ref: "Geometry",
        },
        {
          type: "null",
        },
      ],
    },
    properties: {
      anyOf: [
        {
          $id: "GeoJSONProperties",
          type: "object",
          patternProperties: {
            "^(.*)$": {},
          },
        },
        {
          type: "null",
        },
      ],
    },
  },
  required: ["type", "geometry", "properties"],
};
export const FeatureCollection = {
  $id: "FeatureCollection",
  type: "object",
  properties: {
    type: {
      const: "FeatureCollection",
      type: "string",
    },
    features: {
      type: "array",
      items: {
        $ref: "Feature",
      },
    },
  },
  required: ["type", "features"],
};
