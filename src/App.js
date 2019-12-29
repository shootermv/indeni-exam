import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import UserContextProvider from "./contexts/UserContext";
import { MatchPage } from "./MatchPage";
import { GridViewPage } from "./GridViewPage";
import { AddEditPage } from './AddEditPage';

const App = () => {
  return (
    <div>
      <UserContextProvider>
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
