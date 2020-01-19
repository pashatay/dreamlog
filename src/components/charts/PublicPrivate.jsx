import React, { useEffect, useContext } from "react";
import { Pie } from "react-chartjs-2";
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
      return dream.is_private ? chardata.private++ : chardata.public++;
    });
    return [chardata.public, chardata.private];
  }

  function thisYearDreams(dreams) {
    filteredDreams.year.map(dream => {
      return dream.is_private ? chardata.private++ : chardata.public++;
    });
    return [chardata.public, chardata.private];
  }

  function thisMonthDreams(dreams) {
    filteredDreams.month.map(dream => {
      return dream.is_private ? chardata.private++ : chardata.public++;
    });
    return [chardata.public, chardata.private];
  }
  const charData = {
    labels: ["public", "private"],

    datasets: [
      {
        label: "Public/ Private",
        data: filterData(dreamFilter, dreams),
        backgroundColor: ["rgb(43, 210, 255)", "rgba(184, 192, 199, 0.918)"],
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
      <h3>Private/Public Dreams rate:</h3>
      <Pie data={charData} options={options}></Pie>
    </div>
  );
}

export default PublicPrivate;
