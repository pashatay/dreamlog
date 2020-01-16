import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";
import "./styles.css";

function Modal() {
  const { anError, aMessage, openModal, setOpenModal } = useContext(Context);

  const showHideClassName = openModal
    ? "signup-modal display-block"
    : "signup-modal display-none";
  const resetPassword = (
    <>
      <h2 className="anError">{anError}</h2>
      <Link to="/forgot" className="reset-password-link">
        <h3>Reset password</h3>
      </Link>
      <i
        className="ri-close-circle-fill"
        onClick={() => setOpenModal(false)}
      ></i>
    </>
  );
  const otherErrors = (
    <>
      <h2 className="anError">{anError}</h2>
      <h2 className="aMessage">{aMessage}</h2>
      <i
        className="ri-close-circle-fill"
        onClick={() => setOpenModal(false)}
      ></i>
    </>
  );
  return (
    <div className={showHideClassName}>
      {anError === "Incorrect email or password!" ? resetPassword : otherErrors}
    </div>
  );
}

export default Modal;
