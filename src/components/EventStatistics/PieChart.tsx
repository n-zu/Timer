import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, ChartData } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getEventType } from "../../events/events";
import { EventTypeData } from "../../events/types";

ChartJS.register(ArcElement, Tooltip);

// export const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
//};

type Data = {
  type: number;
  duration: number; // minutes
};
type EnrichedData = {
  type: number;
  duration: number; // minutes
  typeData: EventTypeData;
};

const processData = (
  data: EnrichedData[]
): ChartData<"pie", number[], unknown> => {
  return {
    labels: data.map((d) => d.typeData.type),
    datasets: [
      {
        label: "Minutes Spent",
        data: data.map((d) => d.duration),
        backgroundColor: data.map((d) => `hsl(${d.typeData.hue},70%,70%)`),
        borderColor: data.map((d) => `hsl(${d.typeData.hue},80%,60%)`),
      },
    ],
  };
};

type CustomPieChartProps = {
  data: Data[];
};

const CustomPieChart = ({ data }: CustomPieChartProps) => {
  const enriched_data = data.map((d) => ({
    ...d,
    typeData: getEventType(d.type),
  }));
  const process_data = processData(enriched_data);

  return <Pie data={process_data} />;
};

export default CustomPieChart;
