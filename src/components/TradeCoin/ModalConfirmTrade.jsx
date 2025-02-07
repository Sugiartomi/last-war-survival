import { useState } from "react"
import { BagHeartFill, ChevronDoubleUp } from "react-bootstrap-icons"

export default function ConfirmTradeCoinModal({
  setWaiting,
  transaction,
  lastPrice,
  saldoAwal,
  qty,
}) {
  const [step, setStep] = useState(1)
  return (
    <>
      <div
        className="modal modal-sm fade"
        id="ConfirmTradeCoinModal"
        tabindex="-1"
        aria-labelledby="ConfirmTradeCoinModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {step === 1 ? (
              <div className="modal-body mx-2">
                <div className="font-roboto fw-600 text-center fs-18">
                  Confirmation
                </div>
                <div className="row mt-2">
                  <div className="col-4">
                    <div className="font-inter fw-400 fs-12">Item</div>
                  </div>
                  <div className="col-4">
                    <div className="font-inter fw-400 fs-12 text-center">
                      Side
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="font-inter fw-400 fs-12 text-end">
                      Server
                    </div>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-4">
                    <div className="font-inter fw-600 fs-16">MBP</div>
                  </div>
                  <div className="col-4">
                    <div
                      className={
                        transaction === "Sell"
                          ? "font-inter fw-600 fs-16 text-center text-danger"
                          : "font-inter fw-600 fs-16 text-center text-success"
                      }
                    >
                      {transaction}
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="font-inter fw-600 fs-16 text-end">AOK</div>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="d-flex justify-content-between">
                  <div className="font-inter fw-400 fs-14">Last Price :</div>
                  <div>
                    <div className="font-roboto fs-16 fw-600 text-success">
                      <span className="ms-2">
                        {(+lastPrice).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="font-inter fw-400 fs-14">Quantity :</div>
                  <div>
                    <div className="font-roboto fs-16 fw-600 text-success">
                      <span className="ms-2">{qty}</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <div className="font-inter fw-400 fs-14">
                    Fee Transaction :
                  </div>
                  <div>
                    <div className="font-roboto fs-16 fw-600 text-danger">
                      0.16%
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-2 align-items-center mt-4">
                  <div className="font-inter fw-400 fs-14">Total :</div>
                  <div>
                    <div className="font-roboto fs-24 fw-600 text-dark">
                      {transaction === "Buy"
                        ? (
                            lastPrice * qty +
                            lastPrice * qty * 0.016
                          ).toLocaleString()
                        : (
                            lastPrice * qty -
                            lastPrice * qty * 0.016
                          ).toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-4 mb-2">
                  <div
                    className="btn w-100 me-2"
                    style={{ backgroundColor: "#EAECEF" }}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <p className="p-0 m-0 font-inter fw-400">Cancel</p>
                  </div>
                  <div
                    className="btn w-100 me-2"
                    style={{ backgroundColor: "#2752E7" }}
                    onClick={() => setStep(2)}
                  >
                    <p
                      className="p-0 m-0 font-inter fw-400 text-white"
                      onClick={() => setWaiting(true)}
                    >
                      {transaction}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="modal-body mx-2">
                <div className="font-roboto fw-600 text-center fs-18">
                  Successful!
                </div>
                <div className="d-flex justify-content-center my-4 text-warning">
                  <BagHeartFill size={96} />
                </div>
                <div className="d-flex mt-4 mb-2">
                  <div
                    className="btn w-100 me-2"
                    style={{ backgroundColor: "#2752E7" }}
                    onClick={() => setStep(1)}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <p className="p-0 m-0 font-inter fw-400 text-white">Ok</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
