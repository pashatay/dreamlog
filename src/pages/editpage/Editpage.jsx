import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";

import "./styles.css";
import Header from "../../components/header/Header";
import LoginSignupModal from "../../components/modals/LoginSignupModal";
import WaterMark from "../../components/watermark/WaterMark";

function Editpage() {
  const {
    handleSubmitChangeEmail,
    handleSubmitChangePassword,
    handleChange,
    setConfirmedPassword,
    redirectToLoginPage,
    setGoBackButton
  } = useContext(Context);

  useEffect(() => {
    setGoBackButton(true);
  }, []);

  return (
    <>
      {redirectToLoginPage()}
      <Header />
      <section className="edit-form">
        <form onSubmit={handleSubmitChangeEmail}>
          <input
            required
            type="email"
            placeholder="email"
            name={"email"}
            onChange={handleChange}
          />
          <input type="submit" className="button" value="Change Email"></input>
        </form>
        <br />

        <form onSubmit={handleSubmitChangePassword}>
          <input
            required
            type="password"
            placeholder="password"
            name={"password"}
            onChange={handleChange}
            minLength="8"
          />

          <input
            required
            type="password"
            placeholder="password"
            onChange={e => setConfirmedPassword(e.target.value)}
          />
          <br />
          <input
            type="submit"
            className="button"
            value="Change Password"
          ></input>
        </form>
      </section>
      <LoginSignupModal />
      <WaterMark />
    </>
  );
}

export default Editpage;
