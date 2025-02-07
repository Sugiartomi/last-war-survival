import { useNavigate } from "react-router-dom";
import Footer from "../components/Reusble/Footer";
import NavbarTrue from "../components/Reusble/NavbarTrue";

export default function Wallet() {
	const navigate = useNavigate()
	return (
		<>
			<NavbarTrue />
			<div className="container-fluid" style={{ padding: "24px 72px 0px" }}>
				<div className="row d-flex justify-content-center">
					<div className="col-3">
						<div className="font-roboto fw-700 text-center" style={{ fontSize: 32 }}>
							Link Public API exchanger crypto
						</div>
						<form className="mt-4">
							<div className="form-floating form-control-sm mb-3 p-0">
								<select className="form-select" aria-label="Default select example">
									<option selected disabled className="text-secondary">
										{" "}
									</option>
									<option value="1">digitalexchange.id</option>
									<option value="2">Binance</option>
									<option value="3">Huobi</option>
									<option value="4">OKX</option>
									<option value="5">Indodax</option>
									<option value="6">TokoCrypto</option>
								</select>
								<label
									htmlFor="floatingInput"
									className="px-4 text-secondary opacity-75"
								>
									Pilih Exchanger
								</label>
							</div>
							<div className="form-floating form-control-sm mb-3 p-0">
								<input
									type="text"
									className="form-control form-control-sm"
									id="floatingInput"
								/>
								<label
									htmlFor="floatingInput"
									className="px-4 text-secondary opacity-75"
								>
									API key
								</label>
							</div>
							<div className="form-floating mb-3 form-control-sm p-0">
								<input
									type="text"
									className="form-control form-control-sm"
									id="floatingInput"
								/>
								<label
									htmlFor="floatingInput"
									className="px-4  text-secondary opacity-75"
								>
									API Secret
								</label>
							</div>

							<div className="d-grid">
								<button className="btn btn-primary btn-login py-3" type="submit" onClick={() => navigate('/wallet-management')}>
									<div className="font-inter" style={{ fontWeight: 600 }}>
										Sync
									</div>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
