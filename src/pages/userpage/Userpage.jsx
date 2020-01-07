import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";

import Header from "../../components/header/Header";

function Userpage() {
  return (
    <>
      <Header />
      <nav>
        <div>
          <i class="ri-quill-pen-fill"></i>
          <h5>Add a dream</h5>
        </div>
        <div>
          <i class="ri-moon-clear-fill"></i>
          <h5>My dream log</h5>
        </div>
        <div>
          <i class="ri-book-open-fill"></i>
          <h5>My dream blog</h5>
        </div>
        <div>
          <i class="ri-bar-chart-fill"></i>
          <h5>My Statistics</h5>
        </div>
      </nav>
    </>
  );
}

export default Userpage;
