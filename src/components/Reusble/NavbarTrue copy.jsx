import { MoonFill } from "react-bootstrap-icons";
import img_arbitgo_1 from "../../assets/img/arbitgo.svg";
import img_avatar from "../../assets/img/avatar.png";
import img_scan_qr from "../../assets/img/scan-qr.png";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import "@popperjs/core/dist/umd/popper.min.js";

import img_qr_code from "../../assets/img/qr-code.png";
import { useEffect } from "react";

export default function NavbarTrue() {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	return (
		<>
			<nav
				className="navbar sticky-top navbar-expand-lg bg-body-tertiary "
				style={{ position: "sticky" }}
			>
				<div className="container-fluid ">
					<a className="navbar-brand text-center ms-5" href="#">
						<img
							src={img_arbitgo_1}
							alt=""
							className="img-fluid"
							style={{ width: 100, height: 25 }}
							onClick={() => navigate("/")}
						/>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarScroll"
						aria-controls="navbarScroll"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarScroll">
						<ul
							className="navbar-nav me-auto my-2 my-lg-0 col-6 font-inter fs-16"
							style={{ "--bs-scroll-height": "100px" }}
						>
							<li className="nav-item">
								<div
									className={
										pathname === "/dashboard" || pathname === "/dashboard-pnl"
											? "nav-link pointer text-primary fw-bold active"
											: "nav-link pointer"
									}
									data-bs-toggle="dropdown"
									aria-expanded="false"
									onClick={() => navigate("/dashboard-pnl")}
								>
									Dashboard
								</div>
							</li>
							<li className="nav-item">
								<a
									className={
										pathname === "/trade" || pathname === "/trade-nama-coin"
											? "nav-link  pointer text-primary fw-bold active"
											: "nav-link  pointer"
									}
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
									onClick={() => navigate("/trade")}
								>
									Trade
								</a>
							</li>
							<li className="nav-item">
								<a
									className={
										pathname === "/transaction-history" ||
										pathname === "/transaction-history"
											? "nav-link text-primary fw-bold  pointer active"
											: "nav-link  pointer"
									}
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
									onClick={() => navigate("/transaction-history")}
								>
									Riwayat Transaksi
								</a>
							</li>
						</ul>
						<div className="d-flex justify-content-end col-lg-6">
							<li className="nav-item dropdown  list-unstyled pointer">
								<img
									src={img_avatar}
									style={{ width: 35, height: 35 }}
									className="img-fluid p-1 rounded-circle border nav-link"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								/>
								<ul className="dropdown-menu  list-unstyled">
									<li>
										<a
											className="dropdown-item pointer"
											onClick={() => navigate("/my-profile")}
										>
											Profil Saya
										</a>
									</li>
									<li>
										<a
											className="dropdown-item pointer"
											onClick={() => navigate("/security")}
										>
											Keamanan
										</a>
									</li>
									<li>
										<a
											className="dropdown-item pointer"
											onClick={() => navigate("/reference")}
										>
											Referensi
										</a>
									</li>
								
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a
											className="dropdown-item pointer"
											onClick={() => navigate("/")}
										>
											Logout
										</a>
									</li>
								</ul>
							</li>
							<div class="btn-group dropstart nav-item list-unstyled pointer ms-3">
								<img
									src={img_scan_qr}
									style={{ width: 35, height: 35 }}
									className="img-fluid p-1 nav-link"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								/>

								<ul class="dropdown-menu">
									<div style={{ width: 450 }}>
									
											<div className="font-roboto fw-600 fs-18 text-center mt-3 mx-5">
												Scan untuk masuk ke Aplikasi Trade{" "}
												<span className="text-primary">Arbit-GO</span>
											</div>
										
									<div className="d-flex justify-content-center">

										<img src={img_qr_code} alt="" className="img-fluid px-3" />
									</div>
									</div>
								</ul>
							</div>
							<div className="font-inter p-2 text-secondary ms-3 me-5 pointer fs-16 fw-600">
								<MoonFill />
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
