import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import styles from "./styles.css";

function Modal(data) {
  const { setOpenModal, openModal, keyModal } = useContext(Context);
  const result = data.data.filter(dream => dream.id === keyModal)[0];

  const showHideClassName = openModal
    ? "modal display-block"
    : "modal display-none";

  let dream = "";

  if (result) {
    dream = result;
  }

  return (
    <div className={showHideClassName}>
      <section className={`${dream.dream_type}`}>
        <p>{dream.info}</p>
        <button onClick={() => setOpenModal(false)}>close</button>
      </section>
    </div>
  );
}

export default Modal;
