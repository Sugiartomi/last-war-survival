import { CheckCircleFill, ShieldLockFill } from "react-bootstrap-icons";
import Footer from "../components/Reusble/Footer";
import NavbarTrue from "../components/Reusble/NavbarTrue";
import Reset2FA from "../components/Security/Reset2FA";
import Change2FA from "../components/Security/Change2FA";
import ForgotPinModal from "../components/Security/ForgotPinModal";
import ResetPinModal from "../components/Security/ResetPinModal";
import VerifyEmail from "../components/Security/VerifyEmail";
import VerifyPhoneNumber from "../components/Security/VerifyPhoneNumber";
import { useNavigate } from "react-router-dom";

export default function Security() {
	const navigate= useNavigate()
	return (
		<>
			<NavbarTrue />
			<div
				className="d-flex justify-content-between"
				style={{ backgroundColor: "	rgb(192,192,192,0.2)" }}
			>
				<div className="font-roboto fw-700 px-5 py-4" style={{ fontSize: 32 }}>
					Profile
				</div>
				<div className="text-muted px-5 py-4" style={{ fontSize: 32 }}>
					<ShieldLockFill />
				</div>
			</div>
			<div className="container-fluid" style={{ padding: "24px 72px 0px" }}>
				<div className="col-6 font-roboto fw-700 mt-5" style={{ fontSize: 32 }}>
					Autentikasi Google (2FA)
				</div>
				<div className="mt-4">
					<div className="row">
						<div className="col-6 font-roboto fw-400" style={{ fontSize: 20 }}>
							Autentikasi Biometrik
							<div className="font-inter fw-400 fs-14">
								Lindungi akun dan penarikan Anda dengan keamanan biometrik
							</div>
						</div>

						<div
							className="col-3 d-flex align-items-center font-roboto fw-400 text-success"
							style={{ fontSize: 20 }}
						>
							<CheckCircleFill /> <span className="mx-2"> active</span>
						</div>
						<div className="col-3 d-flex align-items-center justify-content-end">
							<div class="form-check form-switch">
								<input
									class="form-check-input border border-3"
									type="checkbox"
									value="checked"
									role="switch"
									id="flexSwitchCheckChecked"
									style={{ width: 50, height: 25 }}
								/>
							</div>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-6 font-roboto fw-400" style={{ fontSize: 20 }}>
							Reset PIN
							<div className="font-inter fw-400 fs-14">
								Lindungi akun dan penarikan Anda dengan keamanan biometrik
							</div>
						</div>

						<div
							className="col-3 d-flex align-items-center font-roboto fw-400 text-success"
							style={{ fontSize: 20 }}
						></div>
						<div className="col-3 d-flex align-items-center justify-content-end">
							<div
								className="btn btn-sm btn-secondary"
								data-bs-toggle="modal"
								data-bs-target="#ResetPinModal"
							>
								Reset
							</div>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-6 font-roboto fw-400" style={{ fontSize: 20 }}>
							Lupa PIN
							<div className="font-inter fw-400 fs-14">
								Lindungi akun dan penarikan Anda dengan keamanan biometrik
							</div>
						</div>

						<div
							className="col-3 d-flex align-items-center font-roboto fw-400 text-success"
							style={{ fontSize: 20 }}
						></div>
						<div className="col-3 d-flex align-items-center justify-content-end">
							<div
								className="btn btn-sm btn-secondary"
								data-bs-toggle="modal"
								data-bs-target="#ForgotPinModal"
							>
								Verifikasi
							</div>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-6 font-roboto fw-400" style={{ fontSize: 20 }}>
							Google Authenticator (Direkomendasikan)
							<div className="font-inter fw-400 fs-14">
								Digunakan untuk melakukan penarikan dan perubahan keamanan
							</div>
						</div>

						<div
							className="col-3 d-flex align-items-center font-roboto fw-400 text-success"
							style={{ fontSize: 20 }}
						>
							<CheckCircleFill /> <span className="mx-2"> active</span>
						</div>
						<div className="col-3 d-flex align-items-center justify-content-end">
							<div
								className="btn btn-sm btn-secondary me-2"
								data-bs-toggle="modal"
								data-bs-target="#Change2FAModal"
							>
								Ubah
							</div>
							<div
								className="btn btn-sm btn-secondary"
								data-bs-toggle="modal"
								data-bs-target="#Reset2FAModal"
							>
								Reset
							</div>
						</div>
					</div>
				</div>
				<hr style={{ margin: "50px 0px" }} />
				<div className="col-6 font-roboto fw-700" style={{ fontSize: 32 }}>
					Verifikasi email
				</div>
				<div className="mt-4">
					<div className="row">
						<div className="col-6 font-roboto fw-400" style={{ fontSize: 20 }}>
							Verifikasi Nomor Ponsel
							<div className="font-inter fw-400 fs-14">
								Lindungi akun dan transaksi Anda.
							</div>
						</div>

						<div
							className="col-3 d-flex align-items-center font-roboto fw-400 text-success"
							style={{ fontSize: 20 }}
						>
							<CheckCircleFill /> <span className="mx-2"> 856*****327</span>
						</div>
						<div className="col-3 d-flex align-items-center justify-content-end">
							<div
								className="btn btn-sm btn-secondary"
								data-bs-toggle="modal"
								data-bs-target="#ChangePhoneNumberModal"
							>
								Ubah
							</div>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-6 font-roboto fw-400" style={{ fontSize: 20 }}>
							Verifikasi Alamat Email
							<div className="font-inter fw-400 fs-14">
								Lindungi akun dan transaksi Anda.
							</div>
						</div>

						<div
							className="col-3 d-flex align-items-center font-roboto fw-400 text-success"
							style={{ fontSize: 20 }}
						>
							<CheckCircleFill /> <span className="mx-2"> hidaya***@gmail.com</span>
						</div>
						<div className="col-3 d-flex align-items-center justify-content-end">
							<div
								className="btn btn-sm btn-secondary"
								data-bs-toggle="modal"
								data-bs-target="#ChangeEmailModal"
							>
								Reset
							</div>
						</div>
					</div>
				</div>
				<hr style={{ margin: "100px 0px" }} />
				<div className="col-6 font-roboto fw-700" style={{ fontSize: 32 }}>
					Keamanan tingkat lanjut
				</div>
				<div className="mt-4 mb-5   ">
					<div className="d-flex justify-content-between">
						<div className="font-roboto fw-400" style={{ fontSize: 20 }}>
							Kata sandi
							<div className="font-inter fw-400 fs-14">
								Kata sandi digunakan untuk masuk ke akun Anda.
							</div>
						</div>
						<div className="d-flex align-items-center justify-content-end">
							<div className="btn btn-sm btn-secondary" onClick={() => navigate("/reset-password" )}>Atur ulang kata sandi</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
			<ForgotPinModal id={"ForgotPinModal"} />
			<ResetPinModal id={"ResetPinModal"} />
			<Change2FA id={"Change2FAModal"} />
			<Reset2FA id={"Reset2FAModal"} />
			<VerifyPhoneNumber id={"ChangePhoneNumberModal"} />
			<VerifyEmail id={"ChangeEmailModal"} />
		</>
	);
}
