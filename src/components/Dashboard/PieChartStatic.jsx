import React from "react";
import Highcharts from "highcharts";

class PieChartStatic extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {
			series: [
				{
					name: "Assets( % )",
					data: [
						{
							name: " ",
							y: 100,
							color: "#E3E3E3",
						},
				
					],
				},
			],
		};
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
        style={{ maxHeight: 365, zIndex: "10 !important" }}
      />
    )
	}
}

export default PieChartStatic;
