import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./Context";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Signup from "./pages/signup/Signup";
import Login from "./components/Logout";
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
        <Router>
          <About />
        </Router>
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
        <Router>
          <AddDream />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
  it("Deletepage renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <Deletepage />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
  it("Dreamblog renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <Dreamblog />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
  it("Dreamlog renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <Dreamlog />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
  it("Editpage renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <Editpage />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
  it("Homepage renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <Homepage />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
  it("Mainpage renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <Main />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
  it("ForgotPassword renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <ForgotPassword />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
  it("ResetPassword renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <ResetPassword />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
  it("Signup renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <Signup />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
  it("Statistics renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <Statistics />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
});
