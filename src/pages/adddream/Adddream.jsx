import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import "./styles.css";

import DreamAddedModal from "../../components/modals/DreamAddedModal";
import Header from "../../components/header/Header";

function AddDream() {
  const {
    handleNewDreamChange,
    handleSubmitNewDream,
    redirectToLoginPage,
    setGoBackButton
  } = useContext(Context);

  useEffect(() => {
    setGoBackButton(true);
  }, []);

  return (
    <>
      {redirectToLoginPage()}
      <Header />
      <form className="adddream-form" onSubmit={handleSubmitNewDream}>
        <input
          required
          type="text"
          placeholder="Title"
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
          placeholder="Hours slept"
          min="1"
          max="20"
          name={"hours_slept"}
          onChange={handleNewDreamChange}
        />
        <textarea
          required
          type="text"
          placeholder="What happened in your dream?"
          name={"info"}
          onChange={handleNewDreamChange}
        />
        <label className="private-checkbox">
          <input
            type="checkbox"
            name={"is_private"}
            onChange={handleNewDreamChange}
          />
          <h3>Make it private?</h3>
        </label>
        <input type="submit" className="button" value="Add Dream"></input>
      </form>
      <DreamAddedModal />
    </>
  );
}

export default AddDream;
