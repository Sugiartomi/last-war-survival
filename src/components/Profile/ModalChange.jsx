export default function ModalChangeProfile() {
	return (
		<>
			<div
				class="modal fade"
				id="ChangeProfile"
				tabindex="-1"
				aria-labelledby="ChangeProfileLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content font-inter">
						<div class="modal-header border-0">
							<h1 class="modal-title fs-5 fw-700" id="ChangeProfileLabel">
								Notifikasi
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body fs-16">
							Perubahan pada data profile hanya bisa dilakukan di website{" "}
							<span className="text-primary">arbitgo.id</span>
						</div>
						<div class="modal-footer border-0">
							<button
								type="button"
								class="btn btn-outline-secondary"
								data-bs-dismiss="modal"
							>
								<p className="mb-0 fs-16">Batal</p>
							</button>
                            <a href="https://arbitgo-dev.digitalexchange.id/">

							<button type="button" class="btn btn-primary" data-bs-dismiss="modal">
								<p className="mb-0 fs-16">Kunjungi website</p>
							</button>
                            </a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
