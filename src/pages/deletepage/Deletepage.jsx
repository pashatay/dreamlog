import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import { Redirect } from "react-router-dom";
import styles from "./styles.css";

import Header from "../../components/header/Header";
import WaterMark from "../../components/watermark/WaterMark";

function Deletepage() {
  const { handleDeleteAccount, redirectToLoginPage } = useContext(Context);

  return (
    <>
      {redirectToLoginPage()}
      <Header />
      <section className="delete-section">
        <p className="delete-info">
          Are you sure you want to delete your page? If you press yes all your
          information will be erased permanently.
        </p>
        <div className="deletepage-buttons">
          <Link to="/">
            <button
              onClick={handleDeleteAccount}
              className="delete-info-button"
            >
              Yes
            </button>
          </Link>

          <Link to="/homepage">
            <button className="delete-info-button">No</button>
          </Link>
        </div>
      </section>
      <WaterMark />
    </>
  );
}

export default Deletepage;
