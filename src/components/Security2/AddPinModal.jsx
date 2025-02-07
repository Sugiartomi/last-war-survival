import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpFormCustom from "../OTP/FormOTP";

export default function AddPinModal({ id, status, setStatus }) {
	const navigate = useNavigate();
	const label = id + "Label";

	const [step, setStep] = useState(0);
	const [able, setAble] = useState({
		step0: false,
		step1: false,
		step2: false,
	});
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
				className="modal modal-sm fade"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabindex="-1"
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
				id={id}
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body p-4">
							<div className="d-flex justify-content-between">
								<div className="modal-title font-roboto fw-700 fs-18" id={label}>
									Silahkan Masukan PIN
								</div>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>

							<div className="d-flex justify-content-between mt-4">
								<div className="font-inter fw-400 fs-16">Masukan 6 digit</div>
								{/* <div className="font-inter text-primary fw-400 fs-16">
									Lupa PIN?
								</div> */}
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
										data-bs-target="#step2"
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
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
				id="step2"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body p-4">
							<div className="d-flex justify-content-between">
								<div className="modal-title font-roboto fw-700 fs-18" id={label}>
									Konfirmasi PIN Kamu
								</div>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>

							<div className="d-flex justify-content-between mt-4">
								<div className="font-inter fw-400 fs-16">Masukan 6 digit PIN</div>
								{/* <div className="font-inter text-primary fw-400 fs-16">
									Lupa PIN?
								</div> */}
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
										data-bs-target="#step3"
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
				aria-labelledby="staticBackdropLabel"
				aria-hidden="true"
				id="step3"
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

								<div
									className="font-inter text-primary fw-600 mt-1"
									style={{ width: "30%" }}
								>
									Dapatkan Kode
								</div>
							</div>
							<div className="font-inter text-muted fs-16 mt-2">
								Masukkan kode 6 digit yang dikirim ke tor***@gmail.com
							</div>
						</div>
						<div
							className="btn text-white mx-4 mb-4"
							style={{ backgroundColor: "#2752E7" }}
							onClick={() => setStatus({ ...status, pin: true })}
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
