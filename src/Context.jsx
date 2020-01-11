import React, { useState } from "react";
import { Redirect } from "react-router-dom";
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
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [anError, setAnError] = useState("");
  const [token, setToken] = useState("");
  const [userHasLoggedIn, setUserHasLoggedIn] = useState(false);
  const [redirectTask, setRedirectTask] = useState(false);

  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailIsValid = regex.test(formValues.email);

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

  const handleSubmitSignUp = e => {
    e.preventDefault();
    if (formValues.password === confirmedPassword && emailIsValid) {
      axios
        .post(`${url}/signup`, formValues)
        .then(res => {
          console.log(res);
          setAnError(
            "Almost done! Please check your email for the link to verify your account."
          );
        })
        .catch(err => {
          setAnError(err.response.data.error.message);
        });
    } else {
      setAnError("Passwords don't match!");
    }
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", formValues)
      .then(res => {
        userLoggedIn(res.data);
        setRedirectTask(true);
        setAnError("");
      })
      .catch(err => {
        setRedirectTask(false);
        setAnError(err.response.data.error.message);
      });
  };

  const userLoggedIn = data => {
    localStorage.setItem("access_token", `bearer ${data.token}`);
    setUserHasLoggedIn(true);
  };

  const redirectToHomePage = () => {
    return redirectTask ? <Redirect to="/homepage" /> : false;
  };

  const handleSubmitEmailToChangePassword = e => {
    e.preventDefault();
    axios
      .post(`${url}/resetpassword/email`, formValues)
      .then(res => {
        console.log(res);
      })
      .then(setFormValues(formDefaultValues))
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
        handleSubmitLogin,
        userHasLoggedIn,
        setUserHasLoggedIn,
        anError,
        setAnError,
        handleSubmitSignUp,
        setConfirmedPassword,
        handleSubmitEmailToChangePassword,
        handleSubmitChangePassword,
        setToken,
        redirectToHomePage,
        setRedirectTask
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
