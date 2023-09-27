import React, {  useEffect, useRef } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { dataPoints } from "./data";


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function CandleStick() {
    
  const options = {
    theme: "light1",
    animationEnabled: true,
    exportEnabled: true,
    backgroundColor: "var(--gradient-bg-color-div)",
    axisX: {
      valueFormatString: "DD DDD MMM",
      crosshair: {
        enabled: true,
        color: "#000",
        labelFontColor: "#F8F8F8",
        valueFormatString: "DDD DD MMM YYYY HH:mm:ss TT",
      },
    },
    axisY: {
      prefix: "$",
      gridThickness: 1,
      gridColor: "#b4b2b8",
      crosshair: {
        enabled: true,
        color: "#000",
        labelFontColor: "#F8F8F8",
        valueFormatString: "$###0.00",
      },
    },
    legend: {
      markerMargin: 8,
    },
    toolTip: {
      cornerRadius: 4,
      shared: true,
    },
    rangeSelector: {
        enabled: true, 
      },
      zoomEnabled: true,
    data: [
      {
        type: "candlestick",
        fallingColor: "rgba(227,84,97, .9)",
        risingColor: "rgba(93,200,135, .9)",
        yValueFormatString: "$###0.00",
        xValueType: "dateTime",
        lineThickness: 0,
        dataPoints: dataPoints ,
      },
    ],
  };

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current.chart;
      chart.render();
    }
  }, []);
  if (!dataPoints || !Array.isArray(dataPoints)) {
    return <div>Error: Invalid dataPoints</div>;
  }

  return (
    <div>
      <CanvasJSChart options={options} ref={chartRef} />
    </div>
  );
}

export default CandleStick;
