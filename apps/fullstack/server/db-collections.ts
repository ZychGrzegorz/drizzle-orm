import { z } from "zod";

export const dbCollectionSchema = z.enum([
  "customers",
]);

export const DbCollections = dbCollectionSchema.enum;
export const dbCollections = dbCollectionSchema.options;

export type DbCollection = z.infer<typeof dbCollectionSchema>;
export const isDbCollection = (val: string): val is DbCollection =>
  dbCollections.includes(val as unknown as DbCollection);
