import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
