import { ChevronLeft, Clipboard2PulseFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Reusble/Footer";
import NavbarTrue from "../components/Reusble/NavbarTrue";

export default function AccountActivity() {
	const navigate = useNavigate();
	const data = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"];
	return (
		<>
			<NavbarTrue />
			<div
				className="d-flex justify-content-between"
				style={{ backgroundColor: "	rgb(192,192,192,0.2)" }}
			>
				<div className="font-roboto fw-700 px-5 py-4" style={{ fontSize: 32 }}>
					Security
				</div>
				<div className="text-muted px-5 py-4" style={{ fontSize: 32 }}>
					<Clipboard2PulseFill />
				</div>
			</div>
			<div className="container-fluid" style={{ padding: "24px 72px 0px" }}>
				<div className="d-flex justify-content-between mt-4">
					<div className="font-inter fw-400 fs-14" onClick={() => navigate("/profile")}>
						<ChevronLeft /> <span className="ms-3">Profil Keamanan</span>
					</div>
					<div className="font-inter fw-400 fs-14">
						Aktivitas akun yang mencurigakan?
						<span className="text-primary"> Nonaktifkan Akun?</span>
					</div>
				</div>
				<div className="container">
					<table className="table table-borderless text-center my-5">
						<thead className="border-bottom">
							<tr>
								<th scope="col">Tanggal</th>
								<th scope="col">Sumber</th>
								<th scope="col">Status</th>
								<th scope="col">Alamat IP</th>
							</tr>
						</thead>

						<tbody>
							{data.map((e) => {
								return (
									<tr>
										<td className="py-3">2023-02-02 14:26:21</td>
										<td className="py-3">Web</td>
										<td className="py-3">Selesai</td>
										<td className="py-3">@149.129.241.19</td>
									</tr>
								);
							})}
						</tbody>
					</table>
					<nav aria-label="Page navigation">
						<ul className="pagination justify-content-end">
							<li className="page-item disabled">
								<a className="page-link">Previous</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									1
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									2
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									3
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									4
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									5
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									6
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									7
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									...
								</a>
							</li>
							<li className="page-item">
								<a className="page-link" href="#">
									Next
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<Footer />
		</>
	);
}
