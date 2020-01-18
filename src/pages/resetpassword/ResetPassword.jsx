import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import { useParams } from "react-router-dom";
import "./styles.css";
import LoginSignupModal from "../../components/modals/LoginSignupModal";

import Header from "../../components/header/Header";

function ResetPassword() {
  const { token } = useParams();
  useEffect(() => {
    setToken(token);
  }, [token]);

  const {
    handleChange,
    handleSubmitResetPassword,
    setConfirmedPassword,
    setToken
  } = useContext(Context);
  return (
    <>
      <Header />
      <h3 className="resetpassword-h3">Enter your new password please:</h3>
      <form className="resetpassword-form" onSubmit={handleSubmitResetPassword}>
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
        <input type="submit" className="button" value="Send"></input>
      </form>
      <LoginSignupModal />
    </>
  );
}

export default ResetPassword;
