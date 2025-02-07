import { InfoCircleFill, Upload } from "react-bootstrap-icons";

export default function VerifikasiDataPribadi({ setStep }) {
	return (
		<>
			<div className="row px-3 py-4 mt-4" style={{ backgroundColor: "#DEEBFF" }}>
				<div className="col-2 text-center">
					<InfoCircleFill className="text-primary" style={{ fontSize: 32 }} />
				</div>
				<div className="col">
					<div className="font-roboto fw-600 fs-16"> Perhatian</div>
					<ul className="font-inter fw-400 fs-14 mt-2">
						<li>
							<a>
								Lengkapi data berikut dengan benar, kami akan menangguhkan pemblokiran akun apabila
								terjadi penyalahgunaan data.
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="row font-inter mt-4">
				<div className="col p-1 pe-3">
					<div className="fs-14 fw-600">
						Nama Lengkap <span className="text-danger">*</span>
						<input type="text" className="form-control" />
					</div>
				</div>
				<div className="col p-1">
					<div className="fs-14 fw-600">
						Pekerjaan <span className="text-danger">*</span>
						<input type="text" className="form-control" />
					</div>
				</div>
			</div>
			<div className="row font-inter mt-3">
				<div className="col p-1 pe-3">
					<div className="fs-14 fw-600">
						Kota Lahir <span className="text-danger">*</span>
						<input type="text" className="form-control" />
					</div>
				</div>
				<div className="col p-1">
					<div className="fs-14 fw-600">
						Alamat <span className="text-danger">*</span>
						<div className="form-floating">
							<textarea
								className="form-control"
								id="floatingTextarea2"
								style={{ height: "100px" }}
							></textarea>
						</div>
					</div>
				</div>
			</div>
			<div className="row font-inter mt-3">
				<div className="col p-1 pe-3">
					<div className="fs-14 fw-600">
						Tanggal Lahir <span className="text-danger">*</span>
						<input type="date" className="form-control" />
					</div>
				</div>
				<div className="col p-1">
					<div className="fs-14 fw-600">
						Provinsi <span className="text-danger">*</span>
						<select className="form-select" aria-label="Default select example">
							<option selected disabled>
								-- Provinsi --
							</option>
							<option value="1">Jawa Barat</option>
							<option value="2">Jawa Tengah</option>
							<option value="3">Jawa Timur</option>
						</select>
					</div>
				</div>
			</div>
			<div className="row font-inter mt-3">
				<div className="col p-1 pe-3">
					<div className="fs-14 fw-600">
						Jenis Kelamin <span className="text-danger">*</span>
					</div>
					<div className="py-2">
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio1"
								value="option1"
							/>
							<label className="form-check-label" for="inlineRadio1">
								Laki-Laki
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio2"
								value="option2"
							/>
							<label className="form-check-label" for="inlineRadio2">
								Perempuan
							</label>
						</div>
					</div>
				</div>
				<div className="col p-1">
					<div className="fs-14 fw-600">
						Kota <span className="text-danger">*</span>
						<select className="form-select" aria-label="Default select example">
							<option selected disabled>
								-- Kota --
							</option>
							<option value="1">Kota Jakarta</option>
							<option value="2">Kota Tangerang</option>
							<option value="3">Kab. Tangerang</option>
						</select>
					</div>
				</div>
			</div>
			<div className="row font-inter mt-3">
				<div className="col p-1  pe-3">
					<div className="fs-14 fw-600">
						Negara <span className="text-danger">*</span>
						<select className="form-select" aria-label="Default select example">
							<option selected disabled>
								-- Provinsi --
							</option>
							<option value="1">Indonesia</option>
							<option value="2">Malaysia</option>
							<option value="3">Brunei</option>
						</select>
					</div>
				</div>
				<div className="col p-1">
					<div className="fs-14 fw-600">
						Kode Pos <span className="text-danger">*</span>
						<input type="number" className="form-control" />
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-end">
				<div
					className="btn btn-outline-primary mt-4 px-4 me-2"
					onClick={() => setStep("Verifikasi Wajah")}
				>
					Kembali
				</div>
				<div
					className="btn text-white mt-4 px-4"
					style={{ backgroundColor: "#2752E7" }}
					onClick={() => setStep("Data Pribadi")}
				>
					Lanjut
				</div>
			</div>
		</>
	);
}
