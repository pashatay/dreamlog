import React from "react";
//import styles from "./styles.css";

import Header from "../../components/header/Header";

function ForgotPassword() {
  return (
    <div>
      <Header />
      <form className="forgotpassword-form">
        <input required type="email" placeholder="email" name={"email"} />
        <input type="submit" className="button" value="Send"></input>
      </form>
    </div>
  );
}

export default ForgotPassword;
