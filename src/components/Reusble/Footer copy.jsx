import {
	Instagram,
	Facebook,
	Twitter,
	Youtube,
	Telegram,
	Spotify,
	Tiktok,
} from "react-bootstrap-icons";

import img_arbitgo from "../../assets/img/arbitgo-1.png"

export default function Footer() {
	const images = [
		{
			id: 1,
			logo: "instagram",
		},
	];

	return (
		<>
			<footer className="bg-white" style={{ padding: "20px 120px 96px" }}>
				<div className="container-fluid">
					<div className="row py-3">
						<div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
							<div className="d-flex justify-content-start" style={{ height: 30 }}>
								<img className="img-fluid" src={img_arbitgo} alt="" />
							</div>
							<div
								className="font-roboto mb-2 mt-4 text-secondary"
								style={{ fontSize: 20, fontWeight: 700 }}
							>
								PT SMART SULTAN TRADE
							</div>
							<ul
								className="font-roboto list-unstyled mb-0 text-secondary fs-16 fw-400"
							>
								<li>
									<a>Jl. Karawitan 33 Kel. Turangga</a>
								</li>
								<li>
									<a>Kec Lengkong Bandung 40264</a>
								</li>
								<li>
									<a>Telp. 022-7303432</a>
								</li>
								<li className="d-flex justify-content-start mt-4 px-2">
									<a
										href="https://www.facebook.com/digitalexchangeid/"
										style={{ color: "#808080" }}
										className="px-2"
									>
										<Facebook />
									</a>
									<a
										href="https://twitter.com/Digiexchangeid"
										style={{ color: "#808080" }}
										className="px-2"
									>
										<Twitter />
									</a>
									<a
										href="https://www.instagram.com/digitalexchangeid/"
										style={{ color: "#808080" }}
									>
										<Instagram />
									</a>

									<a
										href="https://www.youtube.com/channel/UCd0BzVZBiVyctJ5mNTVqF-w"
										style={{ color: "#808080" }}
										className="px-2"
									>
										<Youtube />
									</a>
									<a
										href="https://t.me/digitalexchangeidcommunity"
										style={{ color: "#808080" }}
										className="px-2"
									>
										<Telegram />
									</a>
									<a
										href="https://www.tiktok.com/@digitalexchange.id?lang=en"
										style={{ color: "#808080" }}
										className="px-2"
									>
										<Tiktok />
									</a>
								</li>
							</ul>
						</div>

						<div className="col-lg-3 col-md-6 mb-4 mb-lg-0 px-md-5 ">
							<h6
								className="text-secondary font-inter mb-4 pt-1 fs-18 fw-600" 
							>
								Company
							</h6>
							<ul
								className="list-unstyled mb-0 font-inter fs-16 fw-400"
							>
								<li className="mb-2 ">
									<a
										href="https://digitalexchange.id/privacy-policy"
										className="text-secondary"
										style={{ textDecoration: "none" }}
									>
										About Us
									</a>
								</li>
								<li className="mb-2">
									<a
										href="https://digitalexchange.id/risk-disclosure"
										className="text-secondary"
										style={{ textDecoration: "none" }}
									>
										Contact Us
									</a>
								</li>
								<li className="mb-2">
									<a
										href="https://digitalexchange.id/term-of-services"
										className="text-secondary"
										style={{ textDecoration: "none" }}
									>
										Support Center
									</a>
								</li>
								<li className="mb-2">
									<a
										href="https://digitalexchange.id/aml-cft"
										className="text-secondary"
										style={{ textDecoration: "none" }}
									>
										Term and Condition
									</a>
								</li>
							</ul>
						</div>

						<div className="col-lg-5 col-md-12 mb-lg-0">
							<div
								className="text-secondary mb-4 font-inter fs-18 fw-600"
							>
								Layanan Pengaduan Konsumen
							</div>
							<p
								className="text-secondary mb-4 fs-16 fw-400"
								style={{ lineHeight: "24px" }}
							>
								Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga Kementerian Perdagangan
								RI Whatsapp ( WA ) +62 853 11111 010 ( Text only )
							</p>
						</div>
					</div>
				</div>
				<hr className="p-0 m-0 b-0 mt-5 mb-3" />
				<div className="text-center py-2">
					<div className="container p-0">
						<p className="text-secondary mb-0 py-2">
							&copy; 2022 Arbitgo All Right reserved
						</p>
					</div>
				</div>
				{/* <div className="bg-light py-2">
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">
              &copy; 2022 digitalexchange.id All Right reserved
            </p>
          </div>
        </div> */}
			</footer>
		</>
	);
}
