export default function ChangePassword() {
	return (
		<>
			<div
				class="modal modal-sm fade"
				id="ChangePassword"
				tabindex="-1"
				aria-labelledby="ChangePasswordLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class=" font-inter mx-4 mt-4">
							<button
								type="button"
								class="btn-close float-end"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
							<div
								class="border-0 text-center fw-600 w-100"
								style={{ fontSize: 20 }}
								id="ChangePasswordLabel"
							>
								Ubah Password
							</div>
						</div>
						<div class="modal-body font-inter">
							<p className="mb-1 fs-16 fw-600">Kata Sandi Lama</p>
							<input
								type="password"
								name=""
								className="form-control form-control-sm shadow-none"
								placeholder="Atur Kata Sandi Lama"
							/>
							<p className="mt-3 mb-1 fs-16 fw-600">Kata Sandi Baru</p>
							<input
								type="password"
								name=""
								className="form-control form-control-sm shadow-none"
								placeholder="Atur Kata Sandi Baru"
							/>
							<p className="mt-3 mb-1 fs-16 fw-600">Konfirmasi Kata Sandi Baru</p>
							<input
								type="password"
								name=""
								className="form-control form-control-sm shadow-none"
								placeholder="Konfirmasi Kata Sandi Baru"
							/>
							<p className="mt-3 mb-1 fs-16 fw-600">OTP Number</p>
							<div className="d-flex">
								<input
									type="password"
									name=""
									className="form-control form-control-sm shadow-none"
									placeholder="Konfirmasi Kata Sandi Baru"
								/>
								<div
									className="btn btn-sm ms-2 text-white fs-14"
									style={{ backgroundColor: "#2752E7", width: "50%" }}
								>
									Send OTP
								</div>
							</div>
							<p className="mt-2 mb-1 fs-14 fw-400 text-secondary">
								Kami akan mengirim kode OTP ke +628213425**
							</p>
						</div>
						<div class="d-flex mx-3 mb-4 mt-2 font-inter">
							<button
								type="button"
								class="btn btn-sm btn-outline-primary w-100"
								data-bs-dismiss="modal"
							>
								Close
							</button>
							<button
								type="button"
								class="btn btn-sm ms-2 w-100 text-white"
								style={{ backgroundColor: "#2752E7" }}
                                data-bs-dismiss="modal"
							>
								Reset
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
