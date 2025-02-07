import { ExclamationTriangle } from "react-bootstrap-icons";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

export default function EmergencyContact() {
	const [getCode, setGetCode] = useState(false);
	const [getCode2, setGetCode2] = useState(false);
	const [value, setValue] = useState("");
	const [value2, setValue2] = useState("");
	const [value3, setValue3] = useState("");
	const [value4, setValue4] = useState("");
	const handleKodeOTP = (e) => setValue2(e.target.value);
	const handleKodeOTP2 = (e) => setValue4(e.target.value);
	return (
		<>
			<div
				class="modal modal-sm fade"
				id="askChangeEmergencyContact"
				tabindex="-1"
				aria-labelledby="askChangeEmergencyContactLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content text-inter">
						<div class="modal-header border-0 mx-3">
							<div class="modal-title" id="askChangeEmergencyContactLabel">
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
							<div className="fw-700 fs-16 mx-2">
								Apakah yakin ingin mengubah Kontak Darurat?
							</div>
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
								data-bs-target="#changeEmergencyNumber"
							>
								Konfirmasi
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				class="modal fade"
				id="changeEmergencyNumber"
				tabindex="-1"
				aria-labelledby="changeEmergencyNumberLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content font-inter">
						<div class="modal-header border-0 mx-4 mt-3">
							<h1 class="modal-title fs-5 fw-700" id="changeEmergencyNumberLabel">
								Ganti Nomor Kontak Darurat
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body mx-4">
							{getCode ? (
								<p
									className="mb-0 fs-16 text-success p-2 px-4 mt-3"
									style={{ backgroundColor: "#E8FFE8" }}
								>
									<span className="fw-700">Sukses ! </span> <br /> Silahkan
									periksa kode SMS nomor baru di ponsel Anda
								</p>
							) : (
								""
							)}
							<div className="d-flex justify-content-between mt-4">
								<p className="fs-16 fw-700 mt-1">Nomor Lama</p>
								<div style={{ width: "70%" }}>
									<PhoneInput
										international
										countryCallingCodeEditable={false}
										defaultCountry="ID"
										value={value}
										onChange={setValue}
										placeholder="test"
									/>
								</div>
							</div>
							<div className="d-flex justify-content-between mt-2">
								<p className="fs-16 fw-700 mt-1">Nomor Baru</p>
								<div style={{ width: "70%" }}>
									<PhoneInput
										international
										countryCallingCodeEditable={false}
										defaultCountry="ID"
										value={value3}
										onChange={setValue3}
										placeholder="test"
									/>
								</div>
							</div>
							<div className="d-flex justify-content-between mt-2">
								<p className="fs-16 fw-700 mt-1">Nomor Aktif</p>
								<div style={{ width: "70%" }}>
									<select
										class="form-select form-select-sm shadow-none"
										aria-label="Default select example"
									>
										<option selected disabled>-- select --</option>
										<option value="1">081234567890</option>
										<option value="2">081234567891</option>
										<option value="3">081234567892</option>
									</select>
								</div>
							</div>
							<div className="d-flex justify-content-between">
								<p className="fs-16 fw-700 mt-3 mb-0 " style={{ width: "30%" }}>
									Verifikasi Kode Telpon
								</p>
								<div
									className="d-flex align-items-center border border-secondary rounded mt-1 ps-0 ms-0 h-50 mt-3"
									style={{ width: "70%" }}
								>
									<input
										className="form-control form-control-sm shadow-none border-0 rounded icon-number-none"
										type="number"
										onChange={handleKodeOTP}
									/>
									{value === undefined || value.length < 8 ? (
										<p
											className="fs-14 fw-700 mb-0 text-secondary pointer"
											style={{ width: "30%" }}
										>
											Ambil Kode
										</p>
									) : (
										<p
											className="fs-14 fw-700 mb-0 text-primary pointer"
											style={{ width: "30%" }}
											onClick={() => setGetCode(true)}
										>
											Ambil Kode
										</p>
									)}
								</div>
							</div>
							<div className="d-flex justify-content-between">
								<p className="fs-16 fw-700 mt-4 mb-0 " style={{ width: "30%" }}>
									Kode SMS
								</p>
								<div
									className="d-flex align-items-center border border-secondary rounded mt-1 ps-0 ms-0 h-50 mt-3"
									style={{ width: "70%" }}
								>
									<input
										className="form-control form-control-sm shadow-none border-0 rounded icon-number-none"
										type="number"
										onChange={handleKodeOTP2}
									/>
									{value3 === undefined || value3.length < 8 ? (
										<p
											className="fs-14 fw-700 mb-0 text-secondary pointer"
											style={{ width: "30%" }}
										>
											Ambil Kode
										</p>
									) : (
										<p
											className="fs-14 fw-700 mb-0 text-primary pointer"
											style={{ width: "30%" }}
											onClick={() => setGetCode2(true)}
										>
											Ambil Kode
										</p>
									)}
								</div>
							</div>
						</div>
						<div class="modal-footer mx-4 border-0 mb-4">
							<button
								type="button"
								class="btn btn-sm btn-outline-primary"
								data-bs-dismiss="modal"
							>
								Tutup
							</button>
							{getCode && getCode2 && value.length > 8 && value2.length > 4 ? (
								<button
									type="button"
									class="btn btn-sm btn-primary"
									data-bs-dismiss="modal"
								>
									Kirim
								</button>
							) : (
								<button type="button" class="btn btn-sm btn-secondary">
									Kirim
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
