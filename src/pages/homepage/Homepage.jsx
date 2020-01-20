import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import "./styles.css";

import Header from "../../components/header/Header";

function Homepage() {
  const { userName, userId, redirectToLoginPage, setGoBackButton } = useContext(
    Context
  );
  useEffect(() => {
    setGoBackButton(false);
  }, []);
  return (
    <>
      {redirectToLoginPage()}
      <Header />
      <h3 className="greeting">Hey, {userName}!</h3>
      <nav>
        <div>
          <Link to="/adddream">
            <i className="ri-quill-pen-fill"></i>
          </Link>
          <h5>Add a dream</h5>
        </div>
        <div>
          <Link to="/dreamlog">
            <i className="ri-moon-clear-fill"></i>
          </Link>
          <h5>My dream log</h5>
        </div>
        <div>
          <Link to={`/dreamblog/${userId}`}>
            <i className="ri-book-open-fill"></i>
          </Link>
          <h5>My dream blog</h5>
        </div>
        <div>
          <Link to="/statistics">
            <i className="ri-bar-chart-fill"></i>
          </Link>
          <h5>My Statistics</h5>
        </div>
      </nav>
      <footer>
        <Link to="/editpage">
          <i className="ri-tools-fill"></i>
        </Link>
        <Link to="/deletepage">
          <i className="ri-delete-bin-6-fill"></i>
        </Link>
      </footer>
    </>
  );
}

export default Homepage;
