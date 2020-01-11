import React, { useContext, useEffect } from "react";
//import styles from "./styles.css";
import { Context } from "../../Context";

import Header from "../../components/header/Header";

function ForgotPassword() {
  const { handleChange, handleSubmitEmailToChangePassword } = useContext(
    Context
  );
  return (
    <div>
      <Header />
      <form
        className="forgotpassword-form"
        onSubmit={handleSubmitEmailToChangePassword}
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
    </div>
  );
}

export default ForgotPassword;
