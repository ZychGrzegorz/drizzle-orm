import { router } from "../trpc";
import { CustomersRouter } from "./customersRouter";

export const appRouter = router({
    customers: CustomersRouter
   });
   
   export type AppRouter = typeof appRouter;