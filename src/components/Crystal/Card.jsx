import { useState } from "react";
import { ExclamationTriangleFill } from "react-bootstrap-icons";

export default function CrystalCard() {
	const [crystal, setCrystal] = useState({
		pcs: 0,
		total: 0,
	});

	const handleBuy = (e) => {
		setCrystal({
			pcs: e.target.value,
			total: e.target.value * 10000,
		});
	};
	return (
		<>
			<div className="font-roboto mt-5 fw-700" style={{ fontSize: 32 }}>
				Crystal - Card
			</div>
			<div className="row px-2 mt-4">
				<div className="card px-5 py-3" style={{ backgroundColor : "#F9F9F9"}}>
					<div className="row">
						<div className="col d-flex align-items-center">
							<div className="d-flex">
								<div className="d-flex">
									<div className="font-inter py-2 fs-16 fw-400">Quantity</div>
									<input
										type="number"
										className="form-control form-control-sm w-75 mx-3 shadow-none"
										onChange={handleBuy}
										min="0"
									/>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="d-flex justify-content-between">
								<div className="d-flex align-items-center">
									<div clasName="font-inter me-4 fs-16 fw-400">Sub Total : </div>
									<div
										className="font-roboto ms-4 fw-700"
										style={{ fontSize: 40 }}
									>
										{crystal.total.toLocaleString().replaceAll(",",".")}
									</div>
								</div>
								<div className="d-flex align-items-center">
									{crystal.pcs == 0 ? (
										<div
											className="btn btn-secondary px-5 py-2"
										>
											Buy
										</div>
									) : (
										<div
											className="btn btn-primary px-5 py-2"
											data-bs-toggle="modal"
											data-bs-target="#CrystalCard"
										>
											Buy
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Modal --> */}
			<div
				className="modal fade"
				id="CrystalCard"
				tabindex="-1"
				aria-labelledby="CrystalCardLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content px-4 py-3">
						{/* <div className="modal-header">
							<div
								className="modal-title fs-5 font-inter fs-14 fw-600"
								id="CrystalCardLabel"
							></div>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div> */}
						<div className="modal-body">
							<div className="font-inter fs-18 fw-600 text-center">
								Payment Information
							</div>
							<hr />
							<div className="row mt-5">
								<div className="col-4 font-roboto fs-14 fw-400">
									<p>Item </p>
									<p>Price </p>
									<p>Quantity </p>
									<p>Total Price </p>
								</div>
								<div className="col-1 font-roboto fs-14 fw-700">
									<p>:</p>
									<p>:</p>
									<p>:</p>
									<p>:</p>
								</div>
								<div className="col-7 font-roboto fs-14 fw-700">
									<p>Crystal</p>
									<p>Rp. 500</p>
									<p>{crystal.pcs.toLocaleString()}</p>
									<p>Rp.{crystal.total.toLocaleString().replaceAll(",",".")}</p>
								</div>
							</div>
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
										Silahkan klik tombol Confirm untuk melanjutkan transaksi dan
										melihat Grand Total yang harus dibayarkan.
									</p>
									<p className="font-inter fs-14 fw-400 text-primary">
										{" "}
										Lihat Selengkapnya
									</p>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-sm" data-bs-dismiss="modal">
								Cancel
							</button>
							<button type="button" className="btn btn-sm btn-primary px-3">
								Confirm
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
