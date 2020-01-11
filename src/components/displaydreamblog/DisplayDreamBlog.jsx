import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import { Redirect } from "react-router-dom";
import styles from "./styles.css";

function DisplayDreamBlog(data) {
  const dream = data.data;
  return (
    <div className="dreamblog-box">
      <h5 className={`${dream.dream_type} dreamblog-title`}>{dream.title}</h5>
      <h4 className="dreamblog-date">{dream.dream_date}</h4>
      <p className="dreamblog-info">{dream.info}</p>
    </div>
  );
}

export default DisplayDreamBlog;
