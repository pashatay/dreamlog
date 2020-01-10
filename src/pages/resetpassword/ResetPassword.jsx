import React from "react";
//import styles from "./styles.css";

import Header from "../../components/header/Header";

function ResetPassword() {
  return (
    <div>
      <Header />
      <form className="resetpassword-form">
        <input
          required
          type="password"
          placeholder="password"
          name={"password"}
        />
        <input required type="password" placeholder="confirm password" />
        <input type="submit" className="button" value="Send"></input>
      </form>
    </div>
  );
}

export default ResetPassword;
