import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import theme from "./theme";
import MainRoutes from "./routes";

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60 * 60,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <ChakraProvider theme={theme}>
        <MainRoutes />
        <ReactQueryDevtools />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
