import { useState } from "react";
import { ArrowDown, ArrowDownUp, CurrencyDollar, Wallet, Wallet2 } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Reusble/Footer";
import NavbarTrue from "../components/Reusble/NavbarTrue";
import TransferModal from "../components/Transfer/TransferModal";

export default function TransferWallet() {
	const [direction, setDirection] = useState("main_to_escrow");
	const navigate = useNavigate();
	return (
		<>
			<NavbarTrue />
			<div className="container-fluid" style={{ padding: "24px 72px" }}>
				<div className="row d-flex justify-content-center">
					<div className="col-4">
						<div className="font-roboto text-center fw-600" style={{ fontSize: 20 }}>
							{direction === "main_to_escrow"
								? "Transfer Main to Escrow Wallet"
								: "Transfer Escrow to Main Wallet"}
						</div>
						<hr />
						{direction === "main_to_escrow" ? (
							<div>
								<div className="row">
									<div className="col-4 py-1">
										<Wallet2 /> <span className="ms-4 font-roboto fs-14">from</span>
									</div>
									<div className="col">
										<div className="font-roboto fs-16 fw-400 bg-light rounded border ps-4 py-2">
											Main Wallet
										</div>
									</div>
								</div>
								<div className="row d-flex justify-content-between pe-3 mt-3">
									<div className="col-1">
										<ArrowDown />
									</div>
									<div className="col-1">
										<ArrowDownUp
											className="text-primary pointer"
											onClick={() => setDirection("escrow_to_main")}
										/>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-4 py-1">
										<CurrencyDollar /> <span className="ms-4 font-roboto fs-14">to</span>
									</div>
									<div className="col">
										<div className="font-roboto fs-16 fw-400 bg-light rounded border ps-4 py-2">
											Escrow Wallet
										</div>
									</div>
								</div>
							</div>
						) : (
							<div>
								<div className="row">
									<div className="col-4 py-1">
										<CurrencyDollar /> <span className="ms-4 font-roboto fs-14">from</span>
									</div>
									<div className="col">
										<div className="font-roboto fs-16 fw-400 bg-light rounded border ps-4 py-2">
											Escrow Wallet
										</div>
									</div>
								</div>
								<div className="row d-flex justify-content-between pe-3 mt-3">
									<div className="col-1">
										<ArrowDown />
									</div>
									<div className="col-1 pointer" onClick={() => setDirection("main_to_escrow")}>
										<ArrowDownUp className="text-primary" />
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-4 py-1">
										<Wallet2 /> <span className="ms-4 font-roboto fs-14">to</span>
									</div>
									<div className="col">
										<div className="font-roboto fs-16 fw-400 bg-light rounded border ps-4 py-2">
											Main Wallet
										</div>
									</div>
								</div>
							</div>
						)}
						<hr className="mt-3" />
						<div className="row">
							<div className="col-4">
								<div className="font-roboto fs-18 fw-600 text-center">Coin</div>
							</div>
							<div className="col">
								<select className="form-select" aria-label="Default">
									<option selected disabled>
										{" "}
									</option>
									<option value="1">Bitcoin</option>
									<option value="2">Etherium</option>
									<option value="3">Tether</option>
									<option value="4">Rupiah</option>
								</select>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-4">
								<div className="font-roboto fs-18 fw-600 text-center">Amount</div>
							</div>
							<div className="col">
								<div className="d-flex ">
									<input type="text" className="form-control form-control-sm" />
									<div className="px-3 btn border ms-1">max</div>
								</div>
								<p className="mb-0 mt-3 font-inter fs-14 fw-400">
									Available Amount : 4.500.000 IDR
								</p>
								<p className="mb-0 font-inter fs-14 fw-400">In Order : 0.000 IDR</p>
								<p className="mb-0 font-inter fs-14 fw-400 text-danger">
									{direction === "main_to_escrow" ? (
										<p>Transfer dari Main ke Escrow bersifat realtime</p>
									) : (
										"Transfer dari Escrow ke Main membutuhkan waktu 2x 24jam"
									)}
								</p>
							</div>
						</div>
						<hr />
						<div className="row mt-3">
							<div className="col">
								<div
									className="btn btn-sm px-3 btn-secondary opacity-75 text-center w-100"
									onClick={() => navigate("/wallet-management")}
								>
									Back
								</div>
							</div>

							<div className="col">
								<div
									className="btn btn-sm px-3 btn-primary text-center w-100"
									data-bs-toggle="modal"
									data-bs-target="#AskTransfer"
								>
									Submit
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		<TransferModal direction={direction}/>
		</>
	);
}
