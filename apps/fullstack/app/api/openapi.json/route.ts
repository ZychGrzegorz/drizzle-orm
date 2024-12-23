import { NextResponse } from "next/server";
import { type generateOpenApiDocument } from "trpc-openapi";
import { openApiDocument } from "~/server/api-utils/openapi";

// import { openApiDocument } from "@/server/api-utils/openapi";

// Infer the type of openApiDocument using ReturnType
type OpenApiDocumentType = ReturnType<typeof generateOpenApiDocument>;

// Explicitly type openApiDocument
const typedOpenApiDocument: OpenApiDocumentType = openApiDocument;

// Respond with our OpenAPI schema
export const GET = () => {
  return NextResponse.json(typedOpenApiDocument);
};
