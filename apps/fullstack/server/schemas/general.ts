import { z } from "zod";
import {  objectUuidSchema } from "./shared";

export const generalSchema =  z.array(z.object({
    _id: objectUuidSchema,
    name: z.string(),
    elementId:z.string()
}))

export type GeneralType = z.infer<typeof generalSchema>;
