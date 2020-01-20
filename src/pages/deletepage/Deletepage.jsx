import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import "./styles.css";

import Header from "../../components/header/Header";

function Deletepage() {
  const {
    handleDeleteAccount,
    redirectToLoginPage,
    setGoBackButton
  } = useContext(Context);

  useEffect(() => {
    setGoBackButton(true);
  }, []);

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
    </>
  );
}

export default Deletepage;
