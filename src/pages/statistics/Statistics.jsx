import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import "./styles.css";
import DreamTypes from "../../components/charts/DreamTypes";
import HoursSlept from "../../components/charts/HoursSlept";
import Header from "../../components/header/Header";
import HoursPerDreamType from "../../components/charts/HoursPerDreamType";
import PublicPrivate from "../../components/charts/PublicPrivate";

function Statistics() {
  const { setDreamFilter } = useContext(Context);
  useEffect(() => {
    setDreamFilter("all");
  }, []);

  return (
    <div>
      <Header />
      <select
        name={"filter_dreams_statistics"}
        onChange={e => setDreamFilter(e.target.value)}
      >
        <option value="all">All Dreams</option>
        <option value="month">From this Month</option>
        <option value="year">From this Year</option>
      </select>
      <h3>Statistics</h3>
      <DreamTypes />
      <HoursSlept />
      <HoursPerDreamType />
      <PublicPrivate />
    </div>
  );
}

export default Statistics;
