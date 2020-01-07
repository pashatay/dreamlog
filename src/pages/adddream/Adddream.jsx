import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";

import Header from "../../components/header/Header";

function Adddream() {
  return (
    <div>
      <Header />
      <form className="adddream-form">
        <input
          required
          type="text"
          placeholder="title"
          maxlength="30"
          name={"title"}
        />
        <label>
          <input type="radio" value="lucid" name="dream-type" checked={true} />{" "}
          Lucid
        </label>
        <input type="radio" value="normal" name="dream-type" /> Normal
        <input type="radio" value="nightmare" name="dream-type" /> Nightmare
        <textarea required type="text" placeholder="info" name={"info"} />
        <label>
          <input type="checkbox" name="isPrivate" /> Is Private?
        </label>
        <br />
        <input type="submit" className="button" value="Sign Up"></input>
      </form>
    </div>
  );
}

export default Adddream;
