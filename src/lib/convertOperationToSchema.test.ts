import { describe, it, expect } from "vitest";
import { convertOperationToSchema } from "./convertOperationToSchema";
import { type Operation } from "~/store/types";

describe("convertOperationToSchema", () => {
  it("should convert operation to schema correctly", () => {
    const operation = {
      "claimBAKC((uint128,uint128)[],(uint128,uint128)[],address)": {
        $id: null,
        intent: "exampleIntent",
        screens: null,
        fields: [
          {
            path: "#._baycPairs.[]",
            value: null,
            fields: [
              {
                path: "",
                value: null,
                fields: [
                  {
                    $id: null,
                    label: "Main Token Id",
                    format: "raw",
                    params: null,
                    path: "mainTokenId",
                    value: null,
                  },
                  {
                    $id: null,
                    label: "Bakc Token Id",
                    format: "raw",
                    params: null,
                    path: "bakcTokenId",
                    value: null,
                  },
                ],
              },
            ],
          },
          {
            path: "#._maycPairs.[]",
            value: null,
            fields: [
              {
                path: "",
                value: null,
                fields: [
                  {
                    $id: null,
                    label: "Main Token Id",
                    format: "raw",
                    params: null,
                    path: "mainTokenId",
                    value: null,
                  },
                  {
                    $id: null,
                    label: "Bakc Token Id",
                    format: "raw",
                    params: null,
                    path: "bakcTokenId",
                    value: null,
                  },
                ],
              },
            ],
          },
          {
            $id: null,
            label: "Recipient",
            format: "addressName",
            params: {
              types: ["eoa", "wallet"],
              sources: null,
            },
            path: "#._recipient",
            value: null,
          },
        ],
        required: null,
        excluded: null,
      },
    };

    const expectedSchema = {
      intent: "exampleIntent",
      fields: [
        {
          label: "Main Token Id",
          format: "raw",
          params: {},
          path: "#._baycPairs.[]mainTokenId",
          isIncluded: true,
        },
        {
          label: "Bakc Token Id",
          format: "raw",
          params: {},
          path: "#._baycPairs.[]bakcTokenId",
          isIncluded: true,
        },
        {
          label: "Main Token Id",
          format: "raw",
          params: {},
          path: "#._maycPairs.[]mainTokenId",
          isIncluded: true,
        },
        {
          label: "Bakc Token Id",
          format: "raw",
          params: {},
          path: "#._maycPairs.[]bakcTokenId",
          isIncluded: true,
        },
        {
          label: "Recipient",
          format: "addressName",
          params: {
            types: ["eoa", "wallet"],
            sources: null,
          },
          path: "#._recipient",
          isIncluded: true,
        },
      ],
    };

    const schema = convertOperationToSchema(
      operation[
        "claimBAKC((uint128,uint128)[],(uint128,uint128)[],address)"
      ] as Operation,
    );
    expect(schema).toEqual(expectedSchema);
  });
});
