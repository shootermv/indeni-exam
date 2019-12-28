import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import { GridViewPage } from "./GridViewPage";
import { AddEditPage } from "./AddEditPage";
import UserContextProvider from "./contexts/UserContext";
import { MatchPage } from "./MatchPage";

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <header>
          <Link to="/details/new">New</Link>
          <Link to="/match">Find Your Match</Link>
        </header>
        <Router>
          <GridViewPage path="/" />
          <AddEditPage path="/details/:id" />
          <MatchPage path="/match" />
        </Router>
      </UserContextProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
