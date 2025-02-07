import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

export default function AddPhoneNumber({ setStatus, status }) {
	const [getCode, setGetCode] = useState(false);
	const [value, setValue] = useState("");
	const [value2, setValue2] = useState("");
	const handleKodeOTP = (e) => setValue2(e.target.value);

	return (
		<>
			<div
				class="modal fade"
				id="AddPhoneNumber"
				tabindex="-1"
				aria-labelledby="AddPhoneNumberLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content font-inter">
						<div class="modal-header border-0 mx-4 mt-3">
							<h1 class="modal-title fs-5 fw-700" id="AddPhoneNumberLabel">
								Verifikasi Nomor Telepon
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body mx-4">
							<p className="mb-0 fs-14">
								Untuk melindungi keamanan akun Anda, harap verifikasi nomortelepon
								Anda. Kami tidak akan menggunakan nomor telepon Anda untuk tujuan
								lain apapun.
							</p>
							{ getCode ? <p
								className="mb-0 fs-16 text-success p-2 px-4 mt-3"
								style={{ backgroundColor: "#E8FFE8" }}
							>
								<span className="fw-700">Sukses ! </span> <br /> Silahkan periksa
								kode di ponsel Anda
							</p> : ""}
							<p className="fs-16 fw-700 mt-3 mb-1">Nomor Telpon</p>
							<PhoneInput
								international
								countryCallingCodeEditable={false}
								defaultCountry="ID"
								value={value}
								onChange={setValue}
                                placeholder="test"
							/>
							<p className="fs-16 fw-700 mt-3 mb-0">Verifikasi Kode Telpon</p>
							<div className="d-flex align-items-center border border-secondary rounded mt-1">
								<input
									className="form-control form-control-sm shadow-none border-0 rounded icon-number-none"
									type="number"
									onChange={handleKodeOTP}
								/>
								{  value === undefined || value.length < 8 ?(
									<p
										className="fs-16 fw-700 mb-0 text-secondary pointer"
										style={{ width: "30%" }}
									>
										Ambil Kode
									</p>
								) : (
									<p
										className="fs-16 fw-700 mb-0 text-primary pointer"
										style={{ width: "30%" }}
										onClick={() => setGetCode(true)}

									>
										Ambil Kode
									</p>
								)}
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
							{getCode && value.length > 8 && value2.length > 4 ? (
								<button
									type="button"
									class="btn btn-sm btn-primary"
									data-bs-dismiss="modal"
									onClick={() => setStatus({ ...status, phonenumber: true })}
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
