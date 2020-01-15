import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Doughnut } from "react-chartjs-2";
import { Context } from "../../Context";

function PublicPrivate() {
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
    public: 0,
    private: 0
  };
  function alldreams(dreams) {
    dreams.map(dream => {
      dream.is_private ? chardata.private++ : chardata.public++;
    });
    return [chardata.public, chardata.private];
  }

  function thisYearDreams(dreams) {
    filteredDreams.year.map(dream => {
      dream.is_private ? chardata.private++ : chardata.public++;
    });
    return [chardata.public, chardata.private];
  }

  function thisMonthDreams(dreams) {
    filteredDreams.month.map(dream => {
      dream.is_private ? chardata.private++ : chardata.public++;
    });
    return [chardata.public, chardata.private];
  }
  const charData = {
    labels: ["public", "private"],

    datasets: [
      {
        label: "Public/ Private",
        data: filterData(dreamFilter, dreams),
        backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 206, 86)"]
      }
    ]
  };

  return (
    <div>
      <Doughnut data={charData}></Doughnut>
    </div>
  );
}

export default PublicPrivate;
