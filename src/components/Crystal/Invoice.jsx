export default function PaymentReportCrystalModal() {
	return (
		<>
			<div
				class="modal modal-lg fade"
				id="PaymentReportCrystalModal"
				tabindex="-1"
				aria-labelledby="PaymentReportCrystalModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-body">
							<div
								className="font-roboto fw-700 text-center"
								style={{ fontSize: 20 }}
							>
								View Invoice
							</div>
							<hr />
							<div className="container font-roboto">
								<div className="d-flex justify-content-between mx-3">
									<div className=" fw-700 text-primary" style={{ fontSize: 20 }}>
										ARBITGO
									</div>
									<div className="btn btn-secondary">Download</div>
								</div>

								<div
									className="18 fw-400 text-center mt-4"
									style={{ fontSize: 20 }}
								>
									Tanda Terima Pembayaran Crystal Anda
								</div>
								<p className="text-center mt-3 mb-1">15 Februari 2023</p>
								<p className="text-center">
									Transaction ID : <span className="fw-bold"> QT20220712267</span>
								</p>
								<div className="row border border-2 border-dark mx-2">
									<div className="col">
										<p className="mt-3">1 x Crystal</p>
										<p className="mt-3">PPN 11%</p>
										<p className="mt-3">Unique Code</p>
									</div>
									<div className="col text-end">
										<p className="mt-3">Rp. 10.000</p>
										<p className="mt-3">Rp. 1.100</p>
										<p className="mt-3">Rp. 478</p>
									</div>
								</div>
								<div className="row border border-2 border-top-0 border-dark mx-2">
									<div className="col">
										<p className="mt-3">Total</p>
									</div>
									<div className="col text-end">
										<p className="mt-3">Rp. 11.578</p>
									</div>
								</div>
								<p className="text-primary mt-3 ms-2 fs-16">
									*pembayarn ini sudah termasuk PPN
								</p>
								<p className=" mt-3 ms-2 fs-18 mb-1">
									Metode Pembayaran :
									<span className="fw-bold">
										Transfer via Bank BCA 1234567890 PT TDI
									</span>
								</p>
								<p className="  ms-2 fs-18">
									Nama Pengguna : <span className="fw-bold">Maria Lusiana</span>
								</p>
								<p className=" mt-5 ms-2 fs-18 text-center">
									Silahkan hubungi kamu untuk informasi lebih lanjut melalui
								</p>
								<p className=" mt-1 ms-2 fs-18 text-center pointer">
									<span className="text-primary">Helpdesk Email</span>
								</p>
							</div>
						</div>
						<div class="modal-footer font-inter">
							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
								Cancel
							</button>
							<button type="button" class="btn btn-primary">
								Confirm
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
