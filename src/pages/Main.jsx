import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import Head from "../components/Head";
import cosmos from "../images/cosmos.mov";
function Main() {
  return (
    <div className="div-main-page">
      <Head />
      <div className="div-login-form">
        <Login />
      </div>
      <Link to="/about">
        <h3 className="about-link">About</h3>
      </Link>
    </div>
  );
}

export default Main;
