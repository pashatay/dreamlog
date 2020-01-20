import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";
import DisplayDreamLog from "../../components/displaydreamlog/DisplayDreamLog";
import "./styles.css";

import Header from "../../components/header/Header";
import DreamDisplayModal from "../../components/modals/DreamDisplayModal";
import WaterMark from "../../components/watermark/WaterMark";

function Dreamlog() {
  const {
    filteredDreams,
    getAllDreams,
    dreams,
    dreamFilter,
    setDreamFilter,
    redirectToLoginPage,
    setGoBackButton
  } = useContext(Context);

  useEffect(() => {
    setDreamFilter("all");
    getAllDreams();
    setGoBackButton(true);
  }, []);

  const allDreams = dreams.map((dream, i) => {
    return <DisplayDreamLog data={dream} key={i} />;
  });

  const currentYearDreams = filteredDreams.year.map((dream, i) => {
    return <DisplayDreamLog data={dream} key={i} />;
  });

  const currentMonthDreams = filteredDreams.month.map((dream, i) => {
    return <DisplayDreamLog data={dream} key={i} />;
  });

  const noDreams = (
    <>
      <h1 className="no-dreams">You haven't logged any dreams yet.</h1>
      <Link to="adddream">
        <button className="adddream-button">Add a Dream</button>
      </Link>
    </>
  );
  const displayDreams = (
    <section className="statistics-filter">
      <select
        name={"filter_dreams"}
        onChange={e => setDreamFilter(e.target.value)}
      >
        <option value="all">All Dreams</option>
        <option value="month">From this Month</option>
        <option value="year">From this Year</option>
      </select>
      <section className="allDreams">
        {dreamFilter === "year"
          ? currentYearDreams
          : dreamFilter === "month"
          ? currentMonthDreams
          : allDreams}
        <DreamDisplayModal data={dreams} />
      </section>
    </section>
  );
  return (
    <>
      {redirectToLoginPage()}
      <Header />
      {dreams.length < 1 ? noDreams : displayDreams}
      <WaterMark />
    </>
  );
}

export default Dreamlog;
