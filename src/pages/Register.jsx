import img_facebook from "../assets/img/facebook.png";
import img_google from "../assets/img/google.png";

import { InfoCircle } from "react-bootstrap-icons";

import Navbar from "../components/Reusble/Navbar";
import Footer from "../components/Reusble/Footer";

import { useNavigate } from "react-router-dom";
import ModalTerm from "../components/Register/ModalTerm";
import ModalEmail from "../components/Register/ModalEmail";
import { useEffect, useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function Register() {
	const navigate = useNavigate();
	const [valueTrem, setValueTrem] = useState("disagree");

	return (
		<>
			<Navbar />
			<div className="row d-flex justify-content-center my-5" style={{ overflowX: "hidden" }}>
				<div className="col-3">
					<div
						className="font-roboto text-center py-4"
						style={{ fontSize: 32, fontWeight: 700 }}
					>
						Register
					</div>
					<form>
						<div className="form-floating form-control-sm mb-3 p-0">
							<input
								type="text"
								className="form-control form-control-sm ps-4 shadow-none"
								id="floatingInput"
								placeholder=" "
							/>
							<label htmlFor="floatingInput" className="px-4 text-secondary">
								Username
							</label>
						</div>
						<div className="form-floating mb-3 form-control-sm p-0">
							<input
								type="email"
								className="form-control form-control-sm ps-4 shadow-none"
								id="floatingInput"
								placeholder=" "
							/>
							<label htmlFor="floatingInput" className="px-4  text-secondary">
								Email
							</label>
						</div>
						<div className="form-floating form-control-sm p-0 mb-3">
							<input
								type="number"
								className="form-control form-control-sm ps-4 shadow-none icon-number-none"
								id="floatingPassword"
								placeholder=" "
							/>
							<label className="px-4 text-secondary">Phone Number</label>
						</div>
						<div className="form-floating form-control-sm p-0 mb-3">
							<input
								type="password"
								className="form-control form-control-sm shadow-none ps-4"
								id="floatingPassword"
								placeholder=" "
							/>
							<label className="px-4 text-secondary">Password</label>
						</div>
						<div className="form-floating form-control-sm p-0 mb-3">
							<input
								type="password"
								className="form-control form-control-sm shadow-none ps-4"
								id="floatingPassword"
								placeholder=" "
							/>
							<label className="px-4 text-secondary">Confirm Password</label>
						</div>
						<div className="d-flex justify-content-between">
							<div className="form-floating form-control-sm p-0 mb-3">
								<input
									type="text"
									className="form-control form-control-sm shadow-none ps-4"
									id="floatingPassword"
									placeholder=" "
									style={{ textTransform: "uppercase" }}
								/>
								<label className="px-4 text-secondary">Refferal Code</label>
							</div>
							<div
								className="text-center mt-3 text-secondary"
								style={{ width: "10%" }}
							>
								<div type="button" className="btn-secondary ps-2">
									<OverlayTrigger
										key="right"
										placement="right"
										overlay={
											<Tooltip id={`tooltip-$"right"`}>
												Dapatkan bonus points sampai dengan 900ribu point
												dengan membagikan ke teman-teman Anda. S&K berlaku
											</Tooltip>
										}
									>
										<InfoCircle style={{ fontSize: 26 }} />
									</OverlayTrigger>
								</div>
							</div>
						</div>
						<div
							className="d-flex pointer"
							data-bs-toggle="modal"
							data-bs-target="#modalTerm"
						>
							{valueTrem === "disagree" ? (
								<input
									className="form-check-input border border-2 border-secondary pointer"
									style={{ width: 20 }}
									type="checkbox"
									id="checkboxNoLabel"
									disabled
								/>
							) : (
								<input
									className="form-check-input pointer"
									style={{ width: 20 }}
									type="checkbox"
									id="checkboxNoLabel"
									checked
								/>
							)}

							<div className="mb-3 form-check pointer">
								<label
									className="form-check-label font-roboto text-secondary pointer"
									style={{ fontWeight: 400, fontSize: 14 }}
								>
									I agree with{" "}
									<span className="text-primary pointer">
										Terms & Conditions with Trading Risk Notice
									</span>
								</label>
							</div>
						</div>
						<div className="d-grid">
							{valueTrem === "disagree" ? (
								<button className="btn btn-secondary btn-login py-3" type="submit">
									<div className="font-inter" style={{ fontWeight: 600 }}>
										Register
									</div>
								</button>
							) : (
								<button className="btn btn-primary btn-login py-3" type="submit">
									<div className="font-inter" style={{ fontWeight: 600 }}>
										Register
									</div>
								</button>
							)}
						</div>
					</form>
					<div className="d-grid mt-3">
						<button
							className="btn btn-outline-secondary btn-login py-3"
							data-bs-toggle="modal"
							data-bs-target="#modalMailerRegister"
						>
							<div className="font-inter" style={{ fontWeight: 600, fontSize: 12 }}>
								ini modal klo udah beres input form register
							</div>
						</button>
					</div>
					<div
						className="row py-4 px-3 d-flex align-items-center font-inter text-secondary"
						style={{ fontWeight: 600, fontSize: 14 }}
					>
						<div className="col bg-secondary me-3 opacity-25" style={{ height: 1 }} />
						Or Login with
						<div className="col bg-secondary ms-3 opacity-25" style={{ height: 1 }} />
					</div>
					<div className="d-flex justify-content-center mt-2">
						<div className="btn btn-outline-secondary px-4 me-2">
							<img src={img_facebook} alt="" />
						</div>
						<div className="btn btn-outline-secondary px-4">
							<img src={img_google} alt="" />
						</div>
					</div>
					<div className="font-inter text-center mt-4" style={{ fontWeight: 400 }}>
						Already have an account?{" "}
						<span className="text-primary" onClick={() => navigate("/login")}>
							Login Now
						</span>
					</div>
				</div>
			</div>
			<Footer />
			<ModalTerm setValueTrem={setValueTrem} valueTrem={valueTrem} />
			<ModalEmail />
		</>
	);
}
