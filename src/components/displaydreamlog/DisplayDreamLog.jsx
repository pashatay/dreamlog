import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import "./styles.css";

function DisplayDreamLog(data, key) {
  const { setOpenModal, openModal, setKeyModal } = useContext(Context);
  const dream = data.data;

  const showModal = () => {
    setKeyModal(dream.id);
    setOpenModal(!openModal);
  };
  const privateDream = (
    <i className={`${dream.dream_type} ri-eye-off-fill`}></i>
  );
  return (
    <div
      className={`${dream.dream_type} dream-box`}
      onClick={() => showModal()}
    >
      <div className="dream-info">
        <h5 className="dream-title">{dream.title}</h5>
        {dream.is_private ? privateDream : false}
        <h4 className="dream-date">{dream.dream_date}</h4>
      </div>
    </div>
  );
}

export default DisplayDreamLog;
