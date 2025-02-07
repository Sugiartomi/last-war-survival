import { useNavigate } from "react-router-dom";
import img_logo__email from "../../assets/img/logo-email.png";

export default function ModalEmail() {
	const navigate = useNavigate();
	return (
		<>
			<div
				className="modal fade"
				id="modalMailerRegister"
				tabIndex="-1"
				aria-labelledby="modalMailerRegisterLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content px-5 py-4">
						<div className="modal-body">
							<div
								className="text-center font-roboto"
								style={{ fontSize: 26, fontWeight: 700 }}
							>
								Thank You Registering
							</div>
							<div className="d-flex justify-content-center mt-3">
								<img src={img_logo__email} alt="" />
							</div>
							<div
								className="text-center font-roboto"
								style={{ fontSize: 24, fontWeight: 400 }}
							>
								Verify your email account
							</div>
							<div
								className="text-center font-roboto mt-2"
								style={{ fontSize: 13, fontWeight: 400 }}
							>
								Your registration has been succesful. We have sent a verification
								email to <span className="text-primary">hidayatfour@gmail.com</span>
								, please check ypur email and click the link to continue.
							</div>
							<div
								className="text-center font-roboto my-3"
								style={{ fontSize: 14, fontWeight: 700 }}
							>
								Please wait for the email 15 - 30 minutes
							</div>
							<div className="d-flex justify-content-center">
								<div
									className="btn btn-outline-primary px-5"
									data-bs-dismiss="modal"
									onClick={() => navigate("/login")}
								>
									OK
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
