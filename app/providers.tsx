'use client';

import {ChakraProvider} from '@chakra-ui/react';
import {theme} from '@/themes';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {retry: 1, refetchOnWindowFocus: false},
    mutations: {retry: 0},
  },
});

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </QueryClientProvider>
  );
}
