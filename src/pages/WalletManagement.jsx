import { useState } from "react";
import { ExclamationDiamondFill, InfoCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Reusble/Footer";
import NavbarTrue from "../components/Reusble/NavbarTrue";
import UnlinkModal from "../components/WalletManagement/UnlinkModal";

export default function WalletManagement() {
	const [loadingCoin, setLoadingCoin] = useState(false);
	const navigate = useNavigate()
	const dataCoin = [
		{
			img: "https://assets.digitalexchange.id/coin/BTC.png",
			assetsName: "Bitcoin",
			symbol: "BTC",
			last_price: "Rp 4,386,891",
			percentage_24h: "+35,74%",
		},
		{
			img: "https://assets.digitalexchange.id/coin/BTC.png",
			assetsName: "Bitcoin",
			symbol: "BTC",
			last_price: "Rp 4,386,891",
			percentage_24h: "+35,74%",
		},
		{
			img: "https://assets.digitalexchange.id/coin/BTC.png",
			assetsName: "Bitcoin",
			symbol: "BTC",
			last_price: "Rp 4,386,891",
			percentage_24h: "+35,74%",
		},
		{
			img: "https://assets.digitalexchange.id/coin/BTC.png",
			assetsName: "Bitcoin",
			symbol: "BTC",
			last_price: "Rp 4,386,891",
			percentage_24h: "+35,74%",
		},
		{
			img: "https://assets.digitalexchange.id/coin/BTC.png",
			assetsName: "Bitcoin",
			symbol: "BTC",
			last_price: "Rp 4,386,891",
			percentage_24h: "+35,74%",
		},
		{
			img: "https://assets.digitalexchange.id/coin/BTC.png",
			assetsName: "Bitcoin",
			symbol: "BTC",
			last_price: "Rp 4,386,891",
			percentage_24h: "+35,74%",
		},
	];
	return (
		<>
			<NavbarTrue />
			<div className="container-fluid" style={{ padding: "24px 72px 0px" }}>
				<div className="d-flex">
					<div className="font-roboto fw-700" style={{ fontSize: 24 }}>
						Wallet Management
					</div>
					<div
						className="px-3 py-2 rounded font-inter fs-16 fw-600 ms-3 text-white"
						style={{ backgroundColor: "#22B99A" }}
					>
						Status Wallet : Connect
					</div>
				</div>
				<div className="row mt-4 d-flex justify-content-between">
					<div className="col-8" style={{ backgroundColor: "rgb(0,0,255,0.09)" }}>
						<div className="row py-4">
							<div className="col-1 text-center">
								<InfoCircleFill className="text-primary" style={{ fontSize: 20 }} />
							</div>
							<div className="col font-inter fs-14 fw-400">
								Anda terhubung dengan exchanger digitalexchange.id Deposit dan
								withdrawal ke Main Wallet hanya bisa dilakukan di{" "}
								<span className="text-primary">
									https://digitalexchange.id/walletmanagement
								</span>
							</div>
						</div>
					</div>
					<div className="col-2 d-flex justify-content-end align-items-center">
						<div
							className="btn btn-danger text-white"
							data-bs-toggle="modal"
							data-bs-target="#UnlinkWallet"
						>
							{" "}
							Unlink Wallet
						</div>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-5">
						<div className="font-inter fs-14 fw-400 text-secondary">
							Total Estimated Balance:
						</div>
						<div className="font-roboto fs-48 fw-700">
							9.955.014 <span className="fs-16">IDR</span>
						</div>
					</div>
					<div className="col-5 offset-2">
						<div className="font-inter fs-14 fw-400 text-secondary">
							Total Estimated Balance:
						</div>
						<div className="font-roboto fs-48 fw-700">
							21.777.014 <span className="fs-16">IDR</span>
						</div>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-5">
						<div className="font-inter fw-600 fs-16">Main Wallet</div>
						<table className="table table-hover mt-4">
							<thead>
								<tr style={{ fontSize: 12 }}>
									<th scope="col">Market</th>
									<th scope="col" className="text-center">
										Symbol
									</th>
									<th scope="col" className="text-center">
										Last Price
									</th>
									<th scope="col" className="text-end">
										24 Change
									</th>
								</tr>
							</thead>
							<tbody>
								{loadingCoin ? (
									<>Loading...</>
								) : (
									dataCoin.map((e) => {
										return (
											<>
												<tr className="fs-14">
													<td scope="row" className="py-2">
														{console.log(e.img)}
														<img
															style={{
																width: 25,
																height: 25,
																marginRight: 15,
															}}
															src={e.img}
															alt=""
														/>
														<span className="fw-light">
															{e.assetsName}
														</span>
													</td>
													<td className="py-2 text-center">{e.symbol}</td>
													<td className="py-2 text-center">
														{e.last_price}
													</td>
													<td className="py-2 text-end">
														{e.percentage_24h}%
													</td>
												</tr>
											</>
										);
									})
								)}
								{}
							</tbody>
						</table>
					</div>
					<div className="col-2 d-flex justify-content-center align-items-center">
						<div className="btn" style={{ backgroundColor: "#EAECEF" }} onClick={() => navigate('/wallet-transfer')}>
							<p className="font-inter fs-16 fw-400 m-0">Transfer</p>
						</div>
					</div>
					<div className="col-5">
						<div className="font-inter fw-600 fs-16">Escrow Wallet</div>
						<table className="table table-hover mt-4">
							<thead>
								<tr style={{ fontSize: 12 }}>
									<th scope="col">Market</th>
									<th scope="col" className="text-center">
										Symbol
									</th>
									<th scope="col" className="text-center">
										Last Price
									</th>
									<th scope="col" className="text-end">
										24 Change
									</th>
								</tr>
							</thead>
							<tbody>
								{loadingCoin ? (
									<>Loading...</>
								) : (
									dataCoin.map((e) => {
										return (
											<>
												<tr className="fs-14">
													<td scope="row" className="py-2">
														{console.log(e.img)}
														<img
															style={{
																width: 25,
																height: 25,
																marginRight: 15,
															}}
															src={e.img}
															alt=""
														/>
														<span className="fw-light">
															{e.assetsName}
														</span>
													</td>
													<td className="py-2 text-center">{e.symbol}</td>
													<td className="py-2 text-center">
														{e.last_price}
													</td>
													<td className="py-2 text-end">
														{e.percentage_24h}%
													</td>
												</tr>
											</>
										);
									})
								)}
								{}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<Footer />
			<UnlinkModal/>
		</>
	);
}
