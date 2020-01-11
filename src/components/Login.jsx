import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import cosmos from "../images/cosmos.mov";

function Login() {
  const {
    anError,
    setAnError,
    handleSubmitLogin,
    handleChange,
    redirectToHomePage
  } = useContext(Context);

  useEffect(() => {
    setAnError("");
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
        />
        <input
          required
          type="password"
          placeholder="password"
          name={"password"}
          onChange={handleChange}
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
