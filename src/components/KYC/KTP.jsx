import { InfoCircleFill, Upload } from "react-bootstrap-icons";

export default function KTP({setStep}) {
    return (
			<>
				<div className="row px-3 py-4 mt-4" style={{ backgroundColor: "#FFFADE" }}>
					<div className="col-2 text-center">
						<InfoCircleFill  style={{ fontSize: 32, color : "orange" }} />
					</div>
					<div className="col">
						<div className="font-roboto fw-600 fs-16"> Perhatian</div>
						<ul className="font-inter fw-400 fs-14 mt-2">
							<li>
								<a>Foto kartu identitas harus berwarna</a>
							</li>
							<li>
								<a>Semua bagian identitas harus terlihat jela</a>
							</li>
							<li>
								<a>Foto kartu identitas tidak boleh miring</a>
							</li>
							<li>
								<a> Text pada kartu identitas harus terlihat jelas (tidak buram)</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="font-inter fw-400 fs-16 mt-5">Pilih Jenis</div>
				<select className="form-select mt-2" aria-label="Default select example">
					<option selected disabled>
						Pilih Jenis Kartu
					</option>
					<option value="1">KTP</option>
					<option value="2">SIM</option>
					<option value="3">Passport</option>
				</select>
				<div className="font-inter fw-400 fs-16 mt-5">File</div>
				<div className="border rounded">
					<div className="d-flex justify-content-center">
						<Upload style={{ fontSize: 72, margin: "50px 0 20px" }} />
					</div>
					<div className="font-roboto text-center text-secondary fw-700 mb-3">Upload</div>
					<div className="d-flex justify-content-center">
						<input type="file" className="form-control mt-2 w-75 my-5" id="inputGroupFile01" />
					</div>
				</div>
				<div className="d-flex justify-content-end">
					<div
						className="btn text-white mt-4 px-4"
						style={{ backgroundColor: "#2752E7" }}
						onClick={() => setStep("Verifikasi Wajah")}
					>
						Lanjut
					</div>
				</div>
			</>
		);
}