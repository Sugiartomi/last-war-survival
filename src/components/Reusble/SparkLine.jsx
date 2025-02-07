import React from "react";
import { Sparklines, SparklinesLine, SparklinesCurve } from "react-sparklines";
export default function Test({dataArr, color}) {
	return (
		<>
			<Sparklines data={dataArr} limit={25} width={200} height={100} margin={5}>
				<SparklinesCurve color={color} style={{ strokeWidth : 2, fill : "none"}}/>
			</Sparklines>
		</>
	);
}
