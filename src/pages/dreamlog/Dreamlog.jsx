import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../Context";
import DisplayDreamLog from "../../components/displaydreamlog/DisplayDreamLog";
import "./styles.css";

import Header from "../../components/header/Header";
import DreamDisplayModal from "../../components/modals/DreamDisplayModal";

function Dreamlog() {
  const {
    filteredDreams,
    getAllDreams,
    dreams,
    dreamFilter,
    setDreamFilter,
    redirectToLoginPage
  } = useContext(Context);

  useEffect(() => {
    getAllDreams();
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

  return (
    <>
      {redirectToLoginPage()}
      <Header />
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
    </>
  );
}

export default Dreamlog;
