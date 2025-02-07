import { useState } from "react";
import img_people_2 from "../../assets/img/people-2.png";

export default function ModalTerm({setValueTrem, valueTrem}) {
	// const [valueTrem, setValueTrem] = useState("disagree");
	const [step, setStep] = useState(1);
	const setValue = (value) => {
		if (value.target.id === "agree" && value.target.value == "on") {
			setValueTrem("agree");
		} else {
			setValueTrem("disagree");
		}
	};
	console.log(valueTrem);
	return (
		<>
			<div
				className="modal fade"
				id="modalTerm"
				tabIndex="-1"
				aria-labelledby="modalTermLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					{valueTrem === "disagree" || step === 1 ? (
						<div className="modal-content">
							<div className="modal-header">
								<div
									className="modal-title font-inter px-2"
									id="modalTermLabel"
									style={{ fontSize: 18, fontWeight: 600 }}
								>
									DISCLAIMER :
								</div>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div
								className="modal-body font-inter px-4"
								style={{ fontSize: 14, fontWeight: 400 }}
							>
								Your use of the SMARTKLIKS services and all information and other
								content, including that of all third parties, included in or
								accesible from the SMARTKLIKS services is at your own sole risk. Our
								only responsibility is to display crypto prices from the crypto
								exchanger, and forward user trading decisions to selected crypto
								exchanger.
								<div className="form-check mt-4" onChange={setValue}>
									<input
										className="form-check-input"
										type="radio"
										name="flexRadioDefault"
										id="agree"
									/>
									<label className="form-check-label" htmlFor="flexRadioDefault1">
										Agree
									</label>
								</div>
								<div className="form-check" onChange={setValue}>
									<input
										className="form-check-input"
										type="radio"
										name="flexRadioDefault"
										id="disagree"
									/>
									<label className="form-check-label" htmlFor="flexRadioDefault2">
										Disagree
									</label>
								</div>
							</div>
							{valueTrem === "disagree" ? (
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-primary"
										data-bs-dismiss="modal"
										aria-label="Close"
									>
										Submit
									</button>
								</div>
							) : (
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-primary"
										onClick={() => setStep(2)}
									>
										Submit
									</button>
								</div>
							)}
						</div>
					) : (
						<div className="modal-content">
							<div
								className="modal-body text-center font-inter px-4 py-4"
								style={{ fontSize: 16, fontWeight: 600 }}
							>
								Apakah Anda Register Menggunakan Referral?
							</div>
							<div className="d-flex justify-content-center py-4">
								<img src={img_people_2} alt="" className="img-fluid w-25" />
							</div>
							<div className="d-flex mx-5 py-3 mb-3">
								<div
									className="btn btn-outline-primary w-100 me-1"
									data-bs-dismiss="modal"
									onClick={() => {
										setStep(1);
										// setValueTrem("disagree");
									}}
								>
									Tidak
								</div>
								<div
									className="btn text-white w-100 ms-1"
									style={{ backgroundColor: "#2752E7" }}
									data-bs-dismiss="modal"
									onClick={() => {
										setStep(1);
										// setValueTrem("disagree");
									}}
								>
									Ya
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
