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
      $id: "Longitude",
      minimum: -180,
      maximum: 180,
      type: "number",
    },
    {
      $id: "Latitude",
      minimum: -90,
      maximum: 90,
      type: "number",
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
      $id: "Longitude",
      minimum: -180,
      maximum: 180,
      type: "number",
    },
    {
      $id: "Latitude",
      minimum: -90,
      maximum: 90,
      type: "number",
    },
    {
      $id: "Altitude",
      type: "number",
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
      $id: "Position2D",
      type: "array",
      items: [
        {
          $id: "Longitude",
          minimum: -180,
          maximum: 180,
          type: "number",
        },
        {
          $id: "Latitude",
          minimum: -90,
          maximum: 90,
          type: "number",
        },
      ],
      additionalItems: false,
      minItems: 2,
      maxItems: 2,
    },
    {
      $id: "Position3D",
      type: "array",
      items: [
        {
          $id: "Longitude",
          minimum: -180,
          maximum: 180,
          type: "number",
        },
        {
          $id: "Latitude",
          minimum: -90,
          maximum: 90,
          type: "number",
        },
        {
          $id: "Altitude",
          type: "number",
        },
      ],
      additionalItems: false,
      minItems: 3,
      maxItems: 3,
    },
  ],
};
export const BBox2D = {
  $id: "BBox2D",
  type: "array",
  items: [
    {
      $id: "Longitude",
      minimum: -180,
      maximum: 180,
      type: "number",
    },
    {
      $id: "Latitude",
      minimum: -90,
      maximum: 90,
      type: "number",
    },
    {
      $id: "Longitude",
      minimum: -180,
      maximum: 180,
      type: "number",
    },
    {
      $id: "Latitude",
      minimum: -90,
      maximum: 90,
      type: "number",
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
      $id: "Longitude",
      minimum: -180,
      maximum: 180,
      type: "number",
    },
    {
      $id: "Latitude",
      minimum: -90,
      maximum: 90,
      type: "number",
    },
    {
      $id: "Altitude",
      type: "number",
    },
    {
      $id: "Longitude",
      minimum: -180,
      maximum: 180,
      type: "number",
    },
    {
      $id: "Latitude",
      minimum: -90,
      maximum: 90,
      type: "number",
    },
    {
      $id: "Altitude",
      type: "number",
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
      $id: "BBox2D",
      type: "array",
      items: [
        {
          $id: "Longitude",
          minimum: -180,
          maximum: 180,
          type: "number",
        },
        {
          $id: "Latitude",
          minimum: -90,
          maximum: 90,
          type: "number",
        },
        {
          $id: "Longitude",
          minimum: -180,
          maximum: 180,
          type: "number",
        },
        {
          $id: "Latitude",
          minimum: -90,
          maximum: 90,
          type: "number",
        },
      ],
      additionalItems: false,
      minItems: 4,
      maxItems: 4,
    },
    {
      $id: "BBox3D",
      type: "array",
      items: [
        {
          $id: "Longitude",
          minimum: -180,
          maximum: 180,
          type: "number",
        },
        {
          $id: "Latitude",
          minimum: -90,
          maximum: 90,
          type: "number",
        },
        {
          $id: "Altitude",
          type: "number",
        },
        {
          $id: "Longitude",
          minimum: -180,
          maximum: 180,
          type: "number",
        },
        {
          $id: "Latitude",
          minimum: -90,
          maximum: 90,
          type: "number",
        },
        {
          $id: "Altitude",
          type: "number",
        },
      ],
      additionalItems: false,
      minItems: 6,
      maxItems: 6,
    },
  ],
};
export const MultiPointCoordinates = {
  $id: "MultiPointCoordinates",
  type: "array",
  items: {
    $id: "Position",
    anyOf: [
      {
        $id: "Position2D",
        type: "array",
        items: [
          {
            $id: "Longitude",
            minimum: -180,
            maximum: 180,
            type: "number",
          },
          {
            $id: "Latitude",
            minimum: -90,
            maximum: 90,
            type: "number",
          },
        ],
        additionalItems: false,
        minItems: 2,
        maxItems: 2,
      },
      {
        $id: "Position3D",
        type: "array",
        items: [
          {
            $id: "Longitude",
            minimum: -180,
            maximum: 180,
            type: "number",
          },
          {
            $id: "Latitude",
            minimum: -90,
            maximum: 90,
            type: "number",
          },
          {
            $id: "Altitude",
            type: "number",
          },
        ],
        additionalItems: false,
        minItems: 3,
        maxItems: 3,
      },
    ],
  },
};
export const LineStringCoordinates = {
  minItems: 2,
  $id: "LineStringCoordinates",
  type: "array",
  items: {
    $id: "Position",
    anyOf: [
      {
        $id: "Position2D",
        type: "array",
        items: [
          {
            $id: "Longitude",
            minimum: -180,
            maximum: 180,
            type: "number",
          },
          {
            $id: "Latitude",
            minimum: -90,
            maximum: 90,
            type: "number",
          },
        ],
        additionalItems: false,
        minItems: 2,
        maxItems: 2,
      },
      {
        $id: "Position3D",
        type: "array",
        items: [
          {
            $id: "Longitude",
            minimum: -180,
            maximum: 180,
            type: "number",
          },
          {
            $id: "Latitude",
            minimum: -90,
            maximum: 90,
            type: "number",
          },
          {
            $id: "Altitude",
            type: "number",
          },
        ],
        additionalItems: false,
        minItems: 3,
        maxItems: 3,
      },
    ],
  },
};
export const MultiLineStringCoordinates = {
  $id: "MultiLineStringCoordinates",
  type: "array",
  items: {
    minItems: 2,
    $id: "LineStringCoordinates",
    type: "array",
    items: {
      $id: "Position",
      anyOf: [
        {
          $id: "Position2D",
          type: "array",
          items: [
            {
              $id: "Longitude",
              minimum: -180,
              maximum: 180,
              type: "number",
            },
            {
              $id: "Latitude",
              minimum: -90,
              maximum: 90,
              type: "number",
            },
          ],
          additionalItems: false,
          minItems: 2,
          maxItems: 2,
        },
        {
          $id: "Position3D",
          type: "array",
          items: [
            {
              $id: "Longitude",
              minimum: -180,
              maximum: 180,
              type: "number",
            },
            {
              $id: "Latitude",
              minimum: -90,
              maximum: 90,
              type: "number",
            },
            {
              $id: "Altitude",
              type: "number",
            },
          ],
          additionalItems: false,
          minItems: 3,
          maxItems: 3,
        },
      ],
    },
  },
};
export const LinearRing = {
  minItems: 4,
  $id: "LinearRing",
  type: "array",
  items: {
    $id: "Position",
    anyOf: [
      {
        $id: "Position2D",
        type: "array",
        items: [
          {
            $id: "Longitude",
            minimum: -180,
            maximum: 180,
            type: "number",
          },
          {
            $id: "Latitude",
            minimum: -90,
            maximum: 90,
            type: "number",
          },
        ],
        additionalItems: false,
        minItems: 2,
        maxItems: 2,
      },
      {
        $id: "Position3D",
        type: "array",
        items: [
          {
            $id: "Longitude",
            minimum: -180,
            maximum: 180,
            type: "number",
          },
          {
            $id: "Latitude",
            minimum: -90,
            maximum: 90,
            type: "number",
          },
          {
            $id: "Altitude",
            type: "number",
          },
        ],
        additionalItems: false,
        minItems: 3,
        maxItems: 3,
      },
    ],
  },
};
export const PolygonCoordinates = {
  $id: "PolygonCoordinates",
  type: "array",
  items: {
    minItems: 4,
    $id: "LinearRing",
    type: "array",
    items: {
      $id: "Position",
      anyOf: [
        {
          $id: "Position2D",
          type: "array",
          items: [
            {
              $id: "Longitude",
              minimum: -180,
              maximum: 180,
              type: "number",
            },
            {
              $id: "Latitude",
              minimum: -90,
              maximum: 90,
              type: "number",
            },
          ],
          additionalItems: false,
          minItems: 2,
          maxItems: 2,
        },
        {
          $id: "Position3D",
          type: "array",
          items: [
            {
              $id: "Longitude",
              minimum: -180,
              maximum: 180,
              type: "number",
            },
            {
              $id: "Latitude",
              minimum: -90,
              maximum: 90,
              type: "number",
            },
            {
              $id: "Altitude",
              type: "number",
            },
          ],
          additionalItems: false,
          minItems: 3,
          maxItems: 3,
        },
      ],
    },
  },
};
export const MultiPolygonCoordinates = {
  $id: "MultiPolygonCoordinates",
  type: "array",
  items: {
    $id: "PolygonCoordinates",
    type: "array",
    items: {
      minItems: 4,
      $id: "LinearRing",
      type: "array",
      items: {
        $id: "Position",
        anyOf: [
          {
            $id: "Position2D",
            type: "array",
            items: [
              {
                $id: "Longitude",
                minimum: -180,
                maximum: 180,
                type: "number",
              },
              {
                $id: "Latitude",
                minimum: -90,
                maximum: 90,
                type: "number",
              },
            ],
            additionalItems: false,
            minItems: 2,
            maxItems: 2,
          },
          {
            $id: "Position3D",
            type: "array",
            items: [
              {
                $id: "Longitude",
                minimum: -180,
                maximum: 180,
                type: "number",
              },
              {
                $id: "Latitude",
                minimum: -90,
                maximum: 90,
                type: "number",
              },
              {
                $id: "Altitude",
                type: "number",
              },
            ],
            additionalItems: false,
            minItems: 3,
            maxItems: 3,
          },
        ],
      },
    },
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
      $id: "Position",
      anyOf: [
        {
          $id: "Position2D",
          type: "array",
          items: [
            {
              $id: "Longitude",
              minimum: -180,
              maximum: 180,
              type: "number",
            },
            {
              $id: "Latitude",
              minimum: -90,
              maximum: 90,
              type: "number",
            },
          ],
          additionalItems: false,
          minItems: 2,
          maxItems: 2,
        },
        {
          $id: "Position3D",
          type: "array",
          items: [
            {
              $id: "Longitude",
              minimum: -180,
              maximum: 180,
              type: "number",
            },
            {
              $id: "Latitude",
              minimum: -90,
              maximum: 90,
              type: "number",
            },
            {
              $id: "Altitude",
              type: "number",
            },
          ],
          additionalItems: false,
          minItems: 3,
          maxItems: 3,
        },
      ],
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
      $id: "MultiPointCoordinates",
      type: "array",
      items: {
        $id: "Position",
        anyOf: [
          {
            $id: "Position2D",
            type: "array",
            items: [
              {
                $id: "Longitude",
                minimum: -180,
                maximum: 180,
                type: "number",
              },
              {
                $id: "Latitude",
                minimum: -90,
                maximum: 90,
                type: "number",
              },
            ],
            additionalItems: false,
            minItems: 2,
            maxItems: 2,
          },
          {
            $id: "Position3D",
            type: "array",
            items: [
              {
                $id: "Longitude",
                minimum: -180,
                maximum: 180,
                type: "number",
              },
              {
                $id: "Latitude",
                minimum: -90,
                maximum: 90,
                type: "number",
              },
              {
                $id: "Altitude",
                type: "number",
              },
            ],
            additionalItems: false,
            minItems: 3,
            maxItems: 3,
          },
        ],
      },
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
      minItems: 2,
      $id: "LineStringCoordinates",
      type: "array",
      items: {
        $id: "Position",
        anyOf: [
          {
            $id: "Position2D",
            type: "array",
            items: [
              {
                $id: "Longitude",
                minimum: -180,
                maximum: 180,
                type: "number",
              },
              {
                $id: "Latitude",
                minimum: -90,
                maximum: 90,
                type: "number",
              },
            ],
            additionalItems: false,
            minItems: 2,
            maxItems: 2,
          },
          {
            $id: "Position3D",
            type: "array",
            items: [
              {
                $id: "Longitude",
                minimum: -180,
                maximum: 180,
                type: "number",
              },
              {
                $id: "Latitude",
                minimum: -90,
                maximum: 90,
                type: "number",
              },
              {
                $id: "Altitude",
                type: "number",
              },
            ],
            additionalItems: false,
            minItems: 3,
            maxItems: 3,
          },
        ],
      },
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
      $id: "MultiLineStringCoordinates",
      type: "array",
      items: {
        minItems: 2,
        $id: "LineStringCoordinates",
        type: "array",
        items: {
          $id: "Position",
          anyOf: [
            {
              $id: "Position2D",
              type: "array",
              items: [
                {
                  $id: "Longitude",
                  minimum: -180,
                  maximum: 180,
                  type: "number",
                },
                {
                  $id: "Latitude",
                  minimum: -90,
                  maximum: 90,
                  type: "number",
                },
              ],
              additionalItems: false,
              minItems: 2,
              maxItems: 2,
            },
            {
              $id: "Position3D",
              type: "array",
              items: [
                {
                  $id: "Longitude",
                  minimum: -180,
                  maximum: 180,
                  type: "number",
                },
                {
                  $id: "Latitude",
                  minimum: -90,
                  maximum: 90,
                  type: "number",
                },
                {
                  $id: "Altitude",
                  type: "number",
                },
              ],
              additionalItems: false,
              minItems: 3,
              maxItems: 3,
            },
          ],
        },
      },
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
      $id: "PolygonCoordinates",
      type: "array",
      items: {
        minItems: 4,
        $id: "LinearRing",
        type: "array",
        items: {
          $id: "Position",
          anyOf: [
            {
              $id: "Position2D",
              type: "array",
              items: [
                {
                  $id: "Longitude",
                  minimum: -180,
                  maximum: 180,
                  type: "number",
                },
                {
                  $id: "Latitude",
                  minimum: -90,
                  maximum: 90,
                  type: "number",
                },
              ],
              additionalItems: false,
              minItems: 2,
              maxItems: 2,
            },
            {
              $id: "Position3D",
              type: "array",
              items: [
                {
                  $id: "Longitude",
                  minimum: -180,
                  maximum: 180,
                  type: "number",
                },
                {
                  $id: "Latitude",
                  minimum: -90,
                  maximum: 90,
                  type: "number",
                },
                {
                  $id: "Altitude",
                  type: "number",
                },
              ],
              additionalItems: false,
              minItems: 3,
              maxItems: 3,
            },
          ],
        },
      },
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
      $id: "MultiPolygonCoordinates",
      type: "array",
      items: {
        $id: "PolygonCoordinates",
        type: "array",
        items: {
          minItems: 4,
          $id: "LinearRing",
          type: "array",
          items: {
            $id: "Position",
            anyOf: [
              {
                $id: "Position2D",
                type: "array",
                items: [
                  {
                    $id: "Longitude",
                    minimum: -180,
                    maximum: 180,
                    type: "number",
                  },
                  {
                    $id: "Latitude",
                    minimum: -90,
                    maximum: 90,
                    type: "number",
                  },
                ],
                additionalItems: false,
                minItems: 2,
                maxItems: 2,
              },
              {
                $id: "Position3D",
                type: "array",
                items: [
                  {
                    $id: "Longitude",
                    minimum: -180,
                    maximum: 180,
                    type: "number",
                  },
                  {
                    $id: "Latitude",
                    minimum: -90,
                    maximum: 90,
                    type: "number",
                  },
                  {
                    $id: "Altitude",
                    type: "number",
                  },
                ],
                additionalItems: false,
                minItems: 3,
                maxItems: 3,
              },
            ],
          },
        },
      },
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
            $id: "PointGeometry",
            type: "object",
            properties: {
              type: {
                const: "Point",
                type: "string",
              },
              coordinates: {
                $id: "Position",
                anyOf: [
                  {
                    $id: "Position2D",
                    type: "array",
                    items: [
                      {
                        $id: "Longitude",
                        minimum: -180,
                        maximum: 180,
                        type: "number",
                      },
                      {
                        $id: "Latitude",
                        minimum: -90,
                        maximum: 90,
                        type: "number",
                      },
                    ],
                    additionalItems: false,
                    minItems: 2,
                    maxItems: 2,
                  },
                  {
                    $id: "Position3D",
                    type: "array",
                    items: [
                      {
                        $id: "Longitude",
                        minimum: -180,
                        maximum: 180,
                        type: "number",
                      },
                      {
                        $id: "Latitude",
                        minimum: -90,
                        maximum: 90,
                        type: "number",
                      },
                      {
                        $id: "Altitude",
                        type: "number",
                      },
                    ],
                    additionalItems: false,
                    minItems: 3,
                    maxItems: 3,
                  },
                ],
              },
            },
            required: ["type", "coordinates"],
          },
          {
            $id: "MultiPointGeometry",
            type: "object",
            properties: {
              type: {
                const: "MultiPoint",
                type: "string",
              },
              coordinates: {
                $id: "MultiPointCoordinates",
                type: "array",
                items: {
                  $id: "Position",
                  anyOf: [
                    {
                      $id: "Position2D",
                      type: "array",
                      items: [
                        {
                          $id: "Longitude",
                          minimum: -180,
                          maximum: 180,
                          type: "number",
                        },
                        {
                          $id: "Latitude",
                          minimum: -90,
                          maximum: 90,
                          type: "number",
                        },
                      ],
                      additionalItems: false,
                      minItems: 2,
                      maxItems: 2,
                    },
                    {
                      $id: "Position3D",
                      type: "array",
                      items: [
                        {
                          $id: "Longitude",
                          minimum: -180,
                          maximum: 180,
                          type: "number",
                        },
                        {
                          $id: "Latitude",
                          minimum: -90,
                          maximum: 90,
                          type: "number",
                        },
                        {
                          $id: "Altitude",
                          type: "number",
                        },
                      ],
                      additionalItems: false,
                      minItems: 3,
                      maxItems: 3,
                    },
                  ],
                },
              },
            },
            required: ["type", "coordinates"],
          },
          {
            $id: "LineStringGeometry",
            type: "object",
            properties: {
              type: {
                const: "LineString",
                type: "string",
              },
              coordinates: {
                minItems: 2,
                $id: "LineStringCoordinates",
                type: "array",
                items: {
                  $id: "Position",
                  anyOf: [
                    {
                      $id: "Position2D",
                      type: "array",
                      items: [
                        {
                          $id: "Longitude",
                          minimum: -180,
                          maximum: 180,
                          type: "number",
                        },
                        {
                          $id: "Latitude",
                          minimum: -90,
                          maximum: 90,
                          type: "number",
                        },
                      ],
                      additionalItems: false,
                      minItems: 2,
                      maxItems: 2,
                    },
                    {
                      $id: "Position3D",
                      type: "array",
                      items: [
                        {
                          $id: "Longitude",
                          minimum: -180,
                          maximum: 180,
                          type: "number",
                        },
                        {
                          $id: "Latitude",
                          minimum: -90,
                          maximum: 90,
                          type: "number",
                        },
                        {
                          $id: "Altitude",
                          type: "number",
                        },
                      ],
                      additionalItems: false,
                      minItems: 3,
                      maxItems: 3,
                    },
                  ],
                },
              },
            },
            required: ["type", "coordinates"],
          },
          {
            $id: "MultiLineStringGeometry",
            type: "object",
            properties: {
              type: {
                const: "MultiLineString",
                type: "string",
              },
              coordinates: {
                $id: "MultiLineStringCoordinates",
                type: "array",
                items: {
                  minItems: 2,
                  $id: "LineStringCoordinates",
                  type: "array",
                  items: {
                    $id: "Position",
                    anyOf: [
                      {
                        $id: "Position2D",
                        type: "array",
                        items: [
                          {
                            $id: "Longitude",
                            minimum: -180,
                            maximum: 180,
                            type: "number",
                          },
                          {
                            $id: "Latitude",
                            minimum: -90,
                            maximum: 90,
                            type: "number",
                          },
                        ],
                        additionalItems: false,
                        minItems: 2,
                        maxItems: 2,
                      },
                      {
                        $id: "Position3D",
                        type: "array",
                        items: [
                          {
                            $id: "Longitude",
                            minimum: -180,
                            maximum: 180,
                            type: "number",
                          },
                          {
                            $id: "Latitude",
                            minimum: -90,
                            maximum: 90,
                            type: "number",
                          },
                          {
                            $id: "Altitude",
                            type: "number",
                          },
                        ],
                        additionalItems: false,
                        minItems: 3,
                        maxItems: 3,
                      },
                    ],
                  },
                },
              },
            },
            required: ["type", "coordinates"],
          },
          {
            $id: "PolygonGeometry",
            type: "object",
            properties: {
              type: {
                const: "Polygon",
                type: "string",
              },
              coordinates: {
                $id: "PolygonCoordinates",
                type: "array",
                items: {
                  minItems: 4,
                  $id: "LinearRing",
                  type: "array",
                  items: {
                    $id: "Position",
                    anyOf: [
                      {
                        $id: "Position2D",
                        type: "array",
                        items: [
                          {
                            $id: "Longitude",
                            minimum: -180,
                            maximum: 180,
                            type: "number",
                          },
                          {
                            $id: "Latitude",
                            minimum: -90,
                            maximum: 90,
                            type: "number",
                          },
                        ],
                        additionalItems: false,
                        minItems: 2,
                        maxItems: 2,
                      },
                      {
                        $id: "Position3D",
                        type: "array",
                        items: [
                          {
                            $id: "Longitude",
                            minimum: -180,
                            maximum: 180,
                            type: "number",
                          },
                          {
                            $id: "Latitude",
                            minimum: -90,
                            maximum: 90,
                            type: "number",
                          },
                          {
                            $id: "Altitude",
                            type: "number",
                          },
                        ],
                        additionalItems: false,
                        minItems: 3,
                        maxItems: 3,
                      },
                    ],
                  },
                },
              },
            },
            required: ["type", "coordinates"],
          },
          {
            $id: "MultiPolygonGeometry",
            type: "object",
            properties: {
              type: {
                const: "MultiPolygon",
                type: "string",
              },
              coordinates: {
                $id: "MultiPolygonCoordinates",
                type: "array",
                items: {
                  $id: "PolygonCoordinates",
                  type: "array",
                  items: {
                    minItems: 4,
                    $id: "LinearRing",
                    type: "array",
                    items: {
                      $id: "Position",
                      anyOf: [
                        {
                          $id: "Position2D",
                          type: "array",
                          items: [
                            {
                              $id: "Longitude",
                              minimum: -180,
                              maximum: 180,
                              type: "number",
                            },
                            {
                              $id: "Latitude",
                              minimum: -90,
                              maximum: 90,
                              type: "number",
                            },
                          ],
                          additionalItems: false,
                          minItems: 2,
                          maxItems: 2,
                        },
                        {
                          $id: "Position3D",
                          type: "array",
                          items: [
                            {
                              $id: "Longitude",
                              minimum: -180,
                              maximum: 180,
                              type: "number",
                            },
                            {
                              $id: "Latitude",
                              minimum: -90,
                              maximum: 90,
                              type: "number",
                            },
                            {
                              $id: "Altitude",
                              type: "number",
                            },
                          ],
                          additionalItems: false,
                          minItems: 3,
                          maxItems: 3,
                        },
                      ],
                    },
                  },
                },
              },
            },
            required: ["type", "coordinates"],
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
      $id: "PointGeometry",
      type: "object",
      properties: {
        type: {
          const: "Point",
          type: "string",
        },
        coordinates: {
          $id: "Position",
          anyOf: [
            {
              $id: "Position2D",
              type: "array",
              items: [
                {
                  $id: "Longitude",
                  minimum: -180,
                  maximum: 180,
                  type: "number",
                },
                {
                  $id: "Latitude",
                  minimum: -90,
                  maximum: 90,
                  type: "number",
                },
              ],
              additionalItems: false,
              minItems: 2,
              maxItems: 2,
            },
            {
              $id: "Position3D",
              type: "array",
              items: [
                {
                  $id: "Longitude",
                  minimum: -180,
                  maximum: 180,
                  type: "number",
                },
                {
                  $id: "Latitude",
                  minimum: -90,
                  maximum: 90,
                  type: "number",
                },
                {
                  $id: "Altitude",
                  type: "number",
                },
              ],
              additionalItems: false,
              minItems: 3,
              maxItems: 3,
            },
          ],
        },
      },
      required: ["type", "coordinates"],
    },
    {
      $id: "MultiPointGeometry",
      type: "object",
      properties: {
        type: {
          const: "MultiPoint",
          type: "string",
        },
        coordinates: {
          $id: "MultiPointCoordinates",
          type: "array",
          items: {
            $id: "Position",
            anyOf: [
              {
                $id: "Position2D",
                type: "array",
                items: [
                  {
                    $id: "Longitude",
                    minimum: -180,
                    maximum: 180,
                    type: "number",
                  },
                  {
                    $id: "Latitude",
                    minimum: -90,
                    maximum: 90,
                    type: "number",
                  },
                ],
                additionalItems: false,
                minItems: 2,
                maxItems: 2,
              },
              {
                $id: "Position3D",
                type: "array",
                items: [
                  {
                    $id: "Longitude",
                    minimum: -180,
                    maximum: 180,
                    type: "number",
                  },
                  {
                    $id: "Latitude",
                    minimum: -90,
                    maximum: 90,
                    type: "number",
                  },
                  {
                    $id: "Altitude",
                    type: "number",
                  },
                ],
                additionalItems: false,
                minItems: 3,
                maxItems: 3,
              },
            ],
          },
        },
      },
      required: ["type", "coordinates"],
    },
    {
      $id: "LineStringGeometry",
      type: "object",
      properties: {
        type: {
          const: "LineString",
          type: "string",
        },
        coordinates: {
          minItems: 2,
          $id: "LineStringCoordinates",
          type: "array",
          items: {
            $id: "Position",
            anyOf: [
              {
                $id: "Position2D",
                type: "array",
                items: [
                  {
                    $id: "Longitude",
                    minimum: -180,
                    maximum: 180,
                    type: "number",
                  },
                  {
                    $id: "Latitude",
                    minimum: -90,
                    maximum: 90,
                    type: "number",
                  },
                ],
                additionalItems: false,
                minItems: 2,
                maxItems: 2,
              },
              {
                $id: "Position3D",
                type: "array",
                items: [
                  {
                    $id: "Longitude",
                    minimum: -180,
                    maximum: 180,
                    type: "number",
                  },
                  {
                    $id: "Latitude",
                    minimum: -90,
                    maximum: 90,
                    type: "number",
                  },
                  {
                    $id: "Altitude",
                    type: "number",
                  },
                ],
                additionalItems: false,
                minItems: 3,
                maxItems: 3,
              },
            ],
          },
        },
      },
      required: ["type", "coordinates"],
    },
    {
      $id: "MultiLineStringGeometry",
      type: "object",
      properties: {
        type: {
          const: "MultiLineString",
          type: "string",
        },
        coordinates: {
          $id: "MultiLineStringCoordinates",
          type: "array",
          items: {
            minItems: 2,
            $id: "LineStringCoordinates",
            type: "array",
            items: {
              $id: "Position",
              anyOf: [
                {
                  $id: "Position2D",
                  type: "array",
                  items: [
                    {
                      $id: "Longitude",
                      minimum: -180,
                      maximum: 180,
                      type: "number",
                    },
                    {
                      $id: "Latitude",
                      minimum: -90,
                      maximum: 90,
                      type: "number",
                    },
                  ],
                  additionalItems: false,
                  minItems: 2,
                  maxItems: 2,
                },
                {
                  $id: "Position3D",
                  type: "array",
                  items: [
                    {
                      $id: "Longitude",
                      minimum: -180,
                      maximum: 180,
                      type: "number",
                    },
                    {
                      $id: "Latitude",
                      minimum: -90,
                      maximum: 90,
                      type: "number",
                    },
                    {
                      $id: "Altitude",
                      type: "number",
                    },
                  ],
                  additionalItems: false,
                  minItems: 3,
                  maxItems: 3,
                },
              ],
            },
          },
        },
      },
      required: ["type", "coordinates"],
    },
    {
      $id: "PolygonGeometry",
      type: "object",
      properties: {
        type: {
          const: "Polygon",
          type: "string",
        },
        coordinates: {
          $id: "PolygonCoordinates",
          type: "array",
          items: {
            minItems: 4,
            $id: "LinearRing",
            type: "array",
            items: {
              $id: "Position",
              anyOf: [
                {
                  $id: "Position2D",
                  type: "array",
                  items: [
                    {
                      $id: "Longitude",
                      minimum: -180,
                      maximum: 180,
                      type: "number",
                    },
                    {
                      $id: "Latitude",
                      minimum: -90,
                      maximum: 90,
                      type: "number",
                    },
                  ],
                  additionalItems: false,
                  minItems: 2,
                  maxItems: 2,
                },
                {
                  $id: "Position3D",
                  type: "array",
                  items: [
                    {
                      $id: "Longitude",
                      minimum: -180,
                      maximum: 180,
                      type: "number",
                    },
                    {
                      $id: "Latitude",
                      minimum: -90,
                      maximum: 90,
                      type: "number",
                    },
                    {
                      $id: "Altitude",
                      type: "number",
                    },
                  ],
                  additionalItems: false,
                  minItems: 3,
                  maxItems: 3,
                },
              ],
            },
          },
        },
      },
      required: ["type", "coordinates"],
    },
    {
      $id: "MultiPolygonGeometry",
      type: "object",
      properties: {
        type: {
          const: "MultiPolygon",
          type: "string",
        },
        coordinates: {
          $id: "MultiPolygonCoordinates",
          type: "array",
          items: {
            $id: "PolygonCoordinates",
            type: "array",
            items: {
              minItems: 4,
              $id: "LinearRing",
              type: "array",
              items: {
                $id: "Position",
                anyOf: [
                  {
                    $id: "Position2D",
                    type: "array",
                    items: [
                      {
                        $id: "Longitude",
                        minimum: -180,
                        maximum: 180,
                        type: "number",
                      },
                      {
                        $id: "Latitude",
                        minimum: -90,
                        maximum: 90,
                        type: "number",
                      },
                    ],
                    additionalItems: false,
                    minItems: 2,
                    maxItems: 2,
                  },
                  {
                    $id: "Position3D",
                    type: "array",
                    items: [
                      {
                        $id: "Longitude",
                        minimum: -180,
                        maximum: 180,
                        type: "number",
                      },
                      {
                        $id: "Latitude",
                        minimum: -90,
                        maximum: 90,
                        type: "number",
                      },
                      {
                        $id: "Altitude",
                        type: "number",
                      },
                    ],
                    additionalItems: false,
                    minItems: 3,
                    maxItems: 3,
                  },
                ],
              },
            },
          },
        },
      },
      required: ["type", "coordinates"],
    },
    {
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
                $id: "PointGeometry",
                type: "object",
                properties: {
                  type: {
                    const: "Point",
                    type: "string",
                  },
                  coordinates: {
                    $id: "Position",
                    anyOf: [
                      {
                        $id: "Position2D",
                        type: "array",
                        items: [
                          {
                            $id: "Longitude",
                            minimum: -180,
                            maximum: 180,
                            type: "number",
                          },
                          {
                            $id: "Latitude",
                            minimum: -90,
                            maximum: 90,
                            type: "number",
                          },
                        ],
                        additionalItems: false,
                        minItems: 2,
                        maxItems: 2,
                      },
                      {
                        $id: "Position3D",
                        type: "array",
                        items: [
                          {
                            $id: "Longitude",
                            minimum: -180,
                            maximum: 180,
                            type: "number",
                          },
                          {
                            $id: "Latitude",
                            minimum: -90,
                            maximum: 90,
                            type: "number",
                          },
                          {
                            $id: "Altitude",
                            type: "number",
                          },
                        ],
                        additionalItems: false,
                        minItems: 3,
                        maxItems: 3,
                      },
                    ],
                  },
                },
                required: ["type", "coordinates"],
              },
              {
                $id: "MultiPointGeometry",
                type: "object",
                properties: {
                  type: {
                    const: "MultiPoint",
                    type: "string",
                  },
                  coordinates: {
                    $id: "MultiPointCoordinates",
                    type: "array",
                    items: {
                      $id: "Position",
                      anyOf: [
                        {
                          $id: "Position2D",
                          type: "array",
                          items: [
                            {
                              $id: "Longitude",
                              minimum: -180,
                              maximum: 180,
                              type: "number",
                            },
                            {
                              $id: "Latitude",
                              minimum: -90,
                              maximum: 90,
                              type: "number",
                            },
                          ],
                          additionalItems: false,
                          minItems: 2,
                          maxItems: 2,
                        },
                        {
                          $id: "Position3D",
                          type: "array",
                          items: [
                            {
                              $id: "Longitude",
                              minimum: -180,
                              maximum: 180,
                              type: "number",
                            },
                            {
                              $id: "Latitude",
                              minimum: -90,
                              maximum: 90,
                              type: "number",
                            },
                            {
                              $id: "Altitude",
                              type: "number",
                            },
                          ],
                          additionalItems: false,
                          minItems: 3,
                          maxItems: 3,
                        },
                      ],
                    },
                  },
                },
                required: ["type", "coordinates"],
              },
              {
                $id: "LineStringGeometry",
                type: "object",
                properties: {
                  type: {
                    const: "LineString",
                    type: "string",
                  },
                  coordinates: {
                    minItems: 2,
                    $id: "LineStringCoordinates",
                    type: "array",
                    items: {
                      $id: "Position",
                      anyOf: [
                        {
                          $id: "Position2D",
                          type: "array",
                          items: [
                            {
                              $id: "Longitude",
                              minimum: -180,
                              maximum: 180,
                              type: "number",
                            },
                            {
                              $id: "Latitude",
                              minimum: -90,
                              maximum: 90,
                              type: "number",
                            },
                          ],
                          additionalItems: false,
                          minItems: 2,
                          maxItems: 2,
                        },
                        {
                          $id: "Position3D",
                          type: "array",
                          items: [
                            {
                              $id: "Longitude",
                              minimum: -180,
                              maximum: 180,
                              type: "number",
                            },
                            {
                              $id: "Latitude",
                              minimum: -90,
                              maximum: 90,
                              type: "number",
                            },
                            {
                              $id: "Altitude",
                              type: "number",
                            },
                          ],
                          additionalItems: false,
                          minItems: 3,
                          maxItems: 3,
                        },
                      ],
                    },
                  },
                },
                required: ["type", "coordinates"],
              },
              {
                $id: "MultiLineStringGeometry",
                type: "object",
                properties: {
                  type: {
                    const: "MultiLineString",
                    type: "string",
                  },
                  coordinates: {
                    $id: "MultiLineStringCoordinates",
                    type: "array",
                    items: {
                      minItems: 2,
                      $id: "LineStringCoordinates",
                      type: "array",
                      items: {
                        $id: "Position",
                        anyOf: [
                          {
                            $id: "Position2D",
                            type: "array",
                            items: [
                              {
                                $id: "Longitude",
                                minimum: -180,
                                maximum: 180,
                                type: "number",
                              },
                              {
                                $id: "Latitude",
                                minimum: -90,
                                maximum: 90,
                                type: "number",
                              },
                            ],
                            additionalItems: false,
                            minItems: 2,
                            maxItems: 2,
                          },
                          {
                            $id: "Position3D",
                            type: "array",
                            items: [
                              {
                                $id: "Longitude",
                                minimum: -180,
                                maximum: 180,
                                type: "number",
                              },
                              {
                                $id: "Latitude",
                                minimum: -90,
                                maximum: 90,
                                type: "number",
                              },
                              {
                                $id: "Altitude",
                                type: "number",
                              },
                            ],
                            additionalItems: false,
                            minItems: 3,
                            maxItems: 3,
                          },
                        ],
                      },
                    },
                  },
                },
                required: ["type", "coordinates"],
              },
              {
                $id: "PolygonGeometry",
                type: "object",
                properties: {
                  type: {
                    const: "Polygon",
                    type: "string",
                  },
                  coordinates: {
                    $id: "PolygonCoordinates",
                    type: "array",
                    items: {
                      minItems: 4,
                      $id: "LinearRing",
                      type: "array",
                      items: {
                        $id: "Position",
                        anyOf: [
                          {
                            $id: "Position2D",
                            type: "array",
                            items: [
                              {
                                $id: "Longitude",
                                minimum: -180,
                                maximum: 180,
                                type: "number",
                              },
                              {
                                $id: "Latitude",
                                minimum: -90,
                                maximum: 90,
                                type: "number",
                              },
                            ],
                            additionalItems: false,
                            minItems: 2,
                            maxItems: 2,
                          },
                          {
                            $id: "Position3D",
                            type: "array",
                            items: [
                              {
                                $id: "Longitude",
                                minimum: -180,
                                maximum: 180,
                                type: "number",
                              },
                              {
                                $id: "Latitude",
                                minimum: -90,
                                maximum: 90,
                                type: "number",
                              },
                              {
                                $id: "Altitude",
                                type: "number",
                              },
                            ],
                            additionalItems: false,
                            minItems: 3,
                            maxItems: 3,
                          },
                        ],
                      },
                    },
                  },
                },
                required: ["type", "coordinates"],
              },
              {
                $id: "MultiPolygonGeometry",
                type: "object",
                properties: {
                  type: {
                    const: "MultiPolygon",
                    type: "string",
                  },
                  coordinates: {
                    $id: "MultiPolygonCoordinates",
                    type: "array",
                    items: {
                      $id: "PolygonCoordinates",
                      type: "array",
                      items: {
                        minItems: 4,
                        $id: "LinearRing",
                        type: "array",
                        items: {
                          $id: "Position",
                          anyOf: [
                            {
                              $id: "Position2D",
                              type: "array",
                              items: [
                                {
                                  $id: "Longitude",
                                  minimum: -180,
                                  maximum: 180,
                                  type: "number",
                                },
                                {
                                  $id: "Latitude",
                                  minimum: -90,
                                  maximum: 90,
                                  type: "number",
                                },
                              ],
                              additionalItems: false,
                              minItems: 2,
                              maxItems: 2,
                            },
                            {
                              $id: "Position3D",
                              type: "array",
                              items: [
                                {
                                  $id: "Longitude",
                                  minimum: -180,
                                  maximum: 180,
                                  type: "number",
                                },
                                {
                                  $id: "Latitude",
                                  minimum: -90,
                                  maximum: 90,
                                  type: "number",
                                },
                                {
                                  $id: "Altitude",
                                  type: "number",
                                },
                              ],
                              additionalItems: false,
                              minItems: 3,
                              maxItems: 3,
                            },
                          ],
                        },
                      },
                    },
                  },
                },
                required: ["type", "coordinates"],
              },
            ],
          },
        },
      },
      required: ["type", "geometries"],
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
          $id: "Geometry",
          anyOf: [
            {
              $id: "PointGeometry",
              type: "object",
              properties: {
                type: {
                  const: "Point",
                  type: "string",
                },
                coordinates: {
                  $id: "Position",
                  anyOf: [
                    {
                      $id: "Position2D",
                      type: "array",
                      items: [
                        {
                          $id: "Longitude",
                          minimum: -180,
                          maximum: 180,
                          type: "number",
                        },
                        {
                          $id: "Latitude",
                          minimum: -90,
                          maximum: 90,
                          type: "number",
                        },
                      ],
                      additionalItems: false,
                      minItems: 2,
                      maxItems: 2,
                    },
                    {
                      $id: "Position3D",
                      type: "array",
                      items: [
                        {
                          $id: "Longitude",
                          minimum: -180,
                          maximum: 180,
                          type: "number",
                        },
                        {
                          $id: "Latitude",
                          minimum: -90,
                          maximum: 90,
                          type: "number",
                        },
                        {
                          $id: "Altitude",
                          type: "number",
                        },
                      ],
                      additionalItems: false,
                      minItems: 3,
                      maxItems: 3,
                    },
                  ],
                },
              },
              required: ["type", "coordinates"],
            },
            {
              $id: "MultiPointGeometry",
              type: "object",
              properties: {
                type: {
                  const: "MultiPoint",
                  type: "string",
                },
                coordinates: {
                  $id: "MultiPointCoordinates",
                  type: "array",
                  items: {
                    $id: "Position",
                    anyOf: [
                      {
                        $id: "Position2D",
                        type: "array",
                        items: [
                          {
                            $id: "Longitude",
                            minimum: -180,
                            maximum: 180,
                            type: "number",
                          },
                          {
                            $id: "Latitude",
                            minimum: -90,
                            maximum: 90,
                            type: "number",
                          },
                        ],
                        additionalItems: false,
                        minItems: 2,
                        maxItems: 2,
                      },
                      {
                        $id: "Position3D",
                        type: "array",
                        items: [
                          {
                            $id: "Longitude",
                            minimum: -180,
                            maximum: 180,
                            type: "number",
                          },
                          {
                            $id: "Latitude",
                            minimum: -90,
                            maximum: 90,
                            type: "number",
                          },
                          {
                            $id: "Altitude",
                            type: "number",
                          },
                        ],
                        additionalItems: false,
                        minItems: 3,
                        maxItems: 3,
                      },
                    ],
                  },
                },
              },
              required: ["type", "coordinates"],
            },
            {
              $id: "LineStringGeometry",
              type: "object",
              properties: {
                type: {
                  const: "LineString",
                  type: "string",
                },
                coordinates: {
                  minItems: 2,
                  $id: "LineStringCoordinates",
                  type: "array",
                  items: {
                    $id: "Position",
                    anyOf: [
                      {
                        $id: "Position2D",
                        type: "array",
                        items: [
                          {
                            $id: "Longitude",
                            minimum: -180,
                            maximum: 180,
                            type: "number",
                          },
                          {
                            $id: "Latitude",
                            minimum: -90,
                            maximum: 90,
                            type: "number",
                          },
                        ],
                        additionalItems: false,
                        minItems: 2,
                        maxItems: 2,
                      },
                      {
                        $id: "Position3D",
                        type: "array",
                        items: [
                          {
                            $id: "Longitude",
                            minimum: -180,
                            maximum: 180,
                            type: "number",
                          },
                          {
                            $id: "Latitude",
                            minimum: -90,
                            maximum: 90,
                            type: "number",
                          },
                          {
                            $id: "Altitude",
                            type: "number",
                          },
                        ],
                        additionalItems: false,
                        minItems: 3,
                        maxItems: 3,
                      },
                    ],
                  },
                },
              },
              required: ["type", "coordinates"],
            },
            {
              $id: "MultiLineStringGeometry",
              type: "object",
              properties: {
                type: {
                  const: "MultiLineString",
                  type: "string",
                },
                coordinates: {
                  $id: "MultiLineStringCoordinates",
                  type: "array",
                  items: {
                    minItems: 2,
                    $id: "LineStringCoordinates",
                    type: "array",
                    items: {
                      $id: "Position",
                      anyOf: [
                        {
                          $id: "Position2D",
                          type: "array",
                          items: [
                            {
                              $id: "Longitude",
                              minimum: -180,
                              maximum: 180,
                              type: "number",
                            },
                            {
                              $id: "Latitude",
                              minimum: -90,
                              maximum: 90,
                              type: "number",
                            },
                          ],
                          additionalItems: false,
                          minItems: 2,
                          maxItems: 2,
                        },
                        {
                          $id: "Position3D",
                          type: "array",
                          items: [
                            {
                              $id: "Longitude",
                              minimum: -180,
                              maximum: 180,
                              type: "number",
                            },
                            {
                              $id: "Latitude",
                              minimum: -90,
                              maximum: 90,
                              type: "number",
                            },
                            {
                              $id: "Altitude",
                              type: "number",
                            },
                          ],
                          additionalItems: false,
                          minItems: 3,
                          maxItems: 3,
                        },
                      ],
                    },
                  },
                },
              },
              required: ["type", "coordinates"],
            },
            {
              $id: "PolygonGeometry",
              type: "object",
              properties: {
                type: {
                  const: "Polygon",
                  type: "string",
                },
                coordinates: {
                  $id: "PolygonCoordinates",
                  type: "array",
                  items: {
                    minItems: 4,
                    $id: "LinearRing",
                    type: "array",
                    items: {
                      $id: "Position",
                      anyOf: [
                        {
                          $id: "Position2D",
                          type: "array",
                          items: [
                            {
                              $id: "Longitude",
                              minimum: -180,
                              maximum: 180,
                              type: "number",
                            },
                            {
                              $id: "Latitude",
                              minimum: -90,
                              maximum: 90,
                              type: "number",
                            },
                          ],
                          additionalItems: false,
                          minItems: 2,
                          maxItems: 2,
                        },
                        {
                          $id: "Position3D",
                          type: "array",
                          items: [
                            {
                              $id: "Longitude",
                              minimum: -180,
                              maximum: 180,
                              type: "number",
                            },
                            {
                              $id: "Latitude",
                              minimum: -90,
                              maximum: 90,
                              type: "number",
                            },
                            {
                              $id: "Altitude",
                              type: "number",
                            },
                          ],
                          additionalItems: false,
                          minItems: 3,
                          maxItems: 3,
                        },
                      ],
                    },
                  },
                },
              },
              required: ["type", "coordinates"],
            },
            {
              $id: "MultiPolygonGeometry",
              type: "object",
              properties: {
                type: {
                  const: "MultiPolygon",
                  type: "string",
                },
                coordinates: {
                  $id: "MultiPolygonCoordinates",
                  type: "array",
                  items: {
                    $id: "PolygonCoordinates",
                    type: "array",
                    items: {
                      minItems: 4,
                      $id: "LinearRing",
                      type: "array",
                      items: {
                        $id: "Position",
                        anyOf: [
                          {
                            $id: "Position2D",
                            type: "array",
                            items: [
                              {
                                $id: "Longitude",
                                minimum: -180,
                                maximum: 180,
                                type: "number",
                              },
                              {
                                $id: "Latitude",
                                minimum: -90,
                                maximum: 90,
                                type: "number",
                              },
                            ],
                            additionalItems: false,
                            minItems: 2,
                            maxItems: 2,
                          },
                          {
                            $id: "Position3D",
                            type: "array",
                            items: [
                              {
                                $id: "Longitude",
                                minimum: -180,
                                maximum: 180,
                                type: "number",
                              },
                              {
                                $id: "Latitude",
                                minimum: -90,
                                maximum: 90,
                                type: "number",
                              },
                              {
                                $id: "Altitude",
                                type: "number",
                              },
                            ],
                            additionalItems: false,
                            minItems: 3,
                            maxItems: 3,
                          },
                        ],
                      },
                    },
                  },
                },
              },
              required: ["type", "coordinates"],
            },
            {
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
                        $id: "PointGeometry",
                        type: "object",
                        properties: {
                          type: {
                            const: "Point",
                            type: "string",
                          },
                          coordinates: {
                            $id: "Position",
                            anyOf: [
                              {
                                $id: "Position2D",
                                type: "array",
                                items: [
                                  {
                                    $id: "Longitude",
                                    minimum: -180,
                                    maximum: 180,
                                    type: "number",
                                  },
                                  {
                                    $id: "Latitude",
                                    minimum: -90,
                                    maximum: 90,
                                    type: "number",
                                  },
                                ],
                                additionalItems: false,
                                minItems: 2,
                                maxItems: 2,
                              },
                              {
                                $id: "Position3D",
                                type: "array",
                                items: [
                                  {
                                    $id: "Longitude",
                                    minimum: -180,
                                    maximum: 180,
                                    type: "number",
                                  },
                                  {
                                    $id: "Latitude",
                                    minimum: -90,
                                    maximum: 90,
                                    type: "number",
                                  },
                                  {
                                    $id: "Altitude",
                                    type: "number",
                                  },
                                ],
                                additionalItems: false,
                                minItems: 3,
                                maxItems: 3,
                              },
                            ],
                          },
                        },
                        required: ["type", "coordinates"],
                      },
                      {
                        $id: "MultiPointGeometry",
                        type: "object",
                        properties: {
                          type: {
                            const: "MultiPoint",
                            type: "string",
                          },
                          coordinates: {
                            $id: "MultiPointCoordinates",
                            type: "array",
                            items: {
                              $id: "Position",
                              anyOf: [
                                {
                                  $id: "Position2D",
                                  type: "array",
                                  items: [
                                    {
                                      $id: "Longitude",
                                      minimum: -180,
                                      maximum: 180,
                                      type: "number",
                                    },
                                    {
                                      $id: "Latitude",
                                      minimum: -90,
                                      maximum: 90,
                                      type: "number",
                                    },
                                  ],
                                  additionalItems: false,
                                  minItems: 2,
                                  maxItems: 2,
                                },
                                {
                                  $id: "Position3D",
                                  type: "array",
                                  items: [
                                    {
                                      $id: "Longitude",
                                      minimum: -180,
                                      maximum: 180,
                                      type: "number",
                                    },
                                    {
                                      $id: "Latitude",
                                      minimum: -90,
                                      maximum: 90,
                                      type: "number",
                                    },
                                    {
                                      $id: "Altitude",
                                      type: "number",
                                    },
                                  ],
                                  additionalItems: false,
                                  minItems: 3,
                                  maxItems: 3,
                                },
                              ],
                            },
                          },
                        },
                        required: ["type", "coordinates"],
                      },
                      {
                        $id: "LineStringGeometry",
                        type: "object",
                        properties: {
                          type: {
                            const: "LineString",
                            type: "string",
                          },
                          coordinates: {
                            minItems: 2,
                            $id: "LineStringCoordinates",
                            type: "array",
                            items: {
                              $id: "Position",
                              anyOf: [
                                {
                                  $id: "Position2D",
                                  type: "array",
                                  items: [
                                    {
                                      $id: "Longitude",
                                      minimum: -180,
                                      maximum: 180,
                                      type: "number",
                                    },
                                    {
                                      $id: "Latitude",
                                      minimum: -90,
                                      maximum: 90,
                                      type: "number",
                                    },
                                  ],
                                  additionalItems: false,
                                  minItems: 2,
                                  maxItems: 2,
                                },
                                {
                                  $id: "Position3D",
                                  type: "array",
                                  items: [
                                    {
                                      $id: "Longitude",
                                      minimum: -180,
                                      maximum: 180,
                                      type: "number",
                                    },
                                    {
                                      $id: "Latitude",
                                      minimum: -90,
                                      maximum: 90,
                                      type: "number",
                                    },
                                    {
                                      $id: "Altitude",
                                      type: "number",
                                    },
                                  ],
                                  additionalItems: false,
                                  minItems: 3,
                                  maxItems: 3,
                                },
                              ],
                            },
                          },
                        },
                        required: ["type", "coordinates"],
                      },
                      {
                        $id: "MultiLineStringGeometry",
                        type: "object",
                        properties: {
                          type: {
                            const: "MultiLineString",
                            type: "string",
                          },
                          coordinates: {
                            $id: "MultiLineStringCoordinates",
                            type: "array",
                            items: {
                              minItems: 2,
                              $id: "LineStringCoordinates",
                              type: "array",
                              items: {
                                $id: "Position",
                                anyOf: [
                                  {
                                    $id: "Position2D",
                                    type: "array",
                                    items: [
                                      {
                                        $id: "Longitude",
                                        minimum: -180,
                                        maximum: 180,
                                        type: "number",
                                      },
                                      {
                                        $id: "Latitude",
                                        minimum: -90,
                                        maximum: 90,
                                        type: "number",
                                      },
                                    ],
                                    additionalItems: false,
                                    minItems: 2,
                                    maxItems: 2,
                                  },
                                  {
                                    $id: "Position3D",
                                    type: "array",
                                    items: [
                                      {
                                        $id: "Longitude",
                                        minimum: -180,
                                        maximum: 180,
                                        type: "number",
                                      },
                                      {
                                        $id: "Latitude",
                                        minimum: -90,
                                        maximum: 90,
                                        type: "number",
                                      },
                                      {
                                        $id: "Altitude",
                                        type: "number",
                                      },
                                    ],
                                    additionalItems: false,
                                    minItems: 3,
                                    maxItems: 3,
                                  },
                                ],
                              },
                            },
                          },
                        },
                        required: ["type", "coordinates"],
                      },
                      {
                        $id: "PolygonGeometry",
                        type: "object",
                        properties: {
                          type: {
                            const: "Polygon",
                            type: "string",
                          },
                          coordinates: {
                            $id: "PolygonCoordinates",
                            type: "array",
                            items: {
                              minItems: 4,
                              $id: "LinearRing",
                              type: "array",
                              items: {
                                $id: "Position",
                                anyOf: [
                                  {
                                    $id: "Position2D",
                                    type: "array",
                                    items: [
                                      {
                                        $id: "Longitude",
                                        minimum: -180,
                                        maximum: 180,
                                        type: "number",
                                      },
                                      {
                                        $id: "Latitude",
                                        minimum: -90,
                                        maximum: 90,
                                        type: "number",
                                      },
                                    ],
                                    additionalItems: false,
                                    minItems: 2,
                                    maxItems: 2,
                                  },
                                  {
                                    $id: "Position3D",
                                    type: "array",
                                    items: [
                                      {
                                        $id: "Longitude",
                                        minimum: -180,
                                        maximum: 180,
                                        type: "number",
                                      },
                                      {
                                        $id: "Latitude",
                                        minimum: -90,
                                        maximum: 90,
                                        type: "number",
                                      },
                                      {
                                        $id: "Altitude",
                                        type: "number",
                                      },
                                    ],
                                    additionalItems: false,
                                    minItems: 3,
                                    maxItems: 3,
                                  },
                                ],
                              },
                            },
                          },
                        },
                        required: ["type", "coordinates"],
                      },
                      {
                        $id: "MultiPolygonGeometry",
                        type: "object",
                        properties: {
                          type: {
                            const: "MultiPolygon",
                            type: "string",
                          },
                          coordinates: {
                            $id: "MultiPolygonCoordinates",
                            type: "array",
                            items: {
                              $id: "PolygonCoordinates",
                              type: "array",
                              items: {
                                minItems: 4,
                                $id: "LinearRing",
                                type: "array",
                                items: {
                                  $id: "Position",
                                  anyOf: [
                                    {
                                      $id: "Position2D",
                                      type: "array",
                                      items: [
                                        {
                                          $id: "Longitude",
                                          minimum: -180,
                                          maximum: 180,
                                          type: "number",
                                        },
                                        {
                                          $id: "Latitude",
                                          minimum: -90,
                                          maximum: 90,
                                          type: "number",
                                        },
                                      ],
                                      additionalItems: false,
                                      minItems: 2,
                                      maxItems: 2,
                                    },
                                    {
                                      $id: "Position3D",
                                      type: "array",
                                      items: [
                                        {
                                          $id: "Longitude",
                                          minimum: -180,
                                          maximum: 180,
                                          type: "number",
                                        },
                                        {
                                          $id: "Latitude",
                                          minimum: -90,
                                          maximum: 90,
                                          type: "number",
                                        },
                                        {
                                          $id: "Altitude",
                                          type: "number",
                                        },
                                      ],
                                      additionalItems: false,
                                      minItems: 3,
                                      maxItems: 3,
                                    },
                                  ],
                                },
                              },
                            },
                          },
                        },
                        required: ["type", "coordinates"],
                      },
                    ],
                  },
                },
              },
              required: ["type", "geometries"],
            },
          ],
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
                $id: "Geometry",
                anyOf: [
                  {
                    $id: "PointGeometry",
                    type: "object",
                    properties: {
                      type: {
                        const: "Point",
                        type: "string",
                      },
                      coordinates: {
                        $id: "Position",
                        anyOf: [
                          {
                            $id: "Position2D",
                            type: "array",
                            items: [
                              {
                                $id: "Longitude",
                                minimum: -180,
                                maximum: 180,
                                type: "number",
                              },
                              {
                                $id: "Latitude",
                                minimum: -90,
                                maximum: 90,
                                type: "number",
                              },
                            ],
                            additionalItems: false,
                            minItems: 2,
                            maxItems: 2,
                          },
                          {
                            $id: "Position3D",
                            type: "array",
                            items: [
                              {
                                $id: "Longitude",
                                minimum: -180,
                                maximum: 180,
                                type: "number",
                              },
                              {
                                $id: "Latitude",
                                minimum: -90,
                                maximum: 90,
                                type: "number",
                              },
                              {
                                $id: "Altitude",
                                type: "number",
                              },
                            ],
                            additionalItems: false,
                            minItems: 3,
                            maxItems: 3,
                          },
                        ],
                      },
                    },
                    required: ["type", "coordinates"],
                  },
                  {
                    $id: "MultiPointGeometry",
                    type: "object",
                    properties: {
                      type: {
                        const: "MultiPoint",
                        type: "string",
                      },
                      coordinates: {
                        $id: "MultiPointCoordinates",
                        type: "array",
                        items: {
                          $id: "Position",
                          anyOf: [
                            {
                              $id: "Position2D",
                              type: "array",
                              items: [
                                {
                                  $id: "Longitude",
                                  minimum: -180,
                                  maximum: 180,
                                  type: "number",
                                },
                                {
                                  $id: "Latitude",
                                  minimum: -90,
                                  maximum: 90,
                                  type: "number",
                                },
                              ],
                              additionalItems: false,
                              minItems: 2,
                              maxItems: 2,
                            },
                            {
                              $id: "Position3D",
                              type: "array",
                              items: [
                                {
                                  $id: "Longitude",
                                  minimum: -180,
                                  maximum: 180,
                                  type: "number",
                                },
                                {
                                  $id: "Latitude",
                                  minimum: -90,
                                  maximum: 90,
                                  type: "number",
                                },
                                {
                                  $id: "Altitude",
                                  type: "number",
                                },
                              ],
                              additionalItems: false,
                              minItems: 3,
                              maxItems: 3,
                            },
                          ],
                        },
                      },
                    },
                    required: ["type", "coordinates"],
                  },
                  {
                    $id: "LineStringGeometry",
                    type: "object",
                    properties: {
                      type: {
                        const: "LineString",
                        type: "string",
                      },
                      coordinates: {
                        minItems: 2,
                        $id: "LineStringCoordinates",
                        type: "array",
                        items: {
                          $id: "Position",
                          anyOf: [
                            {
                              $id: "Position2D",
                              type: "array",
                              items: [
                                {
                                  $id: "Longitude",
                                  minimum: -180,
                                  maximum: 180,
                                  type: "number",
                                },
                                {
                                  $id: "Latitude",
                                  minimum: -90,
                                  maximum: 90,
                                  type: "number",
                                },
                              ],
                              additionalItems: false,
                              minItems: 2,
                              maxItems: 2,
                            },
                            {
                              $id: "Position3D",
                              type: "array",
                              items: [
                                {
                                  $id: "Longitude",
                                  minimum: -180,
                                  maximum: 180,
                                  type: "number",
                                },
                                {
                                  $id: "Latitude",
                                  minimum: -90,
                                  maximum: 90,
                                  type: "number",
                                },
                                {
                                  $id: "Altitude",
                                  type: "number",
                                },
                              ],
                              additionalItems: false,
                              minItems: 3,
                              maxItems: 3,
                            },
                          ],
                        },
                      },
                    },
                    required: ["type", "coordinates"],
                  },
                  {
                    $id: "MultiLineStringGeometry",
                    type: "object",
                    properties: {
                      type: {
                        const: "MultiLineString",
                        type: "string",
                      },
                      coordinates: {
                        $id: "MultiLineStringCoordinates",
                        type: "array",
                        items: {
                          minItems: 2,
                          $id: "LineStringCoordinates",
                          type: "array",
                          items: {
                            $id: "Position",
                            anyOf: [
                              {
                                $id: "Position2D",
                                type: "array",
                                items: [
                                  {
                                    $id: "Longitude",
                                    minimum: -180,
                                    maximum: 180,
                                    type: "number",
                                  },
                                  {
                                    $id: "Latitude",
                                    minimum: -90,
                                    maximum: 90,
                                    type: "number",
                                  },
                                ],
                                additionalItems: false,
                                minItems: 2,
                                maxItems: 2,
                              },
                              {
                                $id: "Position3D",
                                type: "array",
                                items: [
                                  {
                                    $id: "Longitude",
                                    minimum: -180,
                                    maximum: 180,
                                    type: "number",
                                  },
                                  {
                                    $id: "Latitude",
                                    minimum: -90,
                                    maximum: 90,
                                    type: "number",
                                  },
                                  {
                                    $id: "Altitude",
                                    type: "number",
                                  },
                                ],
                                additionalItems: false,
                                minItems: 3,
                                maxItems: 3,
                              },
                            ],
                          },
                        },
                      },
                    },
                    required: ["type", "coordinates"],
                  },
                  {
                    $id: "PolygonGeometry",
                    type: "object",
                    properties: {
                      type: {
                        const: "Polygon",
                        type: "string",
                      },
                      coordinates: {
                        $id: "PolygonCoordinates",
                        type: "array",
                        items: {
                          minItems: 4,
                          $id: "LinearRing",
                          type: "array",
                          items: {
                            $id: "Position",
                            anyOf: [
                              {
                                $id: "Position2D",
                                type: "array",
                                items: [
                                  {
                                    $id: "Longitude",
                                    minimum: -180,
                                    maximum: 180,
                                    type: "number",
                                  },
                                  {
                                    $id: "Latitude",
                                    minimum: -90,
                                    maximum: 90,
                                    type: "number",
                                  },
                                ],
                                additionalItems: false,
                                minItems: 2,
                                maxItems: 2,
                              },
                              {
                                $id: "Position3D",
                                type: "array",
                                items: [
                                  {
                                    $id: "Longitude",
                                    minimum: -180,
                                    maximum: 180,
                                    type: "number",
                                  },
                                  {
                                    $id: "Latitude",
                                    minimum: -90,
                                    maximum: 90,
                                    type: "number",
                                  },
                                  {
                                    $id: "Altitude",
                                    type: "number",
                                  },
                                ],
                                additionalItems: false,
                                minItems: 3,
                                maxItems: 3,
                              },
                            ],
                          },
                        },
                      },
                    },
                    required: ["type", "coordinates"],
                  },
                  {
                    $id: "MultiPolygonGeometry",
                    type: "object",
                    properties: {
                      type: {
                        const: "MultiPolygon",
                        type: "string",
                      },
                      coordinates: {
                        $id: "MultiPolygonCoordinates",
                        type: "array",
                        items: {
                          $id: "PolygonCoordinates",
                          type: "array",
                          items: {
                            minItems: 4,
                            $id: "LinearRing",
                            type: "array",
                            items: {
                              $id: "Position",
                              anyOf: [
                                {
                                  $id: "Position2D",
                                  type: "array",
                                  items: [
                                    {
                                      $id: "Longitude",
                                      minimum: -180,
                                      maximum: 180,
                                      type: "number",
                                    },
                                    {
                                      $id: "Latitude",
                                      minimum: -90,
                                      maximum: 90,
                                      type: "number",
                                    },
                                  ],
                                  additionalItems: false,
                                  minItems: 2,
                                  maxItems: 2,
                                },
                                {
                                  $id: "Position3D",
                                  type: "array",
                                  items: [
                                    {
                                      $id: "Longitude",
                                      minimum: -180,
                                      maximum: 180,
                                      type: "number",
                                    },
                                    {
                                      $id: "Latitude",
                                      minimum: -90,
                                      maximum: 90,
                                      type: "number",
                                    },
                                    {
                                      $id: "Altitude",
                                      type: "number",
                                    },
                                  ],
                                  additionalItems: false,
                                  minItems: 3,
                                  maxItems: 3,
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                    required: ["type", "coordinates"],
                  },
                  {
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
                              $id: "PointGeometry",
                              type: "object",
                              properties: {
                                type: {
                                  const: "Point",
                                  type: "string",
                                },
                                coordinates: {
                                  $id: "Position",
                                  anyOf: [
                                    {
                                      $id: "Position2D",
                                      type: "array",
                                      items: [
                                        {
                                          $id: "Longitude",
                                          minimum: -180,
                                          maximum: 180,
                                          type: "number",
                                        },
                                        {
                                          $id: "Latitude",
                                          minimum: -90,
                                          maximum: 90,
                                          type: "number",
                                        },
                                      ],
                                      additionalItems: false,
                                      minItems: 2,
                                      maxItems: 2,
                                    },
                                    {
                                      $id: "Position3D",
                                      type: "array",
                                      items: [
                                        {
                                          $id: "Longitude",
                                          minimum: -180,
                                          maximum: 180,
                                          type: "number",
                                        },
                                        {
                                          $id: "Latitude",
                                          minimum: -90,
                                          maximum: 90,
                                          type: "number",
                                        },
                                        {
                                          $id: "Altitude",
                                          type: "number",
                                        },
                                      ],
                                      additionalItems: false,
                                      minItems: 3,
                                      maxItems: 3,
                                    },
                                  ],
                                },
                              },
                              required: ["type", "coordinates"],
                            },
                            {
                              $id: "MultiPointGeometry",
                              type: "object",
                              properties: {
                                type: {
                                  const: "MultiPoint",
                                  type: "string",
                                },
                                coordinates: {
                                  $id: "MultiPointCoordinates",
                                  type: "array",
                                  items: {
                                    $id: "Position",
                                    anyOf: [
                                      {
                                        $id: "Position2D",
                                        type: "array",
                                        items: [
                                          {
                                            $id: "Longitude",
                                            minimum: -180,
                                            maximum: 180,
                                            type: "number",
                                          },
                                          {
                                            $id: "Latitude",
                                            minimum: -90,
                                            maximum: 90,
                                            type: "number",
                                          },
                                        ],
                                        additionalItems: false,
                                        minItems: 2,
                                        maxItems: 2,
                                      },
                                      {
                                        $id: "Position3D",
                                        type: "array",
                                        items: [
                                          {
                                            $id: "Longitude",
                                            minimum: -180,
                                            maximum: 180,
                                            type: "number",
                                          },
                                          {
                                            $id: "Latitude",
                                            minimum: -90,
                                            maximum: 90,
                                            type: "number",
                                          },
                                          {
                                            $id: "Altitude",
                                            type: "number",
                                          },
                                        ],
                                        additionalItems: false,
                                        minItems: 3,
                                        maxItems: 3,
                                      },
                                    ],
                                  },
                                },
                              },
                              required: ["type", "coordinates"],
                            },
                            {
                              $id: "LineStringGeometry",
                              type: "object",
                              properties: {
                                type: {
                                  const: "LineString",
                                  type: "string",
                                },
                                coordinates: {
                                  minItems: 2,
                                  $id: "LineStringCoordinates",
                                  type: "array",
                                  items: {
                                    $id: "Position",
                                    anyOf: [
                                      {
                                        $id: "Position2D",
                                        type: "array",
                                        items: [
                                          {
                                            $id: "Longitude",
                                            minimum: -180,
                                            maximum: 180,
                                            type: "number",
                                          },
                                          {
                                            $id: "Latitude",
                                            minimum: -90,
                                            maximum: 90,
                                            type: "number",
                                          },
                                        ],
                                        additionalItems: false,
                                        minItems: 2,
                                        maxItems: 2,
                                      },
                                      {
                                        $id: "Position3D",
                                        type: "array",
                                        items: [
                                          {
                                            $id: "Longitude",
                                            minimum: -180,
                                            maximum: 180,
                                            type: "number",
                                          },
                                          {
                                            $id: "Latitude",
                                            minimum: -90,
                                            maximum: 90,
                                            type: "number",
                                          },
                                          {
                                            $id: "Altitude",
                                            type: "number",
                                          },
                                        ],
                                        additionalItems: false,
                                        minItems: 3,
                                        maxItems: 3,
                                      },
                                    ],
                                  },
                                },
                              },
                              required: ["type", "coordinates"],
                            },
                            {
                              $id: "MultiLineStringGeometry",
                              type: "object",
                              properties: {
                                type: {
                                  const: "MultiLineString",
                                  type: "string",
                                },
                                coordinates: {
                                  $id: "MultiLineStringCoordinates",
                                  type: "array",
                                  items: {
                                    minItems: 2,
                                    $id: "LineStringCoordinates",
                                    type: "array",
                                    items: {
                                      $id: "Position",
                                      anyOf: [
                                        {
                                          $id: "Position2D",
                                          type: "array",
                                          items: [
                                            {
                                              $id: "Longitude",
                                              minimum: -180,
                                              maximum: 180,
                                              type: "number",
                                            },
                                            {
                                              $id: "Latitude",
                                              minimum: -90,
                                              maximum: 90,
                                              type: "number",
                                            },
                                          ],
                                          additionalItems: false,
                                          minItems: 2,
                                          maxItems: 2,
                                        },
                                        {
                                          $id: "Position3D",
                                          type: "array",
                                          items: [
                                            {
                                              $id: "Longitude",
                                              minimum: -180,
                                              maximum: 180,
                                              type: "number",
                                            },
                                            {
                                              $id: "Latitude",
                                              minimum: -90,
                                              maximum: 90,
                                              type: "number",
                                            },
                                            {
                                              $id: "Altitude",
                                              type: "number",
                                            },
                                          ],
                                          additionalItems: false,
                                          minItems: 3,
                                          maxItems: 3,
                                        },
                                      ],
                                    },
                                  },
                                },
                              },
                              required: ["type", "coordinates"],
                            },
                            {
                              $id: "PolygonGeometry",
                              type: "object",
                              properties: {
                                type: {
                                  const: "Polygon",
                                  type: "string",
                                },
                                coordinates: {
                                  $id: "PolygonCoordinates",
                                  type: "array",
                                  items: {
                                    minItems: 4,
                                    $id: "LinearRing",
                                    type: "array",
                                    items: {
                                      $id: "Position",
                                      anyOf: [
                                        {
                                          $id: "Position2D",
                                          type: "array",
                                          items: [
                                            {
                                              $id: "Longitude",
                                              minimum: -180,
                                              maximum: 180,
                                              type: "number",
                                            },
                                            {
                                              $id: "Latitude",
                                              minimum: -90,
                                              maximum: 90,
                                              type: "number",
                                            },
                                          ],
                                          additionalItems: false,
                                          minItems: 2,
                                          maxItems: 2,
                                        },
                                        {
                                          $id: "Position3D",
                                          type: "array",
                                          items: [
                                            {
                                              $id: "Longitude",
                                              minimum: -180,
                                              maximum: 180,
                                              type: "number",
                                            },
                                            {
                                              $id: "Latitude",
                                              minimum: -90,
                                              maximum: 90,
                                              type: "number",
                                            },
                                            {
                                              $id: "Altitude",
                                              type: "number",
                                            },
                                          ],
                                          additionalItems: false,
                                          minItems: 3,
                                          maxItems: 3,
                                        },
                                      ],
                                    },
                                  },
                                },
                              },
                              required: ["type", "coordinates"],
                            },
                            {
                              $id: "MultiPolygonGeometry",
                              type: "object",
                              properties: {
                                type: {
                                  const: "MultiPolygon",
                                  type: "string",
                                },
                                coordinates: {
                                  $id: "MultiPolygonCoordinates",
                                  type: "array",
                                  items: {
                                    $id: "PolygonCoordinates",
                                    type: "array",
                                    items: {
                                      minItems: 4,
                                      $id: "LinearRing",
                                      type: "array",
                                      items: {
                                        $id: "Position",
                                        anyOf: [
                                          {
                                            $id: "Position2D",
                                            type: "array",
                                            items: [
                                              {
                                                $id: "Longitude",
                                                minimum: -180,
                                                maximum: 180,
                                                type: "number",
                                              },
                                              {
                                                $id: "Latitude",
                                                minimum: -90,
                                                maximum: 90,
                                                type: "number",
                                              },
                                            ],
                                            additionalItems: false,
                                            minItems: 2,
                                            maxItems: 2,
                                          },
                                          {
                                            $id: "Position3D",
                                            type: "array",
                                            items: [
                                              {
                                                $id: "Longitude",
                                                minimum: -180,
                                                maximum: 180,
                                                type: "number",
                                              },
                                              {
                                                $id: "Latitude",
                                                minimum: -90,
                                                maximum: 90,
                                                type: "number",
                                              },
                                              {
                                                $id: "Altitude",
                                                type: "number",
                                              },
                                            ],
                                            additionalItems: false,
                                            minItems: 3,
                                            maxItems: 3,
                                          },
                                        ],
                                      },
                                    },
                                  },
                                },
                              },
                              required: ["type", "coordinates"],
                            },
                          ],
                        },
                      },
                    },
                    required: ["type", "geometries"],
                  },
                ],
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
      },
    },
  },
  required: ["type", "features"],
};
