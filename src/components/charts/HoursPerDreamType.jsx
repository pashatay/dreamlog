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
        fill: false,
        label: "Median hours",
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
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "rgb(235, 235, 245)",
            padding: 20
          },

          gridLines: {
            drawTicks: false,
            display: false,
            color: "rgb(235, 235, 245)"
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "rgb(235, 235, 245)"
          }
        }
      ]
    }
  };

  return (
    <div>
      <h3>Average sleeping hours per Dream Type:</h3>
      <Bar data={charData} options={options}></Bar>
    </div>
  );
}

export default HoursPerDreamType;
