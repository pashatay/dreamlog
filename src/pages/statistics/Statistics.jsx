import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import "./styles.css";
import DreamTypes from "../../components/charts/DreamTypes";
import HoursSlept from "../../components/charts/HoursSlept";
import Header from "../../components/header/Header";
import HoursPerDreamType from "../../components/charts/HoursPerDreamType";
import PublicPrivate from "../../components/charts/PublicPrivate";
import WaterMark from "../../components/watermark/WaterMark";

function Statistics() {
  const {
    dreams,
    getAllDreams,
    setDreamFilter,
    redirectToLoginPage,
    setGoBackButton
  } = useContext(Context);

  useEffect(() => {
    getAllDreams();
    setDreamFilter("all");
    setGoBackButton(true);
  }, []);

  const noDreams = (
    <h1 className="no-dreams">Not enough dreams to display statistics.</h1>
  );
  const displayDreams = (
    <>
      <section className="statistics-filter">
        <h3>Your Statistics from: </h3>
        <select
          name={"filter_dreams_statistics"}
          onChange={e => setDreamFilter(e.target.value)}
        >
          <option value="all">all dreams</option>
          <option value="month">this Month</option>
          <option value="year">this Year</option>
        </select>
      </section>
      <section className="charts">
        <DreamTypes />
        <HoursSlept />
        <HoursPerDreamType />
        <PublicPrivate />
      </section>
      <WaterMark />
    </>
  );
  return (
    <>
      {redirectToLoginPage()}
      <Header />
      {dreams.length < 1 ? noDreams : displayDreams}
    </>
  );
}

export default Statistics;
