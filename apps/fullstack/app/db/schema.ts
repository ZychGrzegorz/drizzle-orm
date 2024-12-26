import { pgTable, serial, varchar, boolean, timestamp, integer, text } from 'drizzle-orm/pg-core'
import { relations,  InferSelectModel, InferModel } from 'drizzle-orm'
import { createSelectSchema, createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

export const customers = pgTable("customers", {
    id: serial("id").primaryKey(),
    firstName: varchar("first_name").notNull(),
    lastName: varchar("last_name").notNull(),
    email: varchar("email").unique().notNull(),
    phone: varchar("phone").unique().notNull(),
    address1: varchar("address1").notNull(),
    address2: varchar("address2"),
    city: varchar("city").notNull(),
    postCode: varchar("post_code").notNull(),
    country: varchar("country").notNull(),
    notes: text("notes"),
    customerActive: boolean("active").notNull().default(true),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
}
)
export const tickets = pgTable("tickets", {
    id: serial("id").primaryKey(),
    customerId: integer("customer_id").notNull().references(() => customers.id),
    title: varchar("title").notNull(),
    description: text("description"),
    completed: boolean("completed").notNull().default(false),
    tech: varchar("tech").notNull().default("unassigned"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
}
)


export const customerRelations = relations(customers, ({ many })=> ({ tickets: many(tickets) }))

export const ticketRelations = relations(tickets, ({ one })=> ({ customer: one(customers, {
    fields: [tickets.customerId],
    references: [customers.id],
}) }))




export const CustomerSchema: z.ZodSchema<InferSelectModel<typeof customers>> = createSelectSchema(customers);
export type Customer = InferSelectModel<typeof customers>;

export const TicketSchema: z.ZodSchema<InferSelectModel<typeof tickets>> = createSelectSchema(tickets);
export type Ticket = InferSelectModel<typeof tickets>;