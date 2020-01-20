import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import "../images/cosmos.mov";
import LoginSignupModal from "./modals/LoginSignupModal";

function Login() {
  const {
    setAnError,
    setAMessage,
    handleSubmitLogin,
    setOpenModal,
    spinnerIsOn,
    handleChange,
    redirectToHomePage
  } = useContext(Context);

  useEffect(() => {
    setAnError("");
    setAMessage("");
    setOpenModal(false);
  }, []);

  return (
    <>
      {redirectToHomePage()}
      <form className="login-form" onSubmit={handleSubmitLogin}>
        <input
          required
          type="email"
          placeholder="email"
          name={"email"}
          onChange={handleChange}
          disabled={spinnerIsOn}
        />
        <input
          required
          type="password"
          placeholder="password"
          name={"password"}
          onChange={handleChange}
          disabled={spinnerIsOn}
        />
        <input type="submit" className="button" value="Log In"></input>
      </form>
      <h5 className="or">or</h5>
      <div className="div-signup-button">
        <Link to="signup">
          <button className="signup-button">Sign Up</button>
        </Link>
      </div>
      <LoginSignupModal />
    </>
  );
}

export default Login;
