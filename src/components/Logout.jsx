import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import { Redirect } from "react-router-dom";

function Logout() {
  const { setUserHasLoggedIn, setRedirectTask } = useContext(Context);
  useEffect(() => {
    localStorage.removeItem("access_token");
    setUserHasLoggedIn(false);
    setRedirectTask(false);
  });
  return <Redirect to="/" />;
}

export default Logout;
