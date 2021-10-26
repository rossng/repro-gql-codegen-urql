import React from "react";
import "./App.css";
import { gql } from "graphql-tag";
import { useFooQuery } from "./types";

gql`
  query Foo {
    Tweets {
      id
      body
    }
  }
`;

function App() {
  const [result] = useFooQuery();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Repro: graphql-code-generator + urql</h1>
        {JSON.stringify(result.data?.Tweets)}
      </header>
    </div>
  );
}

export default App;
