import { MoonFill } from "react-bootstrap-icons";
import img_arbitgo_1 from "../../assets/img/arbitgo.svg";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
	console.log(window.innerWidth);
	const navigate = useNavigate();
	return (
		<>
			<nav
				className="navbar sticky-top navbar-expand-lg bg-body-tertiary "
				style={{ position: "sticky" }}
			>
				<div className="container-fluid ">
					<a className="navbar-brand col-4 m-0 p-0 text-center" href="#">
						<img
							src={img_arbitgo_1}
							alt=""
							className="pointer"
							style={{ width: 100, height: 35 }}
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
							className="navbar-nav me-auto my-2 my-lg-0 col-6 d-flex justify-content-center font-inter fs-16 fw-400"
							style={{ "--bs-scroll-height": "100px" }}
						>
							<li className="nav-item">
								<a className="nav-link pointer" aria-current="page" href="#">
									Support
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link pointer" href="#">
									Informasi & Tutorial
								</a>
							</li>
							<li className="nav-item dropdown dropdown-hover">
								<a
									className="nav-link dropdown-toggle pointer"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Komunitas
								</a>
								<ul className="dropdown-menu dropdown-hover-content">
									<li>
										<a className="dropdown-item pointer" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item pointer" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item pointer" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
						</ul>
						<div
							className="d-flex justify-content-center align-items-center col-lg-6 pointer"
							role="search"
						>
							<div
								className="btn btn-sm btn-outline-primary font-inter fs-16 fw-600 h-25 d-flex align-items-center"
								onClick={() => navigate("/login")}
							>
								<p className="mb-0 mt-1 mx-2 fw-bold">

								Login
								</p>
							</div>
							<div className="font-inter p-2 text-muted mx-5 pointer fs-16 fw-600">
								<MoonFill />
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
