import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import "./styles.css";

function DreamDisplayModal(data) {
  const {
    setOpenModal,
    openModal,
    keyModal,
    handleChangeDreamPrivacy
  } = useContext(Context);
  const result = data.data.filter(dream => dream.id === keyModal)[0];

  const showHideClassName = openModal
    ? "modal display-block"
    : "modal display-none";

  let dream = "";

  if (result) {
    dream = result;
  }
  const privateDream = (
    <>
      <i class="ri-eye-off-fill"></i>

      <button
        className="modal-dream-private-button"
        onClick={() => handleChangeDreamPrivacy(dream.id, !dream.is_private)}
      >
        Make Public
      </button>
    </>
  );
  const publicDream = (
    <>
      <i className="ri-eye-fill"></i>

      <button
        className="modal-dream-private-button"
        onClick={() => handleChangeDreamPrivacy(dream.id, !dream.is_private)}
      >
        Make Private
      </button>
    </>
  );
  return (
    <div className={showHideClassName}>
      <section className={`${dream.dream_type}`}>
        <h1 className="modal-dream-title">{dream.title}</h1>
        <p className="modal-dream-info">{dream.info}</p>
        <i
          className="ri-close-circle-fill"
          onClick={() => setOpenModal(false)}
        ></i>
        {dream.is_private ? privateDream : publicDream}
      </section>
    </div>
  );
}

export default DreamDisplayModal;
