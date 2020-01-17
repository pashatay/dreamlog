import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./Context";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Signup from "./pages/signup/Signup";
import Login from "./components/Logout";
import Logout from "./components/Logout";
import About from "./pages/about/About";
import Homepage from "./pages/homepage/Homepage";
import Adddream from "./pages/adddream/Adddream";
import Dreamlog from "./pages/dreamlog/Dreamlog";
import Dreamblog from "./pages/dreamblog/Dreamblog";
import Statistics from "./pages/statistics/Statistics";
import Deletepage from "./pages/deletepage/Deletepage";
import Editpage from "./pages/editpage/Editpage";
import ForgotPassword from "./pages/resetpassword/ForgotPassword";
import ResetPassword from "./pages/resetpassword/ResetPassword";

afterEach(cleanup);

describe("Rendering tests", () => {
  it("App renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("Header renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <Header />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("About renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <About />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("Login renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <Login />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("Adddream renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Adddream />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
});
