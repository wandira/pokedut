import React from "react";
import ReactDOM from "react-dom";
import PageRoutes from "./PageRoutes";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.css";

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <PageRoutes />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
