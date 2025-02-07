import { useState } from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

export default function LineChart() {
  const options = {
    title: {
      text: "<strong style='color:green'>Growth of Mythic Blueprint</strong><br/> [ Server : Aok ]",
    },

    accessibility: {
      point: {
        valueDescriptionFormat: "{xDescription}{separator}{value} million(s)",
      },
    },

    xAxis: {
      title: {
        text: "Year",
      },
      categories: [
        "mar/24",
        "may/24",
        "jul/24",
        "sep/24",
        "nov/24",
        "jan/25",
        "mar/25",
      ],
    },

    yAxis: {
      type: "logarithmic",
      title: {
        text: "Value (in gold)",
      },
    },

    tooltip: {
      headerFormat: "<b>{series.name}</b><br />",
      pointFormat: "{point.y} gold",
    },

    series: [
      {
        name: "Mythic Blueprint",
        keys: ["y", "color"],
        data: [
          [9855000, "#0000ff"],
          [13155850, "#8d0073"],
          [11855000, "#ba0046"],
          [13155850, "#d60028"],
          [14855750, "#eb0014"],
          [12855000, "#fb0004"],
          [13855750, "#ff0000"],
        ],

        color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 1,
            y2: 0,
          },
          stops: [
            [0, "#0000ff"],
            [1, "#ff0000"],
          ],
        },
      },
    ],
  }
  //   const options = {
  //     title: {
  //       text: "My chart",
  //     },
  //     series: [
  //       {
  //         data: [1, 2, 3],
  //       },
  //     ],
  //   }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
