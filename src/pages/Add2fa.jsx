import { AiFillLock } from "react-icons/ai";
import NavbarTrue from "../components/Reusble/NavbarTrue";
import img_playstore from "../assets/img/google-play.svg";
import img_applestore from "../assets/img/apple-store.svg";
import img_qr from "../assets/img/sample-qr.svg";
import img_copy from "../assets/img/icon-copy.svg";

import { Button, ProgressIndicator, ProgressStep } from "@carbon/react";
import Footer from "../components/Reusble/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add2fa() {
	const navigate = useNavigate();
	const [step, setStep] = useState(1);

	return (
		<>
			<NavbarTrue />

			<div
				className="d-flex justify-content-between"
				style={{ backgroundColor: "	rgb(192,192,192,0.2)" }}
			>
				<div className="font-roboto fw-700 px-5 py-4" style={{ fontSize: 32 }}>
					Google Authenticator
				</div>
				<div className="text-muted px-5 py-4" style={{ fontSize: 32 }}>
					{/* <ShieldLockFill /> */}
					<AiFillLock />
				</div>
			</div>
			<div className="container-fluid mt-4 mb-5" style={{ padding: "24px 72px 0px" }}>
				{/* <ProgressIndicator spaceEqually className="">
					<ProgressStep complete label="Langkah 1" secondaryLabel="Unduh Aplikasi" />
					<ProgressStep current label="langkah 2" secondaryLabel="Scan QR" />
					<ProgressStep label="langkah 3" secondaryLabel="Kode Cadangan" />
					<ProgressStep label="langkah 4" secondaryLabel="Aktifkan Google 2FA" />
				</ProgressIndicator> */}

				{step == 1 ? (
					<>
						<div
							class="progress"
							role="progressbar"
							aria-label="Example 20px high"
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
							style={{ height: "5px" }}
						>
							<div
								class="progress-bar"
								style={{ width: "0%", backgroundColor: "#2752E7" }}
							></div>
						</div>
						<div className="row" style={{ marginTop: -18 }}>
							<div className="col-4">
								<div
									className=" d-flex justify-content-center align-items-center text-white rounded-circle"
									style={{ width: 30, height: 30, backgroundColor: "#2752E7" }}
								>
									1
								</div>
							</div>
							<div className="col-4">
								<div
									className=" d-flex justify-content-center align-items-center text-white rounded-circle"
									style={{ width: 30, height: 30, backgroundColor: "#DDE4EA" }}
								>
									2
								</div>
							</div>
							<div className="col-4">
								<div className="d-flex justify-content-between">
									<div
										className=" d-flex justify-content-center align-items-center text-white rounded-circle"
										style={{
											width: 30,
											height: 30,
											backgroundColor: "#DDE4EA",
										}}
									>
										3
									</div>

									<div
										className=" d-flex justify-content-center align-items-center text-white rounded-circle"
										style={{
											width: 30,
											height: 30,
											backgroundColor: "#DDE4EA",
										}}
									>
										4
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-5">
							<div className="col-6 offset-3">
								<div className="text-center font-inter">
									<p className="fw-600"> Langkah 1</p>
									<div className="d-flex justify-content-center">
										<p className="w-50 fs-16">
											1. Unduh aplikasi "Google Authenticator" untuk ponsel
											Anda, Android atau Iphone
										</p>
									</div>
									<div className="mt-4">
										<img src={img_playstore} alt="" className="me-2" />
										<img src={img_applestore} alt="" />
									</div>
									<div
										className="btn w-75 mt-5"
										style={{ backgroundColor: "#2752E7" }}
									>
										<p
											className="mb-0 fw-600 text-white"
											onClick={() => setStep(2)}
										>
											Lanjut
										</p>
									</div>
								</div>
							</div>
						</div>
					</>
				) : step == 2 ? (
					<>
						<div
							class="progress"
							role="progressbar"
							aria-label="Example 20px high"
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
							style={{ height: "5px" }}
						>
							<div
								class="progress-bar"
								style={{ width: "36%", backgroundColor: "#2752E7" }}
							></div>
						</div>
						<div className="row" style={{ marginTop: -18 }}>
							<div className="col-4">
								<div
									className=" d-flex justify-content-center align-items-center text-white rounded-circle"
									style={{ width: 30, height: 30, backgroundColor: "#2752E7" }}
								>
									1
								</div>
							</div>
							<div className="col-4">
								<div
									className=" d-flex justify-content-center align-items-center text-white rounded-circle"
									style={{ width: 30, height: 30, backgroundColor: "#2752E7" }}
								>
									2
								</div>
							</div>
							<div className="col-4">
								<div className="d-flex justify-content-between">
									<div
										className=" d-flex justify-content-center align-items-center text-white rounded-circle"
										style={{
											width: 30,
											height: 30,
											backgroundColor: "#DDE4EA",
										}}
									>
										3
									</div>

									<div
										className=" d-flex justify-content-center align-items-center text-white rounded-circle"
										style={{
											width: 30,
											height: 30,
											backgroundColor: "#DDE4EA",
										}}
									>
										4
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-5">
							<div className="col-6 offset-3">
								<div className="text-center font-inter">
									<p className="fw-600"> Langkah 2</p>
									<div className="d-flex justify-content-center">
										<p className="w-50 fs-16">
											2. Scan QR Code ini di aplikasi Google Authenticator
											yang telah kamu di install
										</p>
									</div>
									<div className="mt-4 card">
										<div className="row p-4">
											<div className="col-4">
												<img src={img_qr} className="img-fluid" alt="" />
											</div>
											<div className="col">
												<p className="mb-0 fs-16 text-start">
													Jika kamu tidak dapat memindai QR Code, Silahkan
													masukkan kode dibawah ini secara manual pada
													Aplikasi <strong>Google Authenticator</strong>
													yang telah kamu kamu.
													<strong>Panduan Aktivasi</strong>
												</p>
												<p
													className="mb-0 mt-2 p-2"
													style={{ backgroundColor: "#DDE4EA" }}
												>
													GAXTACGKKPBPJBRWX
												</p>
												<p className="mb-0 fs-14 text-danger mt-2">
													Kamu harus menuliskan kode cadangan ini
												</p>
											</div>
										</div>
									</div>
									<div className="d-flex mt-5">
										<div
											className="btn w-100 me-3  border border-1 border-primary"
											onClick={() => setStep(1)}
										>
											<p className="mb-0 fw-600 text-primary">Sebelumnya</p>
										</div>
										<div
											className="btn w-100"
											style={{ backgroundColor: "#2752E7" }}
											onClick={() => setStep(3)}
										>
											<p className="mb-0 fw-600 text-white">Lanjut</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				) : step == 3 ? (
					<>
						<div
							class="progress"
							role="progressbar"
							aria-label="Example 20px high"
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
							style={{ height: "5px" }}
						>
							<div
								class="progress-bar"
								style={{ width: "70%", backgroundColor: "#2752E7" }}
							></div>
						</div>
						<div className="row" style={{ marginTop: -18 }}>
							<div className="col-4">
								<div
									className=" d-flex justify-content-center align-items-center text-white rounded-circle"
									style={{ width: 30, height: 30, backgroundColor: "#2752E7" }}
								>
									1
								</div>
							</div>
							<div className="col-4">
								<div
									className=" d-flex justify-content-center align-items-center text-white rounded-circle"
									style={{ width: 30, height: 30, backgroundColor: "#2752E7" }}
								>
									2
								</div>
							</div>
							<div className="col-4">
								<div className="d-flex justify-content-between">
									<div
										className=" d-flex justify-content-center align-items-center text-white rounded-circle"
										style={{
											width: 30,
											height: 30,
											backgroundColor: "#2752E7",
										}}
									>
										3
									</div>

									<div
										className=" d-flex justify-content-center align-items-center text-white rounded-circle"
										style={{
											width: 30,
											height: 30,
											backgroundColor: "#DDE4EA",
										}}
									>
										4
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-5">
							<div className="col-6 offset-3">
								<div className="text-center font-inter">
									<p className="fw-600"> Langkah 3</p>
									<div className="d-flex justify-content-center">
										<p className="w-50 fs-16">
											3.Harap simpan kode cadangan ini
										</p>
									</div>
									<div className="mt-4 card">
										<div className="row p-4">
											<div className="col-4">
												<img
													src={img_copy}
													className="img-fluid mt-2"
													alt=""
												/>
											</div>
											<div className="col">
												<p className="mb-0 fs-16 text-start">
													Harap simpan kode ini. Kode ini akan berguna
													untuk memulihkan{" "}
													<strong>
														Google Authentificator kamu jika terjadi
														kehilangan
													</strong>
													.
												</p>
												<p
													className="mb-0 mt-2 p-2"
													style={{ backgroundColor: "#DDE4EA" }}
												>
													GAXTACGKKPBPJBRWX
												</p>
												<p className="mb-0 fs-14 text-danger mt-2">
													Kamu harus menuliskan kode cadangan ini
												</p>
											</div>
										</div>
									</div>
									<div className="d-flex mt-5">
										<div
											className="btn w-100 me-3  border border-1 border-primary"
											onClick={() => setStep(2)}
										>
											<p className="mb-0 fw-600 text-primary">Sebelumnya</p>
										</div>
										<div
											className="btn w-100"
											style={{ backgroundColor: "#2752E7" }}
											onClick={() => setStep(4)}
										>
											<p className="mb-0 fw-600 text-white">Lanjut</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				) : step === 4 ? (
					<>
						<div
							class="progress"
							role="progressbar"
							aria-label="Example 20px high"
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
							style={{ height: "5px" }}
						>
							<div
								class="progress-bar"
								style={{ width: "100%", backgroundColor: "#2752E7" }}
							></div>
						</div>
						<div className="row" style={{ marginTop: -18 }}>
							<div className="col-4">
								<div
									className=" d-flex justify-content-center align-items-center text-white rounded-circle"
									style={{ width: 30, height: 30, backgroundColor: "#2752E7" }}
								>
									1
								</div>
							</div>
							<div className="col-4">
								<div
									className=" d-flex justify-content-center align-items-center text-white rounded-circle"
									style={{ width: 30, height: 30, backgroundColor: "#2752E7" }}
								>
									2
								</div>
							</div>
							<div className="col-4">
								<div className="d-flex justify-content-between">
									<div
										className=" d-flex justify-content-center align-items-center text-white rounded-circle"
										style={{
											width: 30,
											height: 30,
											backgroundColor: "#2752E7",
										}}
									>
										3
									</div>

									<div
										className=" d-flex justify-content-center align-items-center text-white rounded-circle"
										style={{
											width: 30,
											height: 30,
											backgroundColor: "#2752E7",
										}}
									>
										4
									</div>
								</div>
							</div>
						</div>
						<div className="row mt-5">
							<div className="col-6 offset-3">
								<div className="text-center font-inter">
									<p className="fw-600"> Langkah 4</p>
									<div className="d-flex justify-content-center">
										<p className="w-50 fs-16">
											4. Aktifkan Google Authenticator kamu sekarang
										</p>
									</div>
									<div className="mt-4 text-start">
										<p className="mb-0 fw-600 fs-16">Kode Verifikasi Email</p>
										<div className="d-flex mt-2">
											<input
												type="number"
												className="form-control shadow-none icon-number-none"
											/>
											<div
												className="btn border ms-3"
												style={{ width: "30%" }}
											>
												Ambil Kode
											</div>
										</div>
										<p className="mb-0 fw-400 fs-14 mt-2">
											Masukkan kode 6 digit yang diterima oleh email
											to*****@gmail.com
										</p>
									</div>
									<div className="mt-4 text-start">
										<p className="mb-0 fw-600 fs-16">Kode Verifikasi Email</p>
										<div className="d-flex mt-2">
											<input
												type="number"
												className="form-control shadow-none icon-number-none"
											/>
											<div
												className="btn border ms-3"
												style={{ width: "30%" }}
											>
												Ambil Kode
											</div>
										</div>
										<p className="mb-0 fw-400 fs-14 mt-2">
											Masukkan kode 6 digit dari aplikasi Google Authenticator
										</p>
									</div>
									<div className="d-flex mt-5">
										<div
											className="btn w-100 me-3  border border-1 border-primary"
											onClick={() => setStep(3)}
										>
											<p className="mb-0 fw-600 text-primary">Sebelumnya</p>
										</div>
										<div
											className="btn w-100"
											style={{ backgroundColor: "#2752E7" }}
											data-bs-toggle="modal"
											data-bs-target="#success2fa"
										>
											<p className="mb-0 fw-600 text-white">Lanjut</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				) : (
					""
				)}
			</div>
			<Footer />
			<div
				class="modal modal-sm fade"
				id="success2fa"
				tabindex="-1"
				aria-labelledby="success2faLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content font-inter">
						<div class="modal-header border-0">
							<div class="modal-title fs-16 fw-600" id="success2faLabel">
								Berhasil, Google 2FA Authenticator Anda sudah aktif
							</div>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body">
							<p className="mb-0 fs-14">
								Harap simpan kode Google 2FA Authenticator Anda supaya tidak hilang
							</p>
						</div>
						<div class="modal-footer border-0">
							<button
								type="button"
								class="btn w-100"
								style={{ backgroundColor: "#2752E7" }}
								data-bs-dismiss="modal"
								onClick={() => {
									localStorage.setItem("status2fa", "success");
									navigate("/security");
								}}
							>
								<p className="mb-0 text-white fw-bold">OK</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
