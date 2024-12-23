import { z } from "zod";

export const swaggerTagsSchema = z.enum([
  "general",
]);
export type SwaggerTag = z.infer<typeof swaggerTagsSchema>;
export const swaggerTags = swaggerTagsSchema.options;
export const SwaggerTags = swaggerTagsSchema.enum;
