import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Login from "../../components/Login";
import cosmos from "../../images/cosmos.mov";

function Main() {
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
      <Link to="/about">
        <h3 className="about-link">About</h3>
      </Link>
    </div>
  );
}

export default Main;
