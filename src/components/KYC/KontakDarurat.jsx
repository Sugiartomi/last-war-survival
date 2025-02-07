import { useNavigate } from "react-router-dom";
import SubmitModal from "./SubmitModal";

export default function KontakDarurat({ setStep }) {
	const navigate = useNavigate();
	return (
		<>
			<div className="row d-flex justify-content-center mt-5">
				<div className="col-6">
					<div className="fs-14 fw-600 font-inter">
						Nama Teman <span className="text-danger">*</span>
					</div>
					<input type="text" className="form-control mt-2" />
					<div className="fs-14 fw-600 font-inter mt-3">
						Hubungan <span className="text-danger">*</span>
					</div>
					<select className="form-select" aria-label="Default select example">
						<option selected disabled>
							-- Hubungan --
						</option>
						<option value="1">Orang Tua</option>
						<option value="2">Suami/ Istri</option>
						<option value="3">Teman</option>
					</select>
					<div className="fs-14 fw-600 font-inter mt-2">
						Nomer Telpon <span className="text-danger">*</span>
					</div>
					<input type="number" className="form-control mt-2" />
					<div className="d-flex mt-4">
						<div
							className="btn btn-outline-primary w-100 me-2 text-primary"
							onClick={() => setStep("Data Pribadi")}
						>
							Kemabli
						</div>
						<div
							className="btn w-100 ms-2  text-white"
							style={{ backgroundColor: "#2752E7" }}
							data-bs-toggle="modal"
							data-bs-target="#staticBackdrop"
						>
							Submit
						</div>
					</div>
				</div>
			</div>
			<SubmitModal/>
		</>
	);
}
