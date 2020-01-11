import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import styles from "./styles.css";
import { Context } from "../../Context";

function Signup() {
  const {
    anError,
    setAnError,
    handleChange,
    handleSubmitSignUp,
    setConfirmedPassword
  } = useContext(Context);

  useEffect(() => {
    setAnError("");
  }, []);

  return (
    <>
      <Header />
      <form className="signup-form" onSubmit={handleSubmitSignUp}>
        <input
          required
          type="text"
          placeholder="name"
          name={"name"}
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name={"email"}
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name={"password"}
          minLength="8"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="confirm password"
          onChange={e => setConfirmedPassword(e.target.value)}
        />
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
