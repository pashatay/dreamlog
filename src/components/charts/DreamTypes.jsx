import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Doughnut } from "react-chartjs-2";
import { Context } from "../../Context";

function DreamTypes() {
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
  function alldreams(dreams) {
    let lucid = 0;
    let normal = 0;
    let nightmare = 0;
    dreams.map(dream => {
      dream.dream_type === "Lucid"
        ? lucid++
        : dream.dream_type === "Normal"
        ? normal++
        : nightmare++;
    });
    let array = [lucid, normal, nightmare];
    return array;
  }

  function thisYearDreams(dreams) {
    let lucid = 0;
    let normal = 0;
    let nightmare = 0;
    filteredDreams.year.map(dream => {
      dream.dream_type === "Lucid"
        ? lucid++
        : dream.dream_type === "Normal"
        ? normal++
        : nightmare++;
    });
    let array = [lucid, normal, nightmare];
    return array;
  }

  function thisMonthDreams(dreams) {
    let lucid = 0;
    let normal = 0;
    let nightmare = 0;
    filteredDreams.month.map(dream => {
      dream.dream_type === "Lucid"
        ? lucid++
        : dream.dream_type === "Normal"
        ? normal++
        : nightmare++;
    });
    let array = [lucid, normal, nightmare];
    return array;
  }
  const charData = {
    labels: ["Lucid", "Normal", "Nightmare"],
    datasets: [
      {
        label: "type of dreams",
        data: filterData(dreamFilter, dreams),
        backgroundColor: [
          "rgb(250, 139, 255)",
          "rgb(54, 162, 235)",
          "rgb(255, 206, 86)"
        ]
      }
    ]
  };

  return (
    <div>
      <Doughnut data={charData}></Doughnut>
    </div>
  );
}

export default DreamTypes;
