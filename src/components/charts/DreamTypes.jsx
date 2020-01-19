import React, { useEffect, useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Context } from "../../Context";

import "./styles.css";

function DreamTypes() {
  const { dreams, filteredDreams, getAllDreams, dreamFilter } = useContext(
    Context
  );

  useEffect(() => {
    getAllDreams();
  }, []);
  let array = [];

  function filterData(param, data) {
    return param === "year"
      ? thisYearDreams(data)
      : param === "month"
      ? thisMonthDreams(data)
      : alldreams(data);
  }
  function totalDreams() {
    return dreamFilter === "year"
      ? filteredDreams.year.length
      : dreamFilter === "month"
      ? filteredDreams.month.length
      : dreams.length;
  }

  function alldreams(dreams) {
    let lucid = 0;
    let normal = 0;
    let nightmare = 0;
    dreams.map(dream => {
      return dream.dream_type === "Lucid"
        ? lucid++
        : dream.dream_type === "Normal"
        ? normal++
        : nightmare++;
    });
    array = [lucid, normal, nightmare];
    return array;
  }

  function thisYearDreams(dreams) {
    let lucid = 0;
    let normal = 0;
    let nightmare = 0;
    filteredDreams.year.map(dream => {
      return dream.dream_type === "Lucid"
        ? lucid++
        : dream.dream_type === "Normal"
        ? normal++
        : nightmare++;
    });
    array = [lucid, normal, nightmare];
    return array;
  }

  function thisMonthDreams(dreams) {
    let lucid = 0;
    let normal = 0;
    let nightmare = 0;
    filteredDreams.month.map(dream => {
      return dream.dream_type === "Lucid"
        ? lucid++
        : dream.dream_type === "Normal"
        ? normal++
        : nightmare++;
    });
    array = [lucid, normal, nightmare];
    return array;
  }
  const charData = {
    labels: ["Lucid", "Normal", "Nightmare"],
    datasets: [
      {
        label: "type of dreams",
        data: filterData(dreamFilter, dreams),
        backgroundColor: [
          "rgba(249, 139, 255, 0.925)",
          "rgba(184, 192, 199, 0.918)",
          "rgba(111, 0, 0, 0.904)"
        ],
        borderColor: "rgb(235, 235, 245)",
        borderWidth: 0,
        hoverBorderWidth: 4
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            display: false
          }
        }
      ]
    },
    legend: {
      display: true,
      labels: {
        fontColor: "rgb(235, 235, 245)",
        fontSize: 16,
        fontFamily: "Fjalla One",
        padding: 30
      },
      position: "left"
    }
  };
  return (
    <div>
      <h3 className="total-dreams">
        Total: {totalDreams()} <i className="ri-moon-clear-fill"></i> dreams.
      </h3>
      <Doughnut data={charData} options={options}></Doughnut>
    </div>
  );
}

export default DreamTypes;
