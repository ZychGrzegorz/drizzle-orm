import * as uuid from "uuid";

import { z } from "zod";

export const objectUuidSchema = z
  .string()
  .min(1, { message: "Id cannot be empty" })
  .refine(uuid.validate, { message: "Invalid objectId" })
  .default(uuid.v4);

export const generateObjectUuid = uuid.v4;