import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

function ContextProvider(props) {
  const formDefaultValues = {
    name: "",
    email: "",
    password: ""
  };

  const [formValues, setFormValues] = useState(formDefaultValues);

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

  const handleSubmitChangePassword = e => {
    formValues.email = "";

    e.preventDefault();
    axios
      .patch("http://localhost:8000/resetpassword/:token", formValues)
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
        handleSubmitChangePassword
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
