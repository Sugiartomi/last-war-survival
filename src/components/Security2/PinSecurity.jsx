import AddPinModal from "./AddPinModal";

export default function PinSecurity({ status, setStatus}) {
	return (
		<>
			<div
				class="modal modal-sm fade"
				id="PinSecurity"
				tabindex="-1"
				aria-labelledby="PinSecurityLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content font-inter">
						<div class="modal-header border-0">
							<h1 class="modal-title fs-5" id="PinSecurityLabel">
								Informasi
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body mt-0">
							<p className="mb-0 fs-16 mx-2">
								Untuk menjaga keamanan akun dan transaksi Anda. Harap Aktivasi PIN.
							</p>
						</div>
						<div
							className="btn text-white mx-3 mt-2"
							style={{ backgroundColor: "#2752E7" }}
							data-bs-toggle="modal"
							data-bs-target="#AddPinModal"
							data-bs-dismiss="modal"
						>
							Aktifkan
						</div>
						<div
							className="btn border text-dark mt-2 mx-3 mb-4"
							data-bs-dismiss="modal"
						>
							Tutup
						</div>
					</div>
				</div>
			</div>
			<AddPinModal id={"AddPinModal"}  status={status} setStatus={setStatus}  />
		</>
	);
}
