import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { App } from "../components/Welcome/App";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export default function HomePage() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
