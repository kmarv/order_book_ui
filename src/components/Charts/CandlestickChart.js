import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS } from "chart.js/auto";
import { DateTime } from 'luxon';

const CandlestickChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Define your candlestick data with time-based labels
    const candlestickData = [
      { t: '2023-09-01', o: 100, h: 150, l: 90, c: 120 },
      { t: '2023-09-02', o: 120, h: 160, l: 110, c: 140 },
      // Add more data points with valid time values as strings
    ];

    // Format the time values using Luxon
    const formattedData = candlestickData.map(item => ({
      t: DateTime.fromISO(item.t).toJSDate(),
      o: item.o,
      h: item.h,
      l: item.l,
      c: item.c,
    }));

    // Create a data object
    const data = {
      labels: formattedData.map(item => item.t.toISOString()),
      datasets: [
        {
          label: 'Candlestick Chart',
          data: formattedData,
          borderColor: 'blue',
          borderWidth: 2,
        },
      ],
    };

    // Create chart options with a time scale for the x-axis
    const options = {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day', // You can customize the time unit (day, month, year, etc.)
            displayFormats: {
              day: 'YYYY-MM-DD', // Customize the display format
            },
            tooltipFormat: 'll', // Customize the tooltip date format
          },
          title: {
            display: true,
            text: 'Date',
          },
        },
        // Other scale configurations as needed
      },
      plugins: {
        title: {
          display: true,
          text: 'Candlestick Chart',
        },
        legend: {
          display: false,
        },
      },
    };

    const ctx = chartRef.current.getContext('2d');
     // Destroy the previous instance of the chart if it exists
     if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }
    chartRef.current.chart = new ChartJS(ctx, {
      type: 'candlestick',
      data: data,
      options: options,
    });
  }, []);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default CandlestickChart;
