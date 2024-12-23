import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const envSchema = z.enum(["dev", "stage", "prod"]).default("dev");
export type Env = z.infer<typeof envSchema>;

export const env = createEnv({
  client: {
    // NEXT_PUBLIC_ENV: envSchema,
    // NEXT_PUBLIC_CONVERTER_URL: z.string().url(),
    // NEXT_PUBLIC_IS_BUILT: z.coerce.boolean().default(false),

  },
  server: {
    ENV: envSchema,
    DATABASE_URL: z
      .string({ required_error: "DATABASE_URL is obligatory!" })
      .min(4),
    DB_NAME: z.string({ required_error: "DB_NAME is obligatory!" }),

  },
  runtimeEnv: {
    ENV: process.env.ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    DB_NAME: process.env.DB_NAME,
    // NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
    // NEXT_PUBLIC_CONVERTER_URL: process.env.NEXT_PUBLIC_CONVERTER_URL,
    // NEXT_PUBLIC_IS_BUILT: process.env.IS_BUILT,



  },
});
