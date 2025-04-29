import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const Chart = ({ budgets }) => {
  const [state, setState] = useState({
    series: [50, 750, 75, 100],
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Entertaiment", "Bills", "Dining Out", "Personal Care"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div style={{ width: "400px" }}>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
