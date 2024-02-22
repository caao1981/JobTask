import dynamic from "next/dynamic";
import React from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ChartComponent = ({ chartType, width, height }) => {
  const series = [44, 55, 13, 43];
  const options = {
    chart: {
      width: width,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D"],
    colors: ["#92198C", "#2A3249", "#6C92FF", "#FFC4FC"],
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
  };

  return (
    <div id="chart">
      <ReactApexChart
        width={width}
        options={options}
        series={series}
        type="pie"
      />
    </div>
  );
};

ChartComponent.defaultProps = {
  width: "100%",
};

export default ChartComponent;
