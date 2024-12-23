import { z } from "zod";
import { SwaggerTags } from "../swagger/swagger-tags";
import { publicProcedure, router } from "../trpc";
import { getServices } from "../services";
import { generalSchema } from "../schemas/general";

const path = "/api/general";

export const GeneralRouter = router({
    main: publicProcedure
        .meta({
            openapi: {
                method: 'GET', path: `${path}/getMain`,
                tags: [SwaggerTags.general],
            }
        })
        .input(z.object({ name: z.string() }))
        .output(generalSchema)
        .query(async ({ input: { name } }) => {
            const { generalService } = await getServices();
            const allResults = await generalService.list({ name });
            return generalSchema.parse(allResults);
        }),
    sayHello: publicProcedure
        .meta({
            openapi: { method: 'GET', path: '/say-hello' }
        })
        .input(z.object({
            name: z.string()
        }))
        .output(z.object({
            greeting: z.string()
        }))
        .query(({ input }) => {
            return { greeting: `Hello ${input.name}!` }
        })
})