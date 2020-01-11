import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import styles from "./styles.css";

import Header from "../../components/header/Header";

function Adddream() {
  const {
    anError,
    setAnError,
    handleNewDreamChange,
    handleSubmitNewDream,
    redirectToHomePage
  } = useContext(Context);

  return (
    <div>
      <Header />
      <form className="adddream-form" onSubmit={handleSubmitNewDream}>
        <input
          required
          type="text"
          placeholder="title"
          maxLength="30"
          name={"title"}
          onChange={handleNewDreamChange}
        />
        <select name={"dream_type"} onChange={handleNewDreamChange}>
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
          name={"hours_slept"}
          onChange={handleNewDreamChange}
        />
        <textarea
          required
          type="text"
          placeholder="info"
          name={"info"}
          onChange={handleNewDreamChange}
        />
        <label>
          <input
            type="checkbox"
            name={"is_private"}
            onChange={handleNewDreamChange}
          />
          Make it private?
        </label>
        <input type="submit" className="button" value="Add Dream"></input>
      </form>
    </div>
  );
}

export default Adddream;
