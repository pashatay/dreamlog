import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Context = React.createContext();

function ContextProvider(props) {
  const url = "http://localhost:8000";

  const todaysDate = () => {
    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    month = month.toString().length < 2 ? "0" + month : month;
    let date = newDate.getDate();
    let year = newDate
      .getFullYear()
      .toString()
      .slice(2);
    let today = `${month}/${date}/${year}`;
    return today;
  };

  const formDefaultValues = {
    name: "",
    email: "",
    password: ""
  };

  const newDreamDefaultValues = {
    title: "",
    dream_date: todaysDate(),
    dream_type: "Lucid",
    hours_slept: "",
    info: "",
    is_private: "false"
  };

  const [formValues, setFormValues] = useState(formDefaultValues);
  const [newDreamValues, setNewDreamValues] = useState(newDreamDefaultValues);
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [anError, setAnError] = useState("");
  const [aMessage, setAMessage] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [userHasLoggedIn, setUserHasLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [redirectTask, setRedirectTask] = useState(false);
  const [dreams, setDreams] = useState([]);
  const [publicDreams, setPublicDreams] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [keyModal, setKeyModal] = useState("");
  const [filterDreams, setFilterDreams] = useState("all");

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

  const handleNewDreamChange = e => {
    const { type, checked } = e.target;
    const target = e.target;
    if (type === "checkbox") {
      setNewDreamValues(prevState => ({
        ...prevState,
        [target.name]: checked
      }));
    } else {
      setNewDreamValues(prevState => ({
        ...prevState,
        [target.name]: target.value.trim()
      }));
    }
  };

  const handleSubmitSignUp = e => {
    e.preventDefault();
    e.target.reset();
    if (formValues.password === confirmedPassword && emailIsValid) {
      axios
        .post(`${url}/signup`, formValues)
        .then(res => {
          console.log(res);
          setOpenModal(true);
          setAnError("");
          setAMessage(
            "Almost done! Please check your email for the link to verify your account."
          );
        })
        .catch(err => {
          setOpenModal(true);
          setAMessage("");
          setAnError(err.response.data.error.message);
          console.log(err.response.data.error.message);
        });
    } else {
      setOpenModal(true);
      setAMessage("");
      setAnError("Passwords don't match!");
    }
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    e.target.reset();
    axios
      .post(`${url}/login`, formValues)
      .then(res => {
        userLoggedIn(res.data);
        setAnError("");
      })
      .catch(err => {
        setRedirectTask(false);
        setOpenModal(true);
        return err.response.status === 401
          ? (setAMessage(""), setAnError(err.response.data.error.message))
          : (setAnError(""), setAMessage(err.response.data.error.message));
      });
  };

  const userLoggedIn = data => {
    localStorage.setItem("access_token", `bearer ${data.token}`);
    setRedirectTask(true);
    setUserName(data.name);
    setUserId(data.id);
    setUserHasLoggedIn(true);
  };

  const logOutUser = () => {
    localStorage.removeItem("access_token");
    setRedirectTask(false);
    setUserName("");
    setUserId("");
    setUserHasLoggedIn(false);
  };

  const redirectToHomePage = () => {
    return redirectTask ? <Redirect to="/homepage" /> : false;
  };

  const handleSubmitEmailToResetPassword = e => {
    e.preventDefault();
    e.target.reset();
    axios
      .post(`${url}/resetpassword/email`, formValues)
      .then(res => {
        console.log(res);
        setOpenModal(true);
        setAnError("");
        setAMessage(res.data.message);
      })
      .then(setFormValues(formDefaultValues))
      .catch(err => {
        setOpenModal(true);
        setAMessage("");
        setAnError(err.response.data.error.message);
      });
  };

  const handleSubmitResetPassword = e => {
    formValues.email = "";
    e.preventDefault();
    e.target.reset();
    axios
      .patch(`${url}/resetpassword/${token}`, formValues)
      .then(res => {
        console.log(res);
        setOpenModal(true);
        setAnError("");
        setAMessage(res.data.message);
      })
      .then(setFormValues(formDefaultValues))
      .catch(err => {
        setOpenModal(true);
        setAMessage("");
        setAnError("Something went wrong. You need a new reset link.");
      });
  };
  const handleSubmitChangeEmail = e => {
    formValues.password = "";
    e.preventDefault();
    e.target.reset();
    axios
      .patch(`${url}/userpage`, formValues, { headers })
      .then(res => {
        setOpenModal(true);
        setAnError("");
        setAMessage(res.data.message.message);
        setFormValues(formDefaultValues);
        logOutUser();
      })
      .catch(err => {
        console.log(err.response);
        setOpenModal(true);
        setAMessage("");
        setAnError(err.response.data.error.message);
      });
  };
  const handleSubmitChangePassword = e => {
    formValues.email = "";
    if (formValues.password != confirmedPassword) {
      e.preventDefault();
      e.target.reset();
      setOpenModal(true);
      setAMessage("");
      setAnError("Passwords don't match!");
    } else {
      e.preventDefault();
      e.target.reset();
      axios
        .patch(`${url}/userpage`, formValues, { headers })
        .then(res => {
          setOpenModal(true);
          setAnError("");
          setAMessage(res.data.message.message);
          setFormValues(formDefaultValues);
          logOutUser();
        })
        .catch(err => {
          setAnError(err.response.data.error.message);
        });
    }
  };
  const handleSubmitNewDream = e => {
    e.preventDefault();
    e.target.reset();
    axios
      .post(`${url}/userpage`, newDreamValues, { headers })
      .then(res => {
        setNewDreamValues(newDreamDefaultValues);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getAllDreams = () => {
    axios
      .get(`${url}/userpage`, { headers })
      .then(res => {
        setDreams(res.data.sort((a, b) => b.id - a.id));
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getPublicDreams = id => {
    axios
      .get(`${url}/dreamblog/${id}`)
      .then(res => {
        setPublicDreams(res.data.sort((a, b) => b.id - a.id));
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleChangeDreamPrivacy = (dreamId, is_private) => {
    axios
      .patch(`${url}/dreams/${dreamId}`, { is_private }, { headers })
      .then(res => {
        console.log(res);
      })
      .then(() => getAllDreams())
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
        userName,
        userId,
        anError,
        setAnError,
        aMessage,
        setAMessage,
        handleSubmitSignUp,
        setConfirmedPassword,
        handleSubmitEmailToResetPassword,
        handleSubmitResetPassword,
        setToken,
        redirectToHomePage,
        setRedirectTask,
        handleNewDreamChange,
        handleSubmitNewDream,
        getAllDreams,
        dreams,
        publicDreams,
        getPublicDreams,
        openModal,
        setOpenModal,
        keyModal,
        setKeyModal,
        handleChangeDreamPrivacy,
        filterDreams,
        setFilterDreams,
        handleSubmitChangeEmail,
        handleSubmitChangePassword,
        logOutUser
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
