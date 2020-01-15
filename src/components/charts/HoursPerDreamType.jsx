import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";
import { Context } from "../../Context";

function HoursPerDreamType() {
  const { dreams, filteredDreams, getAllDreams, dreamFilter } = useContext(
    Context
  );

  useEffect(() => {
    getAllDreams();
  }, []);

  const chardata = {
    lucid: { totalHours: 0, times: 0 },
    normal: { totalHours: 0, times: 0 },
    nightmare: { totalHours: 0, times: 0 }
  };

  //   const defaultValues = { totalHours: 0, times: 0 };

  //   const clearCharData = () => {
  //     chardata.lucid = defaultValues;
  //     chardata.normal = defaultValues;
  //     chardata.nightmare = defaultValues;
  //   };

  const fillOutCharData = dream => {
    const type = dream.dream_type;
    const hours = parseInt(dream.hours_slept);
    return type === "Lucid"
      ? ((chardata.lucid.totalHours += hours), chardata.lucid.times++)
      : type === "Normal"
      ? ((chardata.normal.totalHours += hours), chardata.normal.times++)
      : ((chardata.nightmare.totalHours += hours), chardata.nightmare.times++);
  };

  const countAveragehours = () => {
    const lucid = chardata.lucid.totalHours / chardata.lucid.times;
    const normal = chardata.normal.totalHours / chardata.normal.times;
    const nightmare = chardata.nightmare.totalHours / chardata.nightmare.times;
    const array = [lucid, normal, nightmare];
    return array.map(x => x.toFixed(1));
  };

  function filterData(param, data) {
    return param === "year"
      ? thisYearDreams(data)
      : param === "month"
      ? thisMonthDreams(data)
      : alldreams(data);
  }

  function alldreams(dreams) {
    dreams.map(dream => {
      fillOutCharData(dream);
    });
    return countAveragehours();
  }

  function thisYearDreams(dreams) {
    filteredDreams.year.map(dream => {
      fillOutCharData(dream);
    });
    return countAveragehours();
  }

  function thisMonthDreams(dreams) {
    filteredDreams.month.map(dream => {
      fillOutCharData(dream);
    });
    return countAveragehours();
  }

  const charData = {
    labels: ["Lucid", "Normal", "Nightmare"],
    datasets: [
      {
        label: "Average sleep type per dream type",
        data: filterData(dreamFilter, dreams),
        backgroundColor: [
          "rgb(255, 206, 86)",
          "rgb(250, 139, 255)",
          "rgb(54, 162, 235)",
          "rgb(255, 206, 86)"
        ],
        borderColor: "rgba(0,0,0,1)",
        width: 2
      }
    ]
  };

  return (
    <div>
      <Bar
        data={charData}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  display: false
                }
              }
            ]
          },
          legend: {
            display: false
          }
        }}
      ></Bar>
    </div>
  );
}

export default HoursPerDreamType;
