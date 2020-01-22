import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./pages/main/Main";
import Signup from "./pages/signup/Signup";
import Logout from "./components/Logout";
import About from "./pages/about/About";
import Homepage from "./pages/homepage/Homepage";
import AddDream from "./pages/adddream/AddDream";
import Dreamlog from "./pages/dreamlog/Dreamlog";
import Dreamblog from "./pages/dreamblog/Dreamblog";
import Statistics from "./pages/statistics/Statistics";
import Deletepage from "./pages/deletepage/Deletepage";
import Editpage from "./pages/editpage/Editpage";
import ForgotPassword from "./pages/resetpassword/ForgotPassword";
import ResetPassword from "./pages/resetpassword/ResetPassword";

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
          <AddDream />
        </Route>
        <Route path="/dreamlog">
          <Dreamlog />
        </Route>
        <Route path="/dreamblog/:id">
          <Dreamblog />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="/deletepage">
          <Deletepage />
        </Route>
        <Route path="/editpage">
          <Editpage />
        </Route>
        <Route path="/forgot">
          <ForgotPassword />
        </Route>
        <Route path="/reset/:token">
          <ResetPassword />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
