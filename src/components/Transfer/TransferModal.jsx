import { useState } from "react";
import img_logo_transfer from "../../assets/img/logo-transfer.png";
import img_logo_email2 from "../../assets/img/logo-email-2.png";
import { useNavigate } from "react-router-dom";

export default function TransferModal({direction}) {
    const navigate = useNavigate()
const [transaction, setTransaction] = useState(false)
	return (
		<>
			<div
				class="modal modal-sm fade"
				id="AskTransfer"
				tabindex="-1"
				aria-labelledby="AskTransferLabel"
				aria-hidden="true"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						{!transaction ? (
							<div class="modal-body">
								<div className="font-roboto text-center fw-600 mb-3" style={{ fontSize: 26 }}>
									Confirmation
								</div>
								<div className="d-flex justify-content-center mb-3">
									<img src={img_logo_transfer} alt="" className="w-25 img-fluid" />
								</div>
								<div className="font-roboto fw-400 fs-14 text-center mb-2">
									{direction === "main_to_escrow"
										? "Apakah anda yakin ingin melakukan transfer Main ke Escrow Wallet?"
										: "Apakah anda yakin ingin melakukan transfer Escrow ke Main Wallet?"}
								</div>
								{direction === "main_to_escrow" ? (
									<div className="font-roboto fw-400 fs-12 text-center text-danger px-3 mb-3">
										Balance yang masuk ke escrow wallet “otomatis akan lock”
									</div>
								) : (
									<div className="font-roboto fw-400 fs-12 text-center text-danger px-3 mb-3">
										{" "}
									</div>
								)}

								<div className=" px-3 d-flex mb-2">
									<div
										className="btn btn-secondary w-100 me-1"
										data-bs-dismiss="modal"
										aria-label="Close"
									>
										No
									</div>
									<div
										className="btn w-100 ms-1 text-white"
										style={{ backgroundColor: "#2752E7" }}
										onClick={() => setTransaction(true)}
									>
										Yes
									</div>
								</div>
							</div>
						) : (
							<div class="modal-body">
								<div className="font-roboto text-center fw-600 mb-3" style={{ fontSize: 26 }}>
									Success
								</div>
								<div className="d-flex justify-content-center mb-3">
									<img src={img_logo_email2} alt="" className="w-25 img-fluid" />
								</div>
								<div className="font-roboto fw-400 fs-14 text-center mb-2">
									Silahkan Cek email anda{" "}
									<span className="text-primary">Hidayatfour@gmail.com</span> untuk konfirmasi
									request transfer
								</div>

								<div className=" px-3 d-flex mb-2">
									<div
										className="btn w-100 ms-1 text-white"
										style={{ backgroundColor: "#2752E7" }}
										onClick={() => {
											setTransaction(false);
											navigate("/wallet-management");
										}}
										data-bs-dismiss="modal"
										aria-label="Close"
										v
									>
										Confirm
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
