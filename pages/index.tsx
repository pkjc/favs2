import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Welcome } from "../components/Welcome/Welcome";

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
      <Welcome />
    </QueryClientProvider>
  );
}
