import { useEffect, useState } from "react";
import { ExclamationTriangle } from "react-bootstrap-icons";

export default function Reset2fa() {
	const [time, setTime] = useState({
		value: 60,
		status: false,
	});
	const [input, setInput] = useState({
		verifikasiEmail: "",
		verifikasiGoogle: "",
	});
	useEffect(() => {
		if (time.value > 0 && time.status) {
			setTimeout(() => {
				setTime({
					value: time.value - 1,
					status: true,
				});
			}, 1000);
		} else if (time.value === 0) {
			setTime({
				value: 60,
				status: false,
			});
		}
	}, [time]);
	const handleInput = (e) => {
		let value = e.target.value;
		let newArr = {
			...input,
			[e.target.name]: value,
		};
		setInput(newArr);
	};

	return (
		<>
			<div
				class="modal modal-sm fade"
				id="askChange2fa"
				tabindex="-1"
				aria-labelledby="askChange2faLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content text-inter">
						<div class="modal-header border-0 mx-3">
							<div class="modal-title" id="askChange2faLabel">
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
								Apakah Anda yakin ingin mengubah Google Authenticator ?
							</div>
							<p className=" fw-400 fs-14 mx-2 my-2">
							Layanan penarikan, Transaksi akan dinonaktifkan selama 24 jam setelah
							Anda melakukan perubahan ini untuk melindungi akun Anda.
						</p>
						</div>
						
						<div class="d-flex mx-3 mb-4 font-inter">
							
							<button type="button" class="btn btn-sm btn-secondary w-100 me-2" data-bs-dismiss="modal">
								Batal
							</button>
							<button
								type="button"
								class="btn btn-sm btn-primary w-100"
								data-bs-toggle="modal"
								data-bs-target="#Reset2fa"
							>
								Konfirmasi
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal modal-md fade"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabindex="-1"
				aria-labelledby="staticBackdropLabel2"
				aria-hidden="true"
				id="Reset2fa"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body p-4">
							<div className="text-center" style={{ fontSize: 22 }}>
								<div className="modal-title font-roboto fw-700 " id="Reset2fa">
									Verifikasi keamanan
								</div>
								{/* <button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button> */}
							</div>

							<div className="font-inter text-muted fs-16 mt-3 text-center">
								Untuk menjaga akun Anda, harap lengkapi verifikasi berikut
							</div>
							<p
								className="text-danger font-inter fs-14 p-4 my-3"
								style={{ backgroundColor: "#FFEEEE" }}
							>
								Akun Anda lebih aman jika kata sandi dan 2FA diaktifkan. Menghapus
								2FA memudahkan seseorang untuk masuk ke akun Anda. Setelah
								menonaktifkan 2FA, Transaksi Anda selama ditangguhkan 24 jam. Terima
								Kasih
							</p>
							<div className="font-inter text-muted fs-16 fw-700 ">
								Kode Verifikasi Email
							</div>
							<div className="d-flex justify-content-between rounded py-2">
								<input
									type="number"
									className="font-inter fw-400 fs-16 form-control icon-number-none shadow-none w-100"
									style={{ backgroundColor: "#FAFAFA" }}
									name="verifikasiEmail"
									onChange={handleInput}
								/>

								{time.status ? (
									<div
										className="font-inter text-primary fw-600 fs-16 pointer btn btn btn-sm border pt-2 ms-3"
										style={{ width: "40%" }}
									>
										{time.value} sec
									</div>
								) : (
									<div
										className="font-inter text-primary fw-600 fs-16 pointer btn btn btn-sm border pt-2 ms-3"
										style={{ width: "40%" }}
										onClick={() =>
											setTime({
												value: 60,
												status: true,
											})
										}
									>
										Dapatkan Kode
									</div>
								)}
							</div>
							<div className="font-inter text-muted fs-16 mt-1">
								Masukkan kode 6 digit yang dikirim ke tor***@gmail.com
							</div>
							<div className="font-inter text-muted fs-16 mt-3 fw-700">
								Kode Verifikasi Email
							</div>
							<div className="d-flex justify-content-between rounded py-2">
								<input
									type="number"
									className="font-inter fw-400 fs-16 form-control icon-number-none shadow-none w-100"
									style={{ backgroundColor: "#FAFAFA" }}
									name="verifikasiGoogle"
									onChange={handleInput}
								/>
							</div>
							<div className="font-inter text-muted fs-16 mt-1">
								Masukkan kode 6 digit dari Google Authenticator.
							</div>
						</div>
						{input.verifikasiEmail.length > 5 &&
						input.verifikasiGoogle.length > 5 &&
						time.status ? (
							<div
								className="btn text-white mx-4 mb-4"
								style={{ backgroundColor: "#2752E7" }}
								aria-label="Close"
								data-bs-dismiss="modal"
							>
								Submit
							</div>
						) : (
							<div
								className="btn text-white mx-4 mb-4"
								style={{ backgroundColor: "#D0D0D0" }}
							>
								Submit
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
