import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import cosmos from "../images/cosmos.mov";

function Signup() {
  return (
    <>
      <form>
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
    </>
  );
}

export default Signup;
