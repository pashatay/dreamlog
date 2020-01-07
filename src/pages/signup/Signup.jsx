import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";

import Header from "../../components/header/Header";

function Signup() {
  return (
    <>
      <Header />
      <form className="signup-form">
        <input required type="text" placeholder="name" name={"name"} />
        <input required type="email" placeholder="email" name={"email"} />
        <input
          required
          type="password"
          placeholder="password"
          name={"password"}
        />
        <input required type="password" placeholder="confirm password" />
        <br />
        <input type="submit" className="button" value="Sign Up"></input>
      </form>
      <Link to="/">
        <h3 className="signup-have-an-account">Already have an account?</h3>
      </Link>
    </>
  );
}

export default Signup;
