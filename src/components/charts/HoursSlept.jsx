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

  const charData = canvas => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(400, 0, 40, 0);
    gradient.addColorStop(0, "#fa8bff");
    gradient.addColorStop(1, "#2bd2ff");
    gradient.addColorStop(1, "#2bff88");
    return {
      labels: filterData(dreamFilter, dreams).labels,
      datasets: [
        {
          label: "Slept hours",
          fill: false,
          borderColor: gradient,
          pointBorderColor: "rgb(235, 235, 245)",
          pointBackgroundColor: gradient,
          borderWidth: 5,
          pointBorderWidth: 5,
          pointHoverRadius: 7,
          pointHoverBackgroundColor: gradient,
          pointHoverBorderColor: "rgb(235, 235, 245)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 30,
          data: filterData(dreamFilter, dreams).hours
        }
      ]
    };
  };
  const options = {
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
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

  const averageHours = hours => {
    return (
      hours.reduce((acc, cv) => {
        return acc + cv;
      }, 0) / hours.length
    );
  };

  return (
    <div>
      <h3>
        Average sleeping hours:
        <span>
          {averageHours(filterData(dreamFilter, dreams).hours).toFixed(1)}
        </span>
      </h3>
      <Line data={charData} options={options}></Line>
    </div>
  );
}

export default HoursSlept;
