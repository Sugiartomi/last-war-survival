import { ExclamationTriangle, Upload } from "react-bootstrap-icons";
import img_ktp from "../../assets/img/ktp-ri.svg";
import Form from "react-bootstrap/Form";

export default function ChangeAddress() {
	function thisFileUpload() {
		document.getElementById("fileUploadPH").click();
	}
	return (
		<>
			<div
				class="modal modal-sm fade"
				id="askChangeAddress"
				tabindex="-1"
				aria-labelledby="askChangeAddressLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content text-inter">
						<div class="modal-header border-0 mx-3">
							<div class="modal-title" id="askChangeAddressLabel">
								<ExclamationTriangle
									className="text-primary"
									style={{ fontSize: 32 }}
								/>
							</div>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body font-inter">
							<div className="fw-700 fs-16 mx-2">Apakah yakin ingin Alamat?</div>
							<p className=" fw-400 fs-14 mx-2 my-2">
								Layanan penarikan, Transaksi akan dinonaktifkan selama 24 jam
								setelah Anda melakukan perubahan ini untuk melindungi akun Anda.
							</p>
						</div>

						<div class="d-flex mx-3 mb-4 font-inter">
							<button
								type="button"
								class="btn btn-sm btn-secondary w-100 me-2"
								data-bs-dismiss="modal"
							>
								Batal
							</button>
							<button
								type="button"
								class="btn btn-sm btn-primary w-100"
								data-bs-toggle="modal"
								data-bs-target="#changeAddress"
							>
								Konfirmasi
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				class="modal fade"
				id="changeAddress"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabindex="-1"
				aria-labelledby="changeAddressLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header border-0">
							<h1 class="modal-title fs-5 fw-600 font-inter" id="changeAddressLabel">
								Ganti Alamat
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body font-inter mx-3">
							<div className="row">
								<div className="col-3 fs-16 fw-600 mt-2 text-end"> Alamat Lama</div>
								<div className="col-9">
									<input
										type="text"
										className="form-control shadow-none"
										name=""
										id=""
									/>
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-3 fs-16 fw-600 mt-2 text-end"> Alamat Baru</div>
								<div className="col-9">
									<input
										type="text"
										className="form-control shadow-none"
										name=""
										id=""
									/>
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-3 fs-16 fw-600 mt-2 text-end"> Provinsi </div>
								<div className="col-9">
									<select
										class="form-select font-inter shadow-none"
										aria-label="Default select example"
									>
										<option selected disabled style={{ display: "none" }}>
											-- select --
										</option>
										<option value="1">Jawa Barat</option>
										<option value="2">Jawa Tengah</option>
										<option value="3">Jawa Timur</option>
									</select>
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-3 fs-16 fw-600 mt-2 text-end"> Kota </div>
								<div className="col-9">
									<select
										class="form-select font-inter shadow-none"
										aria-label="Default select example"
									>
										<option selected disabled style={{ display: "none" }}>
											-- select --
										</option>
										<option value="1">Bekasi</option>
										<option value="2">Bandung</option>
										<option value="3">Karawang</option>
									</select>
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-3 fs-16 fw-600 mt-2 text-end"> Kode Pos</div>
								<div className="col-9">
									<input
										type="number"
										className="form-control shadow-none icon-number-none"
										name=""
										id=""
									/>
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-3 fs-16 fw-600 mt-2 text-end"> Alasan</div>
								<div className="col-9">
									<textarea
										type="text"
										className="form-control shadow-none icon-number-none"
										name=""
										id=""
									/>
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-3 fs-16 fw-600 mt-2 text-end"> Unggah KTP</div>
								<div className="col-9">
									<div className="card ">
										<div className="d-flex justify-content-center my-2">
											<img src={img_ktp} className="img-fluid " alt="" />
										</div>
										<input
											type="file"
											id="fileUploadPH"
											style={{ display: "none" }}
										/>

										<div
											className="pointer m-0 p-2"
											onClick={() => thisFileUpload()}
										>
											<p
												className="m-0 fs-16 font-roboto text-center text-white py-2 rounded"
												style={{ backgroundColor: "#B6C2C9" }}
											>
												pilih dokumen KTP
												<span className="ms-2">
													<Upload />
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row mt-2">
								<div className="col-3 fs-16 fw-600 mt-2 text-end"> Kode SMS</div>
								<div className="col-9">
									<div className="d-flex">
										<input
											type="number"
											className="form-control shadow-none icon-number-none"
											name=""
											id=""
										/>
										<div
											className="btn text-white ms-2"
											style={{ backgroundColor: "#2752E7", width: "60%" }}
										>
											Ambil Kode
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer font-inter border-0 mx-3">
							<button
								type="button"
								class="btn btn-outline-primary"
								data-bs-dismiss="modal"
							>
								Tutup
							</button>
							<button
								type="button"
								class="btn text-white"
								data-bs-dismiss="modal"
								style={{ backgroundColor: "#2752E7" }}
							>
								Konfirmasi
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
