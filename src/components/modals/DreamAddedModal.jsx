import React, { useContext } from "react";
import { Context } from "../../Context";
import "./styles.css";

function Modal() {
  const { setOpenModal, openModal } = useContext(Context);

  const showHideClassName = openModal
    ? "signup-modal display-block"
    : "signup-modal display-none";

  return (
    <div className={showHideClassName}>
      <h2 className="dream-was-added">Dream was added.</h2>
      <i
        className="ri-close-circle-fill"
        onClick={() => setOpenModal(false)}
      ></i>
    </div>
  );
}

export default Modal;
