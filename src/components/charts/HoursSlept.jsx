import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Line } from "react-chartjs-2";
import { Context } from "../../Context";

function HoursSlept() {
  const { dreams, filteredDreams, getAllDreams, dreamFilter } = useContext(
    Context
  );

  useEffect(() => {
    getAllDreams();
  }, []);

  function filterData(param, data) {
    return param === "year"
      ? thisYearDreams(data)
      : param === "month"
      ? thisMonthDreams(data)
      : alldreams(data);
  }
  const chardata = {
    labels: [],
    hours: []
  };
  function alldreams(dreams) {
    chardata.labels = [];
    chardata.hours = [];
    dreams.map(dream => {
      chardata.labels.push(dream.dream_date);
      chardata.hours.push(parseInt(dream.hours_slept));
    });
    return chardata;
  }

  function thisYearDreams(dreams) {
    chardata.labels = [];
    chardata.hours = [];
    filteredDreams.year.map(dream => {
      chardata.labels.push(dream.dream_date);
      chardata.hours.push(parseInt(dream.hours_slept));
    });
    return chardata;
  }

  function thisMonthDreams(dreams) {
    chardata.labels = [];
    chardata.hours = [];
    filteredDreams.month.map(dream => {
      chardata.labels.push(dream.dream_date);
      chardata.hours.push(parseInt(dream.hours_slept));
    });
    return chardata;
  }

  const charData = {
    labels: filterData(dreamFilter, dreams).labels,
    datasets: [
      {
        label: "Sleeping schedule",
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        lineTension: 0.05,
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 30,
        data: filterData(dreamFilter, dreams).hours,
        backgroundColor: ["rgb(250, 139, 255)"]
      }
    ]
  };

  const averageHours =
    chardata.hours.reduce((acc, cv) => {
      return acc + cv;
    }, 0) / chardata.hours.length;

  return (
    <div>
      <h1>{averageHours.toFixed(1)} h</h1>
      <Line data={charData}></Line>
    </div>
  );
}

export default HoursSlept;
