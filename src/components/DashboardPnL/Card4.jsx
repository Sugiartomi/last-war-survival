import { CaretUpFill } from "react-bootstrap-icons";
import Sparklines from "../Reusble/SparkLine";

export default function Card4({ visibility }) {
	return (
		<>
			<div className="row p-1">
				<div className="col-6">
					<div className="card h-100 p-4">
						<div className="row">
							<div className="col-6">
								<div className="d-flex">
									<div
										className="rounded d-flex justify-content-center align-items-center"
										style={{
											width: 42,
											height: 42,
											backgroundColor: "#DFF1FF",
										}}
									>
										<img
											src="https://assets.digitalexchange.id/coin/ETH.png"
											style={{ width: 25, height: 25 }}
											alt=""
										/>
									</div>
									<div>
										<div className="font-roboto fw-700 fs-16 ms-3 mt-1">
											ETH / IDR
										</div>
										<div className="font-roboto fw-400 fs-14 ms-3">
											Ethereum
										</div>
									</div>
								</div>
								<div className="font-roboto fw-700 fs-16 mt-4">Rp25.587.000</div>
							</div>
							<div className="col-6">
								<Sparklines
									dataArr={[
										76, 23, 7, 12, 86, 35, 99, 34, 22, 56, 22, 1, 99, 56, 2, 44,
										6, 2, 67, 130, 2, 5,
									]}
									color={"blue"}
								/>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-4">
								<div className="fw-400">PnL Daily</div>
							</div>

							{visibility ? (
								<div className="col-4">
									<div className="fw-400 text-success">+$189.91</div>
								</div>
							) : (
								<div className="col-4">
									<div className="font-roboto fw-700 fs-16">$********</div>
								</div>
							)}

							<div className="col-4">
								<span
									className="text-success fs-14 p-1 rounded ms-2"
									style={{ backgroundColor: "#E8FFEB" }}
								>
									<CaretUpFill className="fs-12" /> 24.16%
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="card h-100 p-4">
						<div className="row">
							<div className="col-6">
								<div className="d-flex">
									<div
										className="rounded d-flex justify-content-center align-items-center"
										style={{
											width: 42,
											height: 42,
											backgroundColor: "#DFF1FF",
										}}
									>
										<img
											src="https://assets.digitalexchange.id/coin/ETH.png"
											style={{ width: 25, height: 25 }}
											alt=""
										/>
									</div>
									<div>
										<div className="font-roboto fw-700 fs-16 ms-3 mt-1">
											ETH / USDT
										</div>
										<div className="font-roboto fw-400 fs-14 ms-3">
											Ethereum
										</div>
									</div>
								</div>
								<div className="font-roboto fw-700 fs-16 mt-4">$ 1.500</div>
							</div>
							<div className="col-6 text white">
								<Sparklines
									dataArr={[
										3, 78, 23, 6, 23, 11, 7, 4, 85, 3, 78, 23, 6, 23, 11, 7, 4,
										85, 66, 55, 65, 99, 30,
									]}
									color={"red"}
								/>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-4">
								<div className="fw-400">PnL Daily</div>
							</div>
							{visibility ? (
								<div className="col-4">
									<div className="fw-400 text-success">+$556.14</div>
								</div>
							) : (
								<div className="col-4">
									<div className="font-roboto fw-700 fs-16">$********</div>
								</div>
							)}
							<div className="col-4">
								<span
									className="text-success fs-14 p-1 rounded ms-2"
									style={{ backgroundColor: "#E8FFEB" }}
								>
									<CaretUpFill className="fs-12" /> 64.11%
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row p-1 mt-3">
				<div className="col-6">
					<div className="card h-100 p-4">
						<div className="row">
							<div className="col-6">
								<div className="d-flex">
									<div
										className="rounded d-flex justify-content-center align-items-center"
										style={{
											width: 42,
											height: 42,
											backgroundColor: "#F7EEE3",
										}}
									>
										<img
											src="https://assets.digitalexchange.id/coin/BTC.png"
											style={{ width: 25, height: 25 }}
											alt=""
										/>
									</div>
									<div>
										<div className="font-roboto fw-700 fs-16 ms-3 mt-1">
											BTC / IDR
										</div>
										<div className="font-roboto fw-400 fs-14 ms-3">Bitcoin</div>
									</div>
								</div>
								<div className="font-roboto fw-700 fs-16 mt-4">Rp342.020.777</div>
							</div>
							<div className="col-6 text white">
								<Sparklines
									dataArr={[
										33, 38, 33, 36, 3, 31, 37, 34, 35, 33, 38, 33, 36, 33, 31,
										37, 34, 35, 36, 35, 35, 39, 30,
									]}
									color={"green"}
								/>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-4">
								<div className="fw-400">PnL Daily</div>
							</div>

							{visibility ? (
								<div className="col-4">
									<div className="fw-400 text-danger">-$16.78</div>
								</div>
							) : (
								<div className="col-4">
									<div className="font-roboto fw-700 fs-16">$********</div>
								</div>
							)}
							<div className="col-4">
								<span
									className="text-success fs-14 p-1 rounded ms-2"
									style={{ backgroundColor: "#E8FFEB" }}
								>
									<CaretUpFill className="fs-12" /> 24.16%
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="card h-100 p-4">
						<div className="row">
							<div className="col-6">
								<div className="d-flex">
									<div
										className="rounded d-flex justify-content-center align-items-center"
										style={{
											width: 42,
											height: 42,
											backgroundColor: "#F7EEE3",
										}}
									>
										<img
											src="https://assets.digitalexchange.id/coin/BTC.png"
											style={{ width: 25, height: 25 }}
											alt=""
										/>
									</div>
									<div>
										<div className="font-roboto fw-700 fs-16 ms-3 mt-1">
											BTC / USDT
										</div>
										<div className="font-roboto fw-400 fs-14 ms-3">
											Ethereum
										</div>
									</div>
								</div>
								<div className="font-roboto fw-700 fs-16 mt-4">$ 22.840</div>
							</div>
							<div className="col-6 text white">
								<Sparklines
									dataArr={[
										83, 78, 93, 76, 83, 91, 77, 84, 85, 93, 78, 73, 86, 93, 71,
										87, 94, 85, 66, 75, 85, 99, 70,
									]}
									color={"black"}
								/>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-4">
								<div className="fw-400">PnL Daily</div>
							</div>

							{visibility ? (
								<div className="col-4">
									<div className="fw-400 text-success">+$25.78</div>
								</div>
							) : (
								<div className="col-4">
									<div className="font-roboto fw-700 fs-16">$********</div>
								</div>
							)}
							<div className="col-4">
								<span
									className="text-success fs-14 p-1 rounded ms-2"
									style={{ backgroundColor: "#E8FFEB" }}
								>
									<CaretUpFill className="fs-12" /> +14.67%
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
