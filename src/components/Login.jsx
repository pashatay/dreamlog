import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import cosmos from "../images/cosmos.mov";

function Login() {
  return (
    <>
      <form className="login-form">
        <input required type="email" placeholder="email" name={"email"} />
        <input
          required
          type="password"
          placeholder="password"
          name={"password"}
        />
        <input type="submit" className="button" value="Log In"></input>
      </form>
      <h5 className="or">or</h5>
      <div className="div-signup-button">
        <Link to="signup">
          <button className="signup-button">Sign Up</button>
        </Link>
      </div>
    </>
  );
}

export default Login;
