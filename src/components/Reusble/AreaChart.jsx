import React from "react";
import Highcharts from "highcharts";

class AreaChart extends React.Component {
	highChartsRender() {
		Highcharts.chart({
			chart: {
				type: "area",
				renderTo: "atmospheric-composition-1",
			},
			accessibility: {
				description:
					"Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.",
			},
			title: {
				text: " ",
			},
			subtitle: {
				// 	text:
				// 		'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
				// 		'target="_blank">FAS</a>',
			},
			xAxis: {
				allowDecimals: false,
				labels: {
					formatter: function () {
						return this.value; // clean, unformatted number for year
					},
				},
				accessibility: {
					rangeDescription: "Range: 1940 to 2017.",
				},
			},
			yAxis: {
				title: {
					// text: "Your Assets",
					text: "",
				},
				labels: {
					formatter: function () {
						return this.value / 1000 + "k";
					},
				},
			},
			tooltip: {
				pointFormat:
					"{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}",
			},

			credits: {
				enabled: false,
			},
			plotOptions: {
				area: {
					// pointStart: 1940,
					marker: {
						enabled: false,
						symbol: "circle",
						radius: 2,
						states: {
							hover: {
								enabled: true,
							},
						},
					},
				},
			},
			series: [
				{
					name: "Balance",
					data: [
						200, 900, 1300, 5000, 17000, 29900, 43800, 84100, 116900, 170300, 242200,
						369200, 554300, 734500, 1229800, 1863800, 2222900, 2554000, 2813300,
						2946300, 3113900, 3117500, 3125500, 2956100, 2755200, 2320500, 2813300,
						2946300, 3113900, 3117500, 3125500, 3956100,
					],
				},
				// {
				//     name: 'USSR/Russia',
				//     data: [null, null, null, null, null, null, null, null, null,
				//         1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
				//         3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
				//         14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
				//         32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
				//         32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
				//         13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
				//         5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
				//         4310, 4495, 4477
				//     ]
				// }
			],
		});
	}

	componentDidMount() {
		this.highChartsRender();
	}

	render() {
		return (
			<div id="atmospheric-composition-1" className="p-0 m-0" style={{ height: "200px" }} />
		);
	}
}

export default AreaChart;
