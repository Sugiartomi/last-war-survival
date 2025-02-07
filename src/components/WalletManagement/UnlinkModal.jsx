import { ExclamationDiamondFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function UnlinkModal() {
	const navigate = useNavigate();
	return (
		<>
			<div
				className="modal modal-sm fade"
				id="UnlinkWallet"
				tabindex="-1"
				aria-labelledby="UnlinkWalletLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<div className="row px-3 py-2 mt-3">
								<ExclamationDiamondFill
									className="text-center text-danger"
									style={{ fontSize: 72 }}
								/>
								<div
									className="font-roboto text-center mt-3"
									style={{ fontSize: 20, fontWeight: 500 }}
								>
									Are You Sure?
								</div>
								<div className="font-inter text-center fw-400 fs-14">
									Do you really want to unlink your wallet
								</div>
								<div className="d-flex justify-content-center mt-5">
									<button
										type="button"
										className="btn btn-sm"
										data-bs-dismiss="modal"
									>
										No
									</button>
									<button
										type="button"
										className="btn btn-sm btn-danger px-4 ms-4"
										data-bs-dismiss="modal"
										onClick={() => navigate("/wallet")}
									>
										Yes
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
