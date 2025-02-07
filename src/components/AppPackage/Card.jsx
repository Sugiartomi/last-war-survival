import { useState } from "react";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
export default function AppPackageCard() {
	const [total, setTotal] = useState(0);
	const [sum, setSum] = useState(0);
	
	const buyPackage = (e) => {
		setSum(e.target.value);
		setTotal(e.target.value * 200000);
	};

	return (
		<>
			<div className="font-roboto mt-5" style={{ fontSize: 32, fontWeight: 700 }}>
				App Package - Card
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
										onChange={buyPackage}
										min="0"
										max="10"
									/>
								</div>
								<div className="font-inter py-2 fs-16 fw-400">Max 10</div>
							</div>
						</div>
						<div className="col">
							<div className="d-flex justify-content-between">
								<div className="d-flex align-items-center">
									<div className="font-inter me-4 fs-16 fw-400">total : </div>
									<div
										className="font-roboto ms-4 fw-700"
										style={{ fontSize: 40 }}
									>
										{total.toLocaleString().replaceAll(",", ".")}
									</div>
								</div>
								{console.log(sum)}
								{sum == 0 ? (
									<div className="d-flex align-items-center">
										<div
											className="btn btn-secondary px-5 py-2"
										>
											Rent
										</div>
									</div>
								) : (
									<div className="d-flex align-items-center">
										<div
											className="btn btn-primary px-5 py-2"
											data-bs-toggle="modal"
											data-bs-target="#AppPackageCard"
										>
											Rent
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Modal --> */}
			<div
				className="modal fade"
				id="AppPackageCard"
				tabindex="-1"
				aria-labelledby="AppPackageCardLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content px-4 py-3">
						{/* <div className="modal-header">
							<div
								className="modal-title fs-5 font-inter fs-14 fw-600"
								id="AppPackageCardLabel"
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
									<p>App Package</p>
									<p>Rp. 200.000</p>
									<p>{sum}</p>
									<p>Rp. {total.toLocaleString().replaceAll(",", ".")}</p>
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
