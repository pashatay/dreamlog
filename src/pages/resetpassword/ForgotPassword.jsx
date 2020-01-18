import React, { useContext, useEffect } from "react";
import "./styles.css";
import { Context } from "../../Context";
import LoginSignupModal from "../../components/modals/LoginSignupModal";

import Header from "../../components/header/Header";

function ForgotPassword() {
  const {
    handleChange,
    setOpenModal,
    handleSubmitEmailToResetPassword
  } = useContext(Context);

  useEffect(() => {
    setOpenModal(false);
  }, []);

  return (
    <>
      <Header />
      <h3 className="forgotpassword-h3">
        Enter your Email to proceed with password reset:
      </h3>
      <form
        className="forgotpassword-form"
        onSubmit={handleSubmitEmailToResetPassword}
      >
        <input
          required
          type="email"
          placeholder="email"
          name={"email"}
          onChange={handleChange}
        />
        <input type="submit" className="button" value="Send"></input>
      </form>
      <LoginSignupModal />
    </>
  );
}

export default ForgotPassword;
