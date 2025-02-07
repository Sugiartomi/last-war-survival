import { useEffect, useState } from "react";
import { ExclamationTriangle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import OtpFormCustom from "../OTP/FormOTP";

export default function ResetPin({ id }) {
	const navigate = useNavigate();
	const label = id + "Label2";

	const [step, setStep] = useState(0);
	const [time, setTime] = useState({
		value: 60,
		status: false,
	});

	const [able, setAble] = useState({
		step0: false,
		step1: false,
		step2: false,
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

	function handleOnChangeLastPIN(data) {
		const { otpString } = data;

		if (otpString.length === 6) {
			setAble({ ...able, step0: true });
		} else {
			setAble({ ...able, step0: false });
		}
	}
	function handleOnChangeNewPIN(data) {
		const { otpString } = data;
		if (otpString.length === 6) {
			setAble({ ...able, step1: true });
		} else {
			setAble({ ...able, step1: false });
		}
	}
	function handleOnChangeConfirmationPIN(data) {
		const { otpString } = data;
		if (otpString.length === 6) {
			setAble({ ...able, step2: true });
		} else {
			setAble({ ...able, step2: false });
		}
	}
	return (
		<>
		<div
				class="modal modal-sm fade"
				id={id}
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
								Apakah yakin ingin mengubah PIN ?
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
								data-bs-target="#lastPinModal"
							>
								Konfirmasi
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal modal-sm fade"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabindex="-1"
				aria-labelledby="staticBackdropLabel2"
				aria-hidden="true"
				id="lastPinModal"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body p-4">
							<div className="d-flex justify-content-between">
								<div className="modal-title font-roboto fw-700 fs-18" id={label}>
									Masukkan PIN Lama
								</div>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>

							<div className="d-flex justify-content-between mt-4">
								<div className="font-inter fw-400 fs-16">PIN Saat Ini</div>
								<div className="font-inter text-primary fw-400 fs-16">
									Lupa PIN?
								</div>
							</div>
							<div style={{ width: "100%" }}>
								<OtpFormCustom
									numberOfInputs={6}
									showOtp={true}
									handleOnChange={handleOnChangeLastPIN}
								/>
								{able.step0 ? (
									<div
										data-bs-dismiss="modal"
										aria-label="Close"
										className="btn btn-primary w-100"
										data-bs-toggle="modal"
										data-bs-target="#step2-reset"
									>
										Konfirmasi
									</div>
								) : (
									<div className="btn btn-secondary w-100">Konfirmasi</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal modal-sm fade"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabindex="-1"
				aria-labelledby="staticBackdropLabel2"
				aria-hidden="true"
				id="step2-reset"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body p-4">
							<div className="d-flex justify-content-between">
								<div className="modal-title font-roboto fw-700 fs-18" id={label}>
									Masukkan PIN Baru
								</div>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>

							<div className="d-flex justify-content-between mt-4">
								<div className="font-inter fw-400 fs-16">PIN Baru</div>
								<div className="font-inter text-primary fw-400 fs-16">
									Lupa PIN?
								</div>
							</div>
							<div style={{ width: "100%" }}>
								<OtpFormCustom
									numberOfInputs={6}
									showOtp={true}
									handleOnChange={handleOnChangeNewPIN}
								/>
								{able.step1 ? (
									<div
										data-bs-dismiss="modal"
										aria-label="Close"
										className="btn btn-primary w-100"
										data-bs-toggle="modal"
										data-bs-target="#step3-reset"
									>
										Konfirmasi
									</div>
								) : (
									<div className="btn btn-secondary w-100">Konfirmasi</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal modal-sm fade"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabindex="-1"
				aria-labelledby="staticBackdropLabel2"
				aria-hidden="true"
				id="step3-reset"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body p-4">
							<div className="d-flex justify-content-between">
								<div className="modal-title font-roboto fw-700 fs-18" id={label}>
									Masukkan PIN Konfirmasi
								</div>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>

							<div className="d-flex justify-content-between mt-4">
								<div className="font-inter fw-400 fs-16">PIN Konfirmasi Baru</div>
								<div className="font-inter text-primary fw-400 fs-16">
									Lupa PIN?
								</div>
							</div>
							<div style={{ width: "100%" }}>
								<OtpFormCustom
									numberOfInputs={6}
									showOtp={true}
									handleOnChange={handleOnChangeConfirmationPIN}
								/>
								{able.step1 ? (
									<div
										data-bs-dismiss="modal"
										aria-label="Close"
										className="btn btn-primary w-100"
										data-bs-toggle="modal"
										data-bs-target="#step4-reset"
									>
										Konfirmasi
									</div>
								) : (
									<div className="btn btn-secondary w-100">Konfirmasi</div>
								)}
							</div>
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
				id="step4-reset"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body p-4">
							<div className="d-flex justify-content-between">
								<div className="modal-title font-roboto fw-700 fs-18" id={label}>
									Masukan Kode OTP
								</div>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>

							<div className="font-inter text-muted fs-16">
								Untuk mengamankan akun Anda, harap selesaikan verifikasi berikut.
							</div>
							<div className="font-inter text-muted fs-16">
								Masukan Kode Verifikasi Email
							</div>
							<div
								className="d-flex justify-content-between mt-4 rounded py-2"
								style={{ backgroundColor: "#FAFAFA" }}
							>
								<div className="font-inter fw-400 fs-16">
									<input
										type="number"
										className="form-control icon-number-none shadow-none border-0"
										style={{ backgroundColor: "#FAFAFA" }}
									/>
								</div>
								{time.status ? (
									<div
										className="font-inter text-secondary text-center fw-600 mt-1"
										style={{ width: "30%" }}
									>
										{time.value} sec
									</div>
								) : (
									<div
										className="font-inter text-primary fw-600 mt-1 pointer"
										style={{ width: "30%" }}
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
							<div className="font-inter text-muted fs-16 mt-2">
								Masukkan kode 6 digit yang dikirim ke tor***@gmail.com
							</div>
						</div>
						<div
							className="btn text-white mx-4 mb-4"
							style={{ backgroundColor: "#2752E7" }}
							aria-label="Close"
							data-bs-dismiss="modal"
						>
							Submit
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
