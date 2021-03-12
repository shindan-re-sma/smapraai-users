import React from "react";
import { Line } from "react-chartjs-2";
import freamarkets from "../assets/files/freamarkets";
import "../assets/css/LineChart.css";

const formatDate = (dt) => {
  var m = ("00" + (dt.getMonth() + 1)).slice(-2);
  var d = ("00" + dt.getDate()).slice(-2);
  return m + "-" + d;
};

const Graph = ({ title, graphData }) => {
  //実績と予測の切り替わり点
  const switchIndex = graphData.labels.findIndex((label) => {
    return new Date(label) > new Date();
  });

  //実績データを取得
  const pastDataset = () => {
    if (graphData.labels.length > 0) {
      const pastValues = graphData.data.map((data) => {
        const values = data.values.map((value, idx) => {
          if (idx > switchIndex - 1) {
            return null;
          }
          return parseInt(value);
        });
        return {
          label: freamarkets[data.data_type].label,
          borderColor: freamarkets[data.data_type].color,
          pointBorderWidth: 1,
          fill: false,
          data: values,
        };
      });
      return pastValues;
    }
    return [];
  };

  //予測データを取得
  const futureDataset = () => {
    if (graphData.labels.length > 0) {
      const futureValues = graphData.data.map((data) => {
        const values = data.values.map((value, idx) => {
          if (idx >= switchIndex - 1) {
            return parseInt(value);
          }
          return null;
        });
        return {
          label: "予測" + freamarkets[data.data_type].label,
          borderColor: freamarkets[data.data_type].color,
          pointBorderWidth: 1,
          borderDash: [5, 5],
          fill: false,
          data: values,
        };
      });
      return futureValues;
    }
    return [];
  };

  //折れ線グラフの定義
  const LineGraph = () => {
    return (
      <Line
        data={{
          labels: graphData.labels.map((date) => formatDate(new Date(date))),
          datasets: [...pastDataset(), ...futureDataset()],
        }}
        options={{
          title: {
            //見出し
            display: true,
            text: title,
            padding: 1,
            fontSize: 24,
          },
          legend: {
            display: true,
            labels: {
              filter: (items, chartData) => {
                return !items.text.match("予測");
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    );
  };

  return (
    <div>
      <div className="ui stackable grid">
        <div className="sixteen wide column">
          <div className="wrap-chart">{LineGraph()}</div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
