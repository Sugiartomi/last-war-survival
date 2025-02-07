import {
	Check,
	CheckLg,
	CurrencyBitcoin,
	DiamondFill,
	FileEarmark,
	FileEarmarkPost,
	Gem,
	KeyFill,
	PersonVcardFill,
	ShieldShaded,
} from "react-bootstrap-icons";
import { MdSecurity } from "react-icons/md";

export default function Roadmap() {
	return (
		<>
			<div className="row text-center mt-5">
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<PersonVcardFill style={{ fontSize: 36 }} className="text-primary" />
					</div>
				</div>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<MdSecurity style={{ fontSize: 36 }} className="text-primary" />
					</div>
				</div>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<FileEarmarkPost style={{ fontSize: 36 }} className="text-secondary" />
					</div>
				</div>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<KeyFill style={{ fontSize: 36 }} className="text-secondary" />
					</div>
				</div>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<Gem style={{ fontSize: 36 }} className="text-secondary" />
					</div>
				</div>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<CurrencyBitcoin style={{ fontSize: 36 }} className="text-secondary" />
					</div>
				</div>
			</div>
			<div className="row mt-4">
				<div
					class="progress"
					role="progressbar"
					aria-label="Example 1px high"
					aria-valuenow="25"
					aria-valuemin="0"
					aria-valuemax="100"
					style={{ height: "10px" }}
				>
					<div class="progress-bar" style={{ width: "25%" }}></div>
				</div>
			</div>
			<div className="row text-center" style={{ marginTop: -20 }}>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<div
							style={{ width: 30, height: 30 }}
							className="bg-primary rounded-circle border border-light border-5 d-flex justify-content-center"
						>
							<p className="m-0 text-white align-middle"><Check className="fw-bold"  style={{ fontSize : 20, marginTop : -5}} /></p>
						</div>
					</div>
				</div>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<div
							style={{ width: 30, height: 30 }}
							className="bg-primary rounded-circle border border-light border-5 d-flex justify-content-center"
						>
							<p className="m-0 text-white align-middle"><Check className="fw-bold" style={{ fontSize : 20, marginTop : -5}} /></p>
						</div>
					</div>
				</div>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<div
							style={{ width: 30, height: 30 }}
							className="bg-secondary rounded-circle border border-light border-5 d-flex justify-content-center"
						>
							<p className="m-0 text-white align-middle "  style={{ fontSize : 14}}>3</p>
						</div>
					</div>
				</div>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<div
							style={{ width: 30, height: 30 }}
							className="bg-secondary rounded-circle border border-light border-5 d-flex justify-content-center"
						>
							<p className="m-0 text-white align-middle"  style={{ fontSize : 14}}>4</p>
						</div>
					</div>
				</div>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<div
							style={{ width: 30, height: 30 }}
							className="bg-secondary rounded-circle border border-light border-5 d-flex justify-content-center"
						>
							<p className="m-0 text-white align-middle"  style={{ fontSize : 14}}>5</p>
						</div>
					</div>
				</div>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<div
							style={{ width: 30, height: 30 }}
							className="bg-secondary rounded-circle border border-light border-5 d-flex justify-content-center"
						>
							<p className="m-0 text-white align-middle"  style={{ fontSize : 14}}>6</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row text-center mt-3">
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<div
							className="bg-primary d-flex justify-content-center align-items-center"
							style={{ borderRadius: 20 }}
						>
							<p className="mb-0 mt-1 text-white align-middle px-2 py-1 fs-14 fw-bold">
								KYC
							</p>
						</div>
					</div>
				</div>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<div
							className="bg-primary d-flex justify-content-center align-items-center"
							style={{ borderRadius: 20 }}
						>
							<p className="mb-0 mt-1 text-white align-middle px-2 py-1 fs-14 fw-bold">
								Security
							</p>
						</div>
					</div>
				</div>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<div
							className="text-secondary d-flex justify-content-center align-items-center"
							style={{ borderRadius: 20, backgroundColor: "#F0F0F0" }}
						>
							<p className="mb-0 mt-1 text-secondary align-middle px-2 py-1 fs-14">
								App Package
							</p>
						</div>
					</div>
				</div>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<div
							className="text-secondary d-flex justify-content-center align-items-center"
							style={{ borderRadius: 20, backgroundColor: "#F0F0F0" }}
						>
							<p className="mb-0 mt-1 text-secondary align-middle px-2 py-1 fs-14">
								Activation Key
							</p>
						</div>
					</div>
				</div>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<div
							className="text-secondary d-flex justify-content-center align-items-center"
							style={{ borderRadius: 20, backgroundColor: "#F0F0F0" }}
						>
							<p className="mb-0 mt-1 text-secondary align-middle px-2 py-1 fs-14">
								Crystal
							</p>
						</div>
					</div>
				</div>
				<div className="col-2">
					<div className="d-flex justify-content-center">
						<div
							className="text-secondary d-flex justify-content-center align-items-center"
							style={{ borderRadius: 20, backgroundColor: "#F0F0F0" }}
						>
							<p className="mb-0 mt-1 text-secondary align-middle px-2 py-1 fs-14">
								Go To Trade
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
