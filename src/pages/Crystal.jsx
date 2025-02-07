import Footer from "../components/Reusble/Footer";
import NavbarTrue from "../components/Reusble/NavbarTrue";
import { Outlet } from "react-router-dom";
import img_avatar from "../assets/img/avatar.png";
import img_crstal from "../assets/img/crystal.png";
import CrystalCard from "../components/Crystal/Card";
import CrystalHistory from "../components/Crystal/History";
import { Gem } from "react-bootstrap-icons";

export default function Crystal() {
	return (
		<>
			<NavbarTrue />
			<div className="container-fluid" style={{ padding: "24px 72px" }}>
				<div className="row">
					{/* [ kiri ] */}

					<div className="col-8">
						<div className="card pe-4 h-100">
							<div className="row p-5">
								<div className="col-4">
									<div className="row">
										<div className="col d-flex justify-content-center align-items-center">
											<img src={img_avatar} className="img-fluid" alt="" />
										</div>
										<div className="col">
											<div className="font-inter fs-18 fw-600">Hidayat</div>
											<div className="font-inter text-secondary my-2">
												hidayat_123
											</div>
											<div className="font-inter fw-600"><Gem className="text-warning me-2"/>15</div>
										</div>
									</div>
								</div>
								<div className="col-4">
									<div className="font-inter text-secondary fs-14 fw-400">
										Account Balance :
									</div>
									<div className="font-roboto fs-48 fw-700">
										200.000 <span className="fs-16">IDR</span>
									</div>
								</div>
								<div className="col-4">
									<div className="font-inter text-white fs-14 fw-400">...</div>
									<div className="font-roboto text-end fs-48 fw-700">
										150.000 <span className="fs-16">USDT</span>
									</div>
									<div
										className="font-inter text-secondary text-end fs-14 fw-400"
										style={{ marginTop: -10 }}
									>
										capacity per click
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* [ kanan ] */}

					<div className="col-4">
						<div className="card ps-4 gradient-grey h-100">
							<div className="p-3">
								<div className="d-flex align-items-center">
									<img src={img_crstal} className="img-fluid me-4 h-75" alt="" />
									<div>
										<div
											className="font-inter text-dark"
											style={{ fontSize: 32, fontWeight: 400 }}
										>
											Crystal
										</div>
										<div className="font-inter text-dark my-2 fs-14 fw-400">
											1 Crystal hanya dapat dipakai satu kali, untuk
											mengurangi waktu cooldown 60 detik. (minimal pembelian
											20 Crystal)
										</div>
										<div className="font-roboto text-dark fs-48 fw-700">
											500 <span className="fs-16">IDR</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Outlet/>
			</div>
			<Footer />
		</>
	);
}
