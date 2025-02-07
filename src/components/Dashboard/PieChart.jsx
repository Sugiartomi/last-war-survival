import React from "react";
import Highcharts from "highcharts";

class PieChart extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {
      series: [
        {
          name: "Game Material",
          data: [
            {
              name: "SA16",
              y: 752000,
              color: "#5cb85c",
            },
            {
              name: "LBP",
              y: 390000,
              color: "#f0ad4e",
            },
            {
              name: "DP2",
              y: 88750,
              color: "#0275d8",
            },
          ],
        },
      ],
    }
	}

	highChartsRender() {
		Highcharts.chart({
      chart: {
        type: "pie",
        renderTo: "atmospheric-composition-1",
        style: {
          objectFit: "cover",
          height: "600px",
          margin: "-60px 0 -60px 0",
          padding: "0px",
          width: "100%",
        },
      },
      credits: {
        enabled: false,
      },
      title: {
        verticalAlign: "middle",
        floating: true,
        text: " ",
        style: {
          fontSize: "12px",
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            // format: "{point.name}",
            enabled: false,
          },
          innerSize: "70%",
        },
      },
      series: this.state.series,
    })
	}

	componentDidMount() {
		this.highChartsRender();
	}

	render() {
		return (
      <div
        id="atmospheric-composition-1"
        className="p-0 m-0 "
        style={{ maxHeight: 365 }}
      />
    )
	}
}

export default PieChart;
