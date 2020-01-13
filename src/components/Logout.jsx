import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import { Redirect } from "react-router-dom";

function Logout() {
  const { logOutUser } = useContext(Context);
  useEffect(() => {
    logOutUser();
  }, []);
  return <Redirect to="/" />;
}

export default Logout;
