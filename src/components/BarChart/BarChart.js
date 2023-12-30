import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = ({ totalUsers }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let myChart = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy the existing chart if it exists
      if (myChart) {
        myChart.destroy();
      }

      myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Dashboard"],
          datasets: [
            {
              label: "Users",
              data: [totalUsers],
              backgroundColor: ["rgba(75, 192, 192, 0.2)"],
              borderColor: ["#000"],
              borderWidth: 2,
            },
            {
              label: "Categories",
              data: [30],
              backgroundColor: ["blue"],
              borderColor: ["#000"],
              borderWidth: 2,
            },
            {
              label: "Prodcuts",
              data: [15],
              backgroundColor: ["red"],
              borderColor: ["#000"],
              borderWidth: 2,
            },
            {
              label: "Orders",
              data: [20],
              backgroundColor: ["green"],
              borderColor: ["#000"],
              borderWidth: 2,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [totalUsers]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
