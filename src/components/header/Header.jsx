import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import styles from "./styles.css";

function Header() {
  const { userHasLoggedIn } = useContext(Context);
  const logged = (
    <>
      <h3 className="logo">_Dream.log</h3>
      <Link to="/logout" className="header-logOut">
        <h2>Log Out</h2>
      </Link>
    </>
  );
  const notLogged = (
    <>
      <h3 className="logo">_Dream.log</h3>
    </>
  );
  return <header>{userHasLoggedIn ? logged : notLogged}</header>;
}

export default Header;
