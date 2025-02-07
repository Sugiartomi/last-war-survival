import { useNavigate } from "react-router-dom";

export default function DataPribadi({ setStep }) {
    const navigate = useNavigate()
	return (
		<>
			<div className="row d-flex justify-content-center mt-5">
				<div className="col-6">
					<div className="fs-14 fw-600 font-inter">
						Nomor ID <span className="text-danger">*</span>
					</div>
					<input type="number" className="form-control mt-2" />
					<div className="fs-14 fw-600 font-inter mt-3">
						Tanggal Kadaluarsa <span className="text-danger">*</span>
					</div>
					<input type="date" className="form-control mt-2" />
					<div className="my-3">
						<div class="form-check">
							<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
							<label className="form-check-label" for="defaultCheck1">
								Default checkbox
							</label>
						</div>
					</div>
					<div className="d-flex">
						<div
							className="btn btn-outline-primary w-100 me-2 text-primary"
							onClick={() => setStep("Verifikasi Data Pribadi")}
						>
							Kemabli
						</div>
						<div
							className="btn w-100 ms-2  text-white"
							style={{ backgroundColor: "#2752E7" }}
							onClick={() => setStep("Kontak Darurat")}
						>
							Lanjut
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
