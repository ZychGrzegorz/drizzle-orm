import { CreateTRPCReact, createTRPCReact, httpBatchLink } from '@trpc/react-query';
import { AppRouter } from '~/server/router/index';


type Trpc = CreateTRPCReact<AppRouter, unknown, unknown>;

export const api: Trpc = createTRPCReact<AppRouter>();

export const trpcClient = api.createClient({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
});