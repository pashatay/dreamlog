import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import styles from "./styles.css";

function Header() {
  const { userHasLoggedIn, goBackButton } = useContext(Context);
  const logged = (
    <>
      <Link to="/homepage" className="logo">
        {goBackButton ? (
          <i class="ri-arrow-left-line"></i>
        ) : (
          <>
            <i className="ri-home-6-line"></i>{" "}
            <h3 className="dreamlog-logo">_Dream.log</h3>
          </>
        )}
      </Link>

      <Link to="/logout" className="header-logout">
        <h2>Log Out</h2>
      </Link>
    </>
  );
  const notLogged = (
    <>
      <Link to="/" className="logo">
        <i className="ri-home-6-line"></i>
        <h3 className="dreamlog-logo">_Dream.log</h3>
      </Link>
    </>
  );
  return <header>{userHasLoggedIn ? logged : notLogged}</header>;
}

export default Header;
