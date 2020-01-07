import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./pages/main/Main";
import Signup from "./pages/signup/Signup";
import About from "./pages/about/About";
import Homepage from "./pages/homepage/Homepage";
import Adddream from "./pages/adddream/Adddream";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/homepage">
          <Homepage />
        </Route>
        <Route path="/adddream">
          <Adddream />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
