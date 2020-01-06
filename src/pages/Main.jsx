import React, { useState, useContext } from "react";

import cosmos from "../images/cosmos.mov";
function Main() {
  return (
    <div className="div-video-main-page">
      <video
        playsinline="playsinline"
        className="video-main-page"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src={cosmos} />>
      </video>
    </div>
  );
}

export default Main;
