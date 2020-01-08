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
        <select name="dreamtype">
          <option value="Lucid">Lucid</option>
          <option value="Normal">Normal</option>
          <option value="Nightmare">Nightmare</option>
        </select>
        <input
          required
          type="number"
          placeholder="How many hours"
          min="1"
          max="20"
          name={"hours"}
        />
        <textarea required type="text" placeholder="info" name={"info"} />
        <label>
          <input type="checkbox" name="isPrivate" /> Make it private?
        </label>
        <input type="submit" className="button" value="Add Dream"></input>
      </form>
    </div>
  );
}

export default Adddream;
