import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import { Redirect } from "react-router-dom";
import ReactDOM from "react-dom";
import styles from "./styles.css";
import Modal from "./Modal";

function DisplayDreamLog(data, key) {
  const { setOpenModal, openModal, setKeyModal } = useContext(Context);
  const dream = data.data;

  const showModal = () => {
    setKeyModal(dream.id);
    setOpenModal(!openModal);
  };

  return (
    <div
      className={`${dream.dream_type} dream-box`}
      onClick={() => showModal()}
    >
      <div className="dream-info">
        <h5 className="dream-title">{dream.title}</h5>
        <h4 className="dream-date">{dream.dream_date}</h4>
      </div>
    </div>
  );
}

export default DisplayDreamLog;
