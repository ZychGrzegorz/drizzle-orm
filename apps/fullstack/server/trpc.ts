// src/server/trpc.ts
import { initTRPC } from '@trpc/server';
// import { GeneralRouter } from './router/generalRouter';

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

// export const appRouter = router({
//   hello: publicProcedure
//     .input(z.object({ name: z.string().optional() }))
//     .query(({ input }) => {
//       return { greeting: `Hello ${input?.name ?? 'world'}!` };
//     }),
// });

