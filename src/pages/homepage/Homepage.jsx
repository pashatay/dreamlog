import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";

import Header from "../../components/header/Header";

function Homepage() {
  return (
    <>
      <Header />
      <h3 className="greeting">Hey, Pasha!</h3>
      <nav>
        <div>
          <Link to="/adddream">
            <i class="ri-quill-pen-fill"></i>
          </Link>
          <h5>Add a dream</h5>
        </div>
        <div>
          <Link to="/dreamlog">
            <i class="ri-moon-clear-fill"></i>
          </Link>
          <h5>My dream log</h5>
        </div>
        <div>
          <Link to="/dreamblog">
            <i class="ri-book-open-fill"></i>
          </Link>
          <h5>My dream blog</h5>
        </div>
        <div>
          <Link to="/statistics">
            <i class="ri-bar-chart-fill"></i>
          </Link>
          <h5>My Statistics</h5>
        </div>
      </nav>
      <footer>
        <Link to="/editpage">
          <i class="ri-tools-fill"></i>
        </Link>
        <Link to="/deletepage">
          <i class="ri-delete-bin-6-fill"></i>
        </Link>
      </footer>
    </>
  );
}

export default Homepage;
