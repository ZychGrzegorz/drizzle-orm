import { z } from "zod";
import { SwaggerTags } from "../swagger/swagger-tags";
import { publicProcedure, router } from "../trpc";
import { getServices } from "../services";
import { CustomerSchema } from "~/app/db/schema";

const path = "/api/customers";

export const CustomersRouter = router({
    getCustomerById: publicProcedure
    .meta({
        openapi: {
            method: 'GET', 
            path: `${path}/getCustomerById`,
            tags: [SwaggerTags.customers],
            parameters: [
                {
                    name: 'id',
                    in: 'query',
                    required: true,
                    schema: {
                        type: 'integer',
                    },
                },
            ],
            responses: {
                200: {
                    description: 'Customer retrieved successfully',
                    content: {
                        'application/json': {
                            schema: CustomerSchema, // Define the expected output schema
                        },
                    },
                },
                404: {
                    description: 'Customer not found',
                },
            },
        }
    })
        .input(z.object({ id: z.number() }))
        .output(CustomerSchema)
        .query(async ({ input: { id } }) => {
            const { customerService } = await getServices();
            const customer = await customerService.getCustomerById({ id: id })
            return CustomerSchema.parse(customer)

        }),

})