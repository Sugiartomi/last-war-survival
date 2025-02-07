import { useState } from "react";
import { ExclamationTriangleFill, Upload } from "react-bootstrap-icons";
import img_no_data from "../../assets/img/no-data-table.png";
import PaymentReportActivationKeyModal from "./Invoice";

export default function ActivationKeyHistory() {
	const [checkedAll, setCheckedAll] = useState(false);
	function handleCheckbox(e) {
		e.target.checked == true ? setCheckedAll(true) : setCheckedAll(false);
	}
	function thisFileUpload() {
		document.getElementById("fileUploadPH").click();
	}
	return (
		<>
			<div>
				<div className="font-roboto mt-5 fw-700" style={{ fontSize: 32 }}>
					Transaction History
				</div>
				<table className="table mt-3">
					<thead>
						<tr>
							<td>Transaction ID</td>
							<td className="text-center">Transaction Date</td>
							<td className="text-center">Grand Total</td>
							<td className="text-center">Qty</td>
							<td className="text-center">Status</td>
							<td className="text-end">Proof of payment</td>
						</tr>
					</thead>
					<tbody className="fs-16">
						<tr>
							<td
								className="text-primary py-3 pointer"
								data-bs-toggle="modal"
								data-bs-target="#ActivationKeyHistoryModal-Pending"
							>
								25472548554
							</td>
							<td className="text-center py-3">07-01-2023 17:31</td>
							<td className="text-center py-3">10.000</td>
							<td className="text-center py-3">20</td>
							<td className="text-center py-3">
								<div className="bg-danger text-white py-1 rounded">pending</div>
							</td>
							<td className="text-end  py-3">
								<input type="file" id="fileUploadPH" style={{ display: "none" }} />

								<div className="pointer m-0 p-0" onClick={() => thisFileUpload()}>
									<p className="m-0 fs-16 font-roboto">
										Please Upload Here{" "}
										<span className="ms-2">
											<Upload />
										</span>
									</p>
								</div>
							</td>
						</tr>
						<tr>
							<td
								className="text-primary py-3 pointer"
								data-bs-toggle="modal"
								data-bs-target="#ActivationKeyHistoryModal-Waiting"
							>
								25472548555
							</td>
							<td className="text-center py-3">08-01-2023 19:15</td>
							<td className="text-center py-3">10.000</td>
							<td className="text-center py-3">20</td>
							<td className="text-center py-3">
								<div className="bg-warning text-white py-1 rounded">
									waiting approval
								</div>
							</td>
							<td className="text-end  py-3">image.png</td>
						</tr>
						<tr>
							<td
								className="text-primary py-3 pointer"
								data-bs-toggle="modal"
								data-bs-target="#ActivationKeyHistoryModal-Paid"
							>
								25472548556
							</td>
							<td className="text-center py-3">08-01-2023 19:15</td>
							<td className="text-center py-3">10.000</td>
							<td className="text-center py-3">20</td>
							<td className="text-center py-3">
								<div className="bg-success text-white py-1 rounded">Paid</div>
							</td>
							<td className="text-end  py-3">image.png</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div>
				<div className="font-roboto mt-5 fw-700" style={{ fontSize: 32 }}>
					Transaction History
				</div>
				<table className="table mt-3">
					<thead>
						<tr>
							<td>Transaction ID</td>
							<td className="text-center">Transaction Date</td>
							<td className="text-center">Grand Total</td>
							<td className="text-center">Qty</td>
							<td className="text-center">Status</td>
							<td className="text-end">Proof of payment</td>
						</tr>
					</thead>
				</table>
				<div className="row" style={{ marginTop: 100 }}>
					<div className="col d-flex justify-content-center">
						<img src={img_no_data} alt="" className="img-fluid" />
					</div>
				</div>
			</div>
			{/* <!-- Modal Paid--> */}
			<div
				class="modal modal-lg fade"
				id="ActivationKeyHistoryModal-Paid"
				tabindex="-1"
				aria-labelledby="ActivationKeyHistoryModal-PaidLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						{/* <div class="modal-header">
							<h1 class="modal-title fs-5" id="ActivationKeyHistoryModal-PaidLabel">
								Modal title
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div> */}

						<div class="modal-body">
							<div className="row">
								<div
									className="font-inter text-center fw-600 py-3"
									style={{ fontSize: 18 }}
								>
									Detail Transaction Active
								</div>
								<hr />
								<div className="row px-4">
									<div className="col-3">
										<p className="font-inter fs-14 fw-400">Transaction ID</p>
										<p className="font-inter fs-14 fw-400">Transaction Date</p>
										<p className="font-inter fs-14 fw-400">Item</p>
										<p className="font-inter fs-14 fw-400">Quantity</p>
									</div>
									<div className="col-3">
										<p className="font-inter fs-14 fw-600">: DT20230215400</p>
										<p className="font-inter fs-14 fw-600">
											: 11/01/2023 17:28
										</p>
										<p className="font-inter fs-14 fw-600">: Regular</p>
										<p className="font-inter fs-14 fw-600">: 2</p>
									</div>
									<div className="col-3">
										<p className="font-inter fs-14 fw-400">Amount</p>
										<p className="font-inter fs-14 fw-400">Status</p>
									</div>
									<div className="col-3">
										{" "}
										<p className="font-inter fs-14 fw-600">: Rp300.124,00</p>
										<p className="font-inter fs-14 fw-600">
											: <span className="text-success">Paid</span>
										</p>
									</div>
								</div>
								<hr />
								<div
									className="font-inter text-center fw-600 py-2"
									style={{ fontSize: 18 }}
								>
									Quota Activation
								</div>
								<div className="row px-4 mt-3">
									<div className="col-3">
										<p className="font-roboto fs-14 fw-700">
											{" "}
											<input
												className="form-check-input mt-0 me-2 pointer shadow-none"
												type="checkbox"
												value=""
												aria-label="Checkbox for following text input"
												name="all"
												onChange={handleCheckbox}
											></input>
											Quota ID
										</p>
										{checkedAll ? (
											<>
												<p className="font-roboto fs-14 fw-700">
													<input
														className="form-check-input mt-0 me-2 pointer shadow-none"
														type="checkbox"
														value=""
														aria-label="Checkbox for following text input"
														checked
													></input>
													PKGREG2206010374
												</p>
												<p className="font-roboto fs-14 fw-700">
													<input
														className="form-check-input mt-0 me-2 pointer shadow-none"
														type="checkbox"
														value=""
														aria-label="Checkbox for following text input"
														checked
													></input>
													PKGREG2206010375
												</p>
											</>
										) : (
											<>
												<p className="font-roboto fs-14 fw-700">
													<input
														className="form-check-input mt-0 me-2 pointer shadow-none"
														type="checkbox"
														value=""
														aria-label="Checkbox for following text input"
													></input>
													PKGREG2206010374
												</p>
												<p className="font-roboto fs-14 fw-700">
													<input
														className="form-check-input mt-0 me-2 pointer shadow-none"
														type="checkbox"
														value=""
														aria-label="Checkbox for following text input"
													></input>
													PKGREG2206010375
												</p>
											</>
										)}
									</div>
									<div className="col-3">
										<p className="font-inter fs-14 fw-600">Status</p>
										<p className="font-inter fs-14 fw-400 text-danger">
											Inactive
										</p>
										<p className="font-inter fs-14 fw-400 text-danger">
											Inactive
										</p>
									</div>
									<div className="col-3">
										<p className="font-inter fs-14 fw-400">Start Activation</p>
										<p className="font-inter fs-14 fw-400">-</p>
										<p className="font-inter fs-14 fw-400">-</p>
									</div>
									<div className="col-3">
										{" "}
										<p className="font-inter fs-14 fw-400">Expired</p>
										<p className="font-inter fs-14 fw-400">-</p>
										<p className="font-inter fs-14 fw-400">-</p>
									</div>
								</div>
							</div>
						</div>

						<hr />
						<div className="d-flex justify-content-between px-3 pb-3">
							<div>
								<button
									type="button"
									className="btn btn-primary"
									data-bs-toggle="modal"
									data-bs-target="#PaymentReportActivationKeyModal"
								>
									View Invoice
								</button>
							</div>
							<div>
								<button type="button" className="btn me-3" data-bs-dismiss="modal">
									Cancel
								</button>
								<button type="button" className="btn btn-primary">
									Confirm
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<PaymentReportActivationKeyModal />

			{/* <!-- Modal Pending--> */}
			<div
				class="modal modal-lg fade"
				id="ActivationKeyHistoryModal-Pending"
				tabindex="-1"
				aria-labelledby="ActivationKeyHistoryModal-PendingLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						{/* <div class="modal-header">
							<h1 class="modal-title fs-5" id="ActivationKeyHistoryModal-PendingLabel">
								Modal title
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div> */}

						<div class="modal-body">
							<div className="row">
								<div
									className="font-inter text-center fw-600 py-3"
									style={{ fontSize: 18 }}
								>
									Detail Transaction Active
								</div>
								<hr />
								<div className="row m-0 px-5">
									<p className="font-roboto fs-14 fw-400">
										Harap melakukan transfer pembayaran ke rekening{" "}
										<span className="font-roboto fs-14 fw-700">
											{" "}
											BCA 485754520 PT DTI{" "}
										</span>
									</p>
									<div
										className="row p-2 m-0"
										style={{ backgroundColor: "	rgb(255,0,0,0.075)" }}
									>
										<div className="col-1">
											<div className="">
												<ExclamationTriangleFill className="text-danger" />
											</div>
										</div>
										<div className="col-10">
											<p className="font-roboto fs-16 fw-700 p-1 mb-1">
												Perhatian
											</p>
											<p className="font-inter fs-14 fw-400 mb-1">
												{" "}
												Batas waktu pembayaran adalah 1x24 jam!
											</p>
										</div>
									</div>
								</div>
								<div className="container mt-3">
									{" "}
									<div className="row px-5">
										<div className="col-3">
											<p className="font-roboto fs-14 fw-400">
												Transaction ID
											</p>
											<p className="font-roboto fs-14 fw-400">
												Transaction Date
											</p>
											<p className="font-roboto fs-14 fw-400">Item</p>
											<p className="font-roboto fs-14 fw-400">Price</p>
											<p className="font-roboto fs-14 fw-400">Quantity</p>
											<p className="font-roboto fs-14 fw-400">Total Price</p>
											<p className="font-roboto fs-14 fw-400">PPN 11%</p>
											<p className="font-roboto fs-14 fw-400">Unique Code</p>
											<p className="font-roboto fs-14 fw-400">Grand Total</p>
											<p className="font-roboto fs-14 fw-400">Status</p>
											<p className="font-roboto fs-14 fw-400">
												Proof of payment
											</p>
										</div>
										<div className="col-3">
											<p className="font-inter fs-14 fw-600">
												: DT20230215400
											</p>
											<p className="font-roboto fs-14 fw-600">
												: 11/01/2023 17:28
											</p>
											<p className="font-roboto fs-14 fw-600">
												: App Package
											</p>
											<p className="font-roboto fs-14 fw-600">: Rp. 500</p>
											<p className="font-roboto fs-14 fw-600">: 20</p>
											<p className="font-roboto fs-14 fw-600">: Rp. 10.000</p>
											<p className="font-roboto fs-14 fw-600">: Rp. 1.100</p>
											<p className="font-roboto fs-14 fw-600">: Rp. 259</p>
											<p className="font-roboto fs-14 fw-600">: Rp. 11.359</p>
											<p className="font-roboto fs-14 fw-600 text-danger">
												: Pending
											</p>
											<p
												className="font-roboto fs-14 fw-400 text-secondary"
												style={{ fontStyle: "italic" }}
											>
												<input
													type="file"
													id="fileUploadPH"
													style={{ display: "none" }}
												/>

												<div
													className="pointer m-0 p-0"
													onClick={() => thisFileUpload()}
												>
													<p className="m-0 fs-16 font-roboto">
														Please Upload Here{" "}
														<span className="ms-2">
															<Upload />
														</span>
													</p>
												</div>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="px-5 pt-3 pb-4">
								<div
									className="row p-2"
									style={{ backgroundColor: "	rgb(255,0,0,0.075)" }}
								>
									<div className="col-1">
										<div className="">
											<ExclamationTriangleFill className="text-warning" />
										</div>
									</div>
									<div className="col-10">
										<p className="font-roboto fs-16 fw-700 p-1 mb-1">Info</p>
										<p className="font-inter fs-14 fw-400 mb-1">
											Total Price diatas belum termasuk PPN & unique code.
											Silahkan klik tombol Confirm untuk melanjutkan transaksi
											dan melihat Grand Total yang harus dibayarkan.
										</p>
										<p className="font-inter fs-14 fw-400 text-primary">
											Lihat Selengkapnya
										</p>
									</div>
								</div>
							</div>
						</div>

						<hr />
						<div className="d-flex justify-content-between px-3 pb-3">
							<div>
								<button type="button" className="btn btn-secondary">
									View Invoice
								</button>
							</div>
							<div>
								<button type="button" className="btn me-3" data-bs-dismiss="modal">
									Cancel
								</button>
								<button type="button" className="btn btn-primary">
									Confirm
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Modal Waiting--> */}
			<div
				class="modal modal-lg fade"
				id="ActivationKeyHistoryModal-Waiting"
				tabindex="-1"
				aria-labelledby="ActivationKeyHistoryModal-WaitingLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						{/* <div class="modal-header">
							<h1 class="modal-title fs-5" id="ActivationKeyHistoryModal-WaitingLabel">
								Modal title
							</h1>
							<button
								type="button"
								class="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div> */}

						<div class="modal-body">
							<div className="row">
								<div
									className="font-inter text-center fw-600 py-3"
									style={{ fontSize: 18 }}
								>
									Detail Transaction Active
								</div>
								<hr />
								<div className="row m-0 px-5">
									<p className="font-roboto fs-14 fw-400">
										Harap melakukan transfer pembayaran ke rekening{" "}
										<span className="font-roboto fs-14 fw-700">
											{" "}
											BCA 485754520 PT DTI{" "}
										</span>
									</p>
								</div>
								<div className="container mt-3">
									{" "}
									<div className="row px-5">
										<div className="col-3">
											<p className="font-roboto fs-14 fw-400">
												Transaction ID
											</p>
											<p className="font-roboto fs-14 fw-400">
												Transaction Date
											</p>
											<p className="font-roboto fs-14 fw-400">Item</p>
											<p className="font-roboto fs-14 fw-400">Price</p>
											<p className="font-roboto fs-14 fw-400">Quantity</p>
											<p className="font-roboto fs-14 fw-400">Total Price</p>
											<p className="font-roboto fs-14 fw-400">PPN 11%</p>
											<p className="font-roboto fs-14 fw-400">Unique Code</p>
											<p className="font-roboto fs-14 fw-400">Grand Total</p>
											<p className="font-roboto fs-14 fw-400">Status</p>
											<p className="font-roboto fs-14 fw-400">
												Proof of payment
											</p>
										</div>
										<div className="col-3">
											<p className="font-inter fs-14 fw-600">
												: DT20230215400
											</p>
											<p className="font-roboto fs-14 fw-600">
												: 11/01/2023 17:28
											</p>
											<p className="font-roboto fs-14 fw-600">
												: App Package
											</p>
											<p className="font-roboto fs-14 fw-600">: Rp. 500</p>
											<p className="font-roboto fs-14 fw-600">: 20</p>
											<p className="font-roboto fs-14 fw-600">: Rp. 10.000</p>
											<p className="font-roboto fs-14 fw-600">: Rp. 1.100</p>
											<p className="font-roboto fs-14 fw-600">: Rp. 259</p>
											<p className="font-roboto fs-14 fw-600">: Rp. 11.359</p>
											<p className="font-roboto fs-14 fw-600 text-warning">
												: Waiting Approval
											</p>
											<p
												className="font-roboto fs-14 fw-400 text-secondary"
												style={{ fontStyle: "italic" }}
											>
												: image.png
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="px-5 pt-3 pb-4">
								<div
									className="row p-2"
									style={{ backgroundColor: "	rgb(255,0,0,0.075)" }}
								>
									<div className="col-1">
										<div className="">
											<ExclamationTriangleFill className="text-warning" />
										</div>
									</div>
									<div className="col-10">
										<p className="font-roboto fs-16 fw-700 p-1 mb-1">Info</p>
										<p className="font-inter fs-14 fw-400 mb-1">
											{" "}
											Total Price diatas belum termasuk PPN & unique code.
											Silahkan klik tombol Confirm untuk melanjutkan transaksi
											dan melihat Grand Total yang harus dibayarkan.
										</p>
										<p className="font-inter fs-14 fw-400 text-primary">
											{" "}
											Lihat Selengkapnya
										</p>
									</div>
								</div>
							</div>
						</div>

						<hr />
						<div className="d-flex justify-content-between px-3 pb-3">
							<div>
								<button type="button" className="btn btn-secondary">
									View Invoice
								</button>
							</div>
							<div>
								<button type="button" className="btn me-3" data-bs-dismiss="modal">
									Cancel
								</button>
								<button type="button" className="btn btn-primary">
									Confirm
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
