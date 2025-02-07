export default function ForgotPinModal({ id }) {
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
					<div className="modal-content">
						<div className="modal-body">
							<div
								className="font-roboto fw-700 text-center"
								style={{ fontSize: 22 }}
							>
								OTP Terkirim
							</div>
							<div className="font-inter fw-400 text-center fs-16 mt-3">
								OTP telah dikirmkan ke nomor telepon kamu melalui SMS
							</div>
						</div>
						<div className="btn btn-primary mx-4 mb-4" data-bs-dismiss="modal">
							OK
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
