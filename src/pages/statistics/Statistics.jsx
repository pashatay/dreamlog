import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import "./styles.css";
import DreamTypes from "../../components/charts/DreamTypes";
import HoursSlept from "../../components/charts/HoursSlept";
import Header from "../../components/header/Header";
import HoursPerDreamType from "../../components/charts/HoursPerDreamType";
import PublicPrivate from "../../components/charts/PublicPrivate";

function Statistics() {
  const { setDreamFilter, redirectToLoginPage } = useContext(Context);
  useEffect(() => {
    setDreamFilter("all");
  }, []);

  return (
    <>
      {redirectToLoginPage()}
      <Header />
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
    </>
  );
}

export default Statistics;
