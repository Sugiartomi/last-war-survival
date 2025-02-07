import { useNavigate } from "react-router-dom";
import img_clock from "../../assets/img/clock.png";


export default function SubmitModal() {
    const navigate = useNavigate()
    return (
			<>
				<div
					className="modal modal-sm fade"
					id="staticBackdrop"
					data-bs-backdrop="static"
					data-bs-keyboard="false"
					tabindex="-1"
					aria-labelledby="staticBackdropLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-body">
								<div className="font-roboto fw-700 text-center" style={{ fontSize: 26 }}>
									Terima Kasih
								</div>
								<div className="d-flex justify-content-center my-3">
									<img src={img_clock} alt="" className="img-fluid" />
								</div>
								<div className="font-roboto fw-400 text-center fs-16 px-4">
									KYC Anda akan direview oleh Admin dalam waktu 1x24 jam
								</div>
								<div
									className="btn text-white w-100 mt-4 mb-3"
									style={{ backgroundColor: "#2752E7" }}
									data-bs-dismiss="modal"
									aria-label="Close"
                                    onClick={() => {
										localStorage.setItem("statusKYC", "valid")
										navigate('/profile')}}
								>
									Ok
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
}