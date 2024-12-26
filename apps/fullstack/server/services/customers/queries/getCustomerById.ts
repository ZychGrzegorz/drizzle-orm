import { db } from "~/app/db"
import { Customer, customers } from "~/app/db/schema"
import { eq } from "drizzle-orm"
import { TRPCError } from "@trpc/server"

export const getCustomerById = async ({id}: {id:number}): Promise<Customer | TRPCError> => {
    const customer = await db.select()
        .from(customers)
        .where(eq(customers.id, id))

    if (customer && customer[0]) {
        return customer[0] as Customer;
    } else {
        throw new TRPCError({ code: "NOT_FOUND" });
    }
}