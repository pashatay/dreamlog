import React, { useContext } from "react";
import { Context } from "../../Context";
//import styles from "./styles.css";

import Header from "../../components/header/Header";

function ResetPassword() {
  const { handleChange, handleSubmitChangePassword } = useContext(Context);
  return (
    <div>
      <Header />
      <form
        className="resetpassword-form"
        onSubmit={handleSubmitChangePassword}
      >
        <input
          required
          type="password"
          placeholder="password"
          name={"password"}
          onChange={handleChange}
        />
        <input required type="password" placeholder="confirm password" />
        <input type="submit" className="button" value="Send"></input>
      </form>
    </div>
  );
}

export default ResetPassword;
