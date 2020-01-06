import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import cosmos from "../images/cosmos.mov";

function Head() {
  return (
    <>
      <video
        playsinline="playsinline"
        className="video-main-page"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src={cosmos} />>
      </video>
      <div className="app-name">
        <h2>Dream Log - </h2>
        <p>the best dream journal out there.</p>
      </div>
    </>
  );
}

export default Head;
