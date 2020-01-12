import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Context = React.createContext();

function ContextProvider(props) {
  const url = "http://localhost:8000";

  const todaysDate = () => {
    let newDate = new Date();
    let month = newDate.getMonth() + 1;
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
    dream_type: "",
    hours_slept: "",
    info: "",
    is_private: "false"
  };

  const [formValues, setFormValues] = useState(formDefaultValues);
  const [newDreamValues, setNewDreamValues] = useState(newDreamDefaultValues);
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [anError, setAnError] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [userHasLoggedIn, setUserHasLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [redirectTask, setRedirectTask] = useState(false);
  const [dreams, setDreams] = useState([]);
  const [publicDreams, setPublicDreams] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [keyModal, setKeyModal] = useState("");

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
      .post(`${url}/login`, formValues)
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
    setUserName(data.name);
    setUserId(data.id);
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
  const handleSubmitNewDream = e => {
    e.preventDefault();
    axios
      .post(`${url}/userpage`, newDreamValues, { headers })
      .then(res => {
        console.log(res);
      })
      //.then(getDataForUserMainPage())
      //.then(setRedirectTask(true))
      .catch(err => {
        console.log(err);
      });
  };
  const getAllDreams = () => {
    axios
      .get(`${url}/userpage`, { headers })
      .then(res => {
        setDreams(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getPublicDreams = id => {
    axios
      .get(`${url}/dreamblog/${id}`)
      .then(res => {
        setPublicDreams(res.data);
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
        handleSubmitSignUp,
        setConfirmedPassword,
        handleSubmitEmailToChangePassword,
        handleSubmitChangePassword,
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
        handleChangeDreamPrivacy
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
