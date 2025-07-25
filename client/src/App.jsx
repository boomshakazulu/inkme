import { StrictMode } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Toaster } from "sonner";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export default function App({ children }) {
  return (
    <StrictMode>
      <ApolloProvider client={client}>
        {children}
        <Toaster richColors />
      </ApolloProvider>
    </StrictMode>
  );
}
