import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import "./styles.css";
import Login from "../../components/Login";
import cosmos from "../../images/cosmos.mov";

function Main() {
  const { spinnerIsOn, setSpinnerIsOn } = useContext(Context);

  useEffect(() => {
    setSpinnerIsOn(false);
  }, []);

  const spinner = <div className="loader">Loading...</div>;
  return (
    <div className="div-main-page">
      <video
        playsInline="playsinline"
        className="video-main-page"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src={cosmos} />>
      </video>
      <div className="app-name">
        <h2>_Dream.Log </h2>
        <p>the best dream journal out there.</p>
      </div>
      <div className="div-login-form">
        <Login />
      </div>
      {spinnerIsOn ? spinner : false}
      <Link className="about-link" to="/about">
        About
      </Link>
    </div>
  );
}

export default Main;
