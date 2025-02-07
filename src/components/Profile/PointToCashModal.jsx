import img_logo__email from "../../assets/img/logo-email.png"
import { useState } from "react";
import { Gem } from "react-bootstrap-icons";

export default function PointToCash() {
	const [step, setStep] = useState(1);
	const [transaction, setTransaction] = useState(false);
	return (
		<>
			<div
				class="modal fade"
				id="PointToCash"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				tabindex="-1"
				aria-labelledby="PointToCashLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						{!transaction ? (
							<>
								<div class="modal-header">
									<h1 class="modal-title fs-5" id="PointToCashLabel">
										Enter the points you want to Cashout
									</h1>
									<button
										type="button"
										class="btn-close"
										data-bs-dismiss="modal"
										aria-label="Close"
									></button>
								</div>
								{step === 1 ? (
									<>
										<div class="modal-body px-5">
											<div className="font-inter fw-400 fs-14">
												{" "}
												Point :{" "}
												<span className="fw-600" style={{ fontSize: 20 }}>
													0 <Gem className="fw-bold text-warning" />
												</span>
											</div>
											<input type="number" className="form-control mt-3" placeholder="0" />
											<input type="number" className="form-control mt-3" placeholder="Rp.0" />
											<hr className="my-4" />
											<div className="font-inter fs-14 fw-400 text-danger">
												Minimum Cashout Rp.25,000 1X Cashout /24 Hours
											</div>
										</div>
										<div class="modal-footer">
											<button
												type="button"
												class="btn btn-primary me-5 px-4"
												onClick={() => setStep(2)}
											>
												Next
											</button>
										</div>
									</>
								) : (
									<>
										<div class="modal-body px-5">
											<div>
												<div className="font-inter fw-400 fs-14">Bank</div>
												<div
													className="d-flex justify-content-between border rounded mt-2"
													style={{ backgroundColor: "#E8ECF4" }}
												>
													<div className="font-inter fw-400 fs-14 py-2 px-4">BCA</div>
													<div className="font-inter fw-400 fs-14 py-2 px-4 ">Edit</div>
												</div>
											</div>
											<div className="mt-3">
												<div className="font-inter fw-400 fs-14">Account Bank</div>
												<div
													className="d-flex justify-content-between border rounded mt-2"
													style={{ backgroundColor: "#E8ECF4" }}
												>
													<div className="font-inter fw-400 fs-14 py-2 px-4">Hidayat</div>
													<div className="font-inter fw-400 fs-14 py-2 px-4 ">Edit</div>
												</div>
											</div>
											<div className="mt-3">
												<div className="font-inter fw-400 fs-14">Account Number</div>
												<div
													className="d-flex justify-content-between border rounded mt-2"
													style={{ backgroundColor: "#E8ECF4" }}
												>
													<div className="font-inter fw-400 fs-14 py-2 px-4">04711321</div>
													<div className="font-inter fw-400 fs-14 py-2 px-4 ">Edit</div>
												</div>
											</div>
										</div>
										<div class="modal-footer">
											<button
												type="button"
												class="btn btn-secondary px-4"
												onClick={() => setStep(1)}
											>
												back
											</button>
											<button
												type="button"
												class="btn btn-primary me-5 px-4"
												onClick={() => setTransaction(true)}
											>
												Next
											</button>
										</div>
									</>
								)}
							</>
						) : (
							<div className="modal-body">
								<div className="text-center font-roboto" style={{ fontSize: 26, fontWeight: 700 }}>
									Success!
								</div>
								<div className="d-flex justify-content-center mt-3">
									<img src={img_logo__email} alt="" />
								</div>

								<div
									className="text-center font-roboto mt-2"
									style={{ fontSize: 24, fontWeight: 400 }}
								>
									Please chcek your email to process confirmation
								</div>
								<div className="d-flex justify-content-center mt-4 mb-2">
									<div
										className="btn px-5 w-100 mx-5 text-white"
										data-bs-dismiss="modal"
										aria-label="Close"
										style={{ backgroundColor: "#2752E7" }}
                                        onClick={()=> {
                                            setStep(1)
                                            setTransaction(false)
                                        }}
									>
										OK
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
