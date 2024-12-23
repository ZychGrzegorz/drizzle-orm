import { router } from "../trpc";
import { GeneralRouter } from "./generalRouter";

export const appRouter = router({
    general: GeneralRouter
   });
   
   export type AppRouter = typeof appRouter;