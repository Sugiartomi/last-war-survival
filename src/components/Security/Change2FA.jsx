import { ExclamationTriangle, ExclamationTriangleFill } from "react-bootstrap-icons";

export default function Change2FA({ id }) {
	const label = id + "Label";
	return (
		<>
			<div
				className="modal modal-sm fade"
				id={id}
				tabindex="-1"
				aria-labelledby={label}
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-header border-0 mx-4">
							<h1 class="modal-title fs-5" id={label}>
								<ExclamationTriangle
									className="text-primary"
									style={{ fontWeight: "bold", fontSize: 42 }}
								/>
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body p-4">
							<div className="font-inter fw-600 fs-18">
								Apakah Anda yakin ingin mengubah Google Authenticator?
							</div>
							<div className="font-inter fw-400 fs-14 mt-3">
								Layanan penarikan, Transaksi akan dinonaktifkan selama 24 jam
								setelah Anda melakukan perubahan ini untuk melindungi akun Anda.
							</div>
							<div className="d-flex justify-content-center mx-2 mt-4">
								<div
									className="btn btn-secondary me-3 px-4"
									class="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Batal
								</div>
								<div className="btn btn-primary ms-3">Konfirmasi</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
