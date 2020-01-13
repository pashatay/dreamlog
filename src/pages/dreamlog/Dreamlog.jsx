import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../Context";
import DisplayDreamLog from "../../components/displaydreamlog/DisplayDreamLog";
import "./styles.css";

import Header from "../../components/header/Header";
import Modal from "../../components/displaydreamlog/Modal";

function Dreamlog() {
  const { getAllDreams, dreams, filterDreams, setFilterDreams } = useContext(
    Context
  );

  useEffect(() => {
    getAllDreams();
  }, []);

  const currentYear = new Date()
    .getFullYear()
    .toString()
    .slice(-2);

  const month = new Date().getMonth() + 1;
  const currentMonth = month.toString().length < 2 ? "0" + month : month;

  const allDreams = dreams.map((dream, i) => {
    return <DisplayDreamLog data={dream} key={i} />;
  });

  const currentYearDreams = dreams
    .filter(dream => dream.dream_date.slice(-2) === currentYear)
    .map((dream, i) => {
      return <DisplayDreamLog data={dream} key={i} />;
    });

  const currentMonthDreams = dreams
    .filter(
      dream =>
        dream.dream_date.slice(0, 2) === currentMonth &&
        dream.dream_date.slice(-2) === currentYear
    )
    .map((dream, i) => {
      return <DisplayDreamLog data={dream} key={i} />;
    });

  return (
    <>
      <Header />
      <select
        name={"filter_dreams"}
        onChange={e => setFilterDreams(e.target.value)}
      >
        <option value="all">All Dreams</option>
        <option value="month">From this Month</option>
        <option value="year">From this Year</option>
      </select>
      <section className="allDreams">
        {filterDreams === "year"
          ? currentYearDreams
          : filterDreams === "month"
          ? currentMonthDreams
          : allDreams}
        <Modal data={dreams} />
      </section>
    </>
  );
}

export default Dreamlog;
