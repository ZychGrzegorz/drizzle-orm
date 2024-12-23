import { z } from "zod";

export const Route = {
  name: "ApiTrpc",
  params: z.object({
    trpc: z.string().array(),
  }),
};
