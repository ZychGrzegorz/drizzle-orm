"use client";

import dynamic from "next/dynamic";
import { type SwaggerUIProps } from "swagger-ui-react";

import "swagger-ui-react/swagger-ui.css";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const SwaggerUI = dynamic<SwaggerUIProps>(() => import("swagger-ui-react"), {
  ssr: false,
});
export default function SwaggerPage() {
  return <SwaggerUI url={"/api/openapi.json"} />;
}
