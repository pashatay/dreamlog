import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import { Redirect } from "react-router-dom";
import styles from "./styles.css";

function DisplayDreamLog(data, key) {
  const dream = data.data;
  return (
    <div className={`${dream.dream_type} dream-box`}>
      <div className="dream-info">
        <h5 className="dream-title">{dream.title}</h5>
        <h4 className="dream-date">{dream.dream_date}</h4>
      </div>
    </div>
  );
}

export default DisplayDreamLog;
