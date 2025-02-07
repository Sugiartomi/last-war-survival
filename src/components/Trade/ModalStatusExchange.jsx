import { CheckCircleFill, XCircleFill } from "react-bootstrap-icons";

export default function ModalStatusExchange() {
	return (
		<>
			<div
				className="modal modal-sm fade"
				id="statusExchangeModal"
				tabindex="-1"
				aria-labelledby="statusExchangeModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-body">
							<div className="row">
								<div className="col-6 font-inter fs-14">Exchange</div>
								<div className="col-6 font-inter fs-14 text-center">Status</div>
							</div>
							<div className="d-flex justify-content-between align-items-center p-2 mt-3">
								<div className="text-secondary font-roboto fs-16">
									digitalexchange.id
								</div>
								<div className="text-secondary font-roboto">
									<CheckCircleFill className="text-success" />
									<span className="fs-16 ms-2">Connected</span>
								</div>
							</div>
							<div className="d-flex justify-content-between align-items-center p-2">
								<div className="text-secondary font-roboto fs-16">
									Binance
								</div>
								<div className="text-secondary font-roboto">
									<CheckCircleFill className="text-success" />
									<span className="fs-16 ms-2">Connected</span>
								</div>
							</div>
							<div className="d-flex justify-content-between align-items-center p-2">
								<div className="text-secondary font-roboto fs-16">
									OKX
								</div>
								<div className="text-secondary font-roboto">
									<CheckCircleFill className="text-success" />
									<span className="fs-16 ms-2">Connected</span>
								</div>
							</div>
							<div className="d-flex justify-content-between align-items-center p-2">
								<div className="text-secondary font-roboto fs-16">
									HUOBI
								</div>
								<div className="text-secondary font-roboto">
									<CheckCircleFill className="text-success" />
									<span className="fs-16 ms-2">Connected</span>
								</div>
							</div>
							<div className="d-flex justify-content-between align-items-center p-2">
								<div className="text-secondary font-roboto fs-16">
									INDODAX
								</div>
								<div className="text-secondary font-roboto">
									<XCircleFill className="text-danger" />
									<span className="fs-16 ms-2">Unconnect</span>
								</div>
							</div>
				
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
