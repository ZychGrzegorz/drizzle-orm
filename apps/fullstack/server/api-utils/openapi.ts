import { generateOpenApiDocument } from "trpc-openapi";

// import { env } from "@/env";
import { appRouter } from "../router/index";
import { env } from "~/app/env";

const version = "0.1.0";
const environment = env.ENV;
const versionDisplayed =
  env.ENV === "prod" ? version : `${version} (${environment})`;

// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "Demo app API documentation",
  description: "",
  version: versionDisplayed,
  baseUrl: "http://localhost:3000/api",
  docsUrl: "http://localhost:3000/api/docs",
});
