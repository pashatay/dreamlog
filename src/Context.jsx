import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

function ContextProvider(props) {
  const url = "http://localhost:8000";

  const formDefaultValues = {
    name: "",
    email: "",
    password: ""
  };

  const [formValues, setFormValues] = useState(formDefaultValues);
  const [token, setToken] = useState("");

  const headers = {
    Authorization: localStorage.getItem("access_token")
  };

  const handleChange = e => {
    const target = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [target.name]: target.value.trim()
    }));
  };

  const handleSubmitEmailToChangePassword = e => {
    e.preventDefault();
    axios
      .post(`${url}/resetpassword/email`, formValues)
      .then(res => {
        console.log(res);
      })
      //.then(setFormValues(formDefaultValues))
      .catch(err => {
        console.log(err);
        console.log({ email: formValues.email });
      });
  };

  const handleSubmitChangePassword = e => {
    formValues.email = "";
    e.preventDefault();
    axios
      .patch(`${url}/resetpassword/${token}`, formValues)
      .then(res => {
        console.log("done");
      })
      .then(setFormValues(formDefaultValues))
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Context.Provider
      value={{
        handleChange,
        handleSubmitEmailToChangePassword,
        handleSubmitChangePassword,
        setToken
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
