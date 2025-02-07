import { useEffect, useState } from "react"
import {
  ChevronDoubleDown,
  ChevronDoubleUp,
  DashCircle,
  ExclamationDiamondFill,
  GearFill,
  Gem,
  PlusCircle,
} from "react-bootstrap-icons"
import Footer from "../components/Reusble/Footer"
import NavbarTrue from "../components/Reusble/NavbarTrue"
import Card3TradeCoin from "../components/TradeCoin/Card3"
import ConfirmTradeCoinModal from "../components/TradeCoin/ModalConfirmTrade"
import CountdownTimer from "../components/TradeCoin/Timer"

export default function TradeCoin() {
  const [waiting, setWaiting] = useState(false)
  const [transaction, setTransaction] = useState("Buy")
  const saldoAwal = 50124730
  const lastPrice = 13855750

  const [saldo, setSaldo] = useState(0)
  const [qty, setQty] = useState(0)

  useEffect(() => {
    if (saldo !== 0) {
      setQty(saldo / lastPrice)
    }
  }, [saldo])

  useEffect(() => {
    if (qty !== 0) {
      setSaldo(qty * lastPrice)
    } else {
      setSaldo(0)
    }
  }, [qty])

  function ReuseGold() {
    return (
      <span className="text-warning fw-bold" style={{ fontSize: 10 }}>
        Gold
      </span>
    )
  }

  return (
    <>
      <NavbarTrue />
      <div className="container-fluid" style={{ padding: "24px 72px" }}>
        {/* 3CARD */}
        <Card3TradeCoin />
        <div className="row mt-5">
          <div className="col-9 p-1 pe-2">
            <div className="card p-3 h-100">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="d-flex align-items-center border rounded py-2 px-4 bg-primary opacity-75">
                    <div
                      className="font-roboto fw-600 text-white"
                      style={{ fontSize: 26 }}
                    >
                      Trade - Mhytic Blueprint
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5 mb-3">
                <div className="col font-roboto fw-400 fs-18 text-secondary ">
                  Server Name
                </div>
                <div className="col font-roboto fw-400 fs-18 text-success fw-bold ">
                  Buy
                </div>
                <div className="col font-roboto fw-400 fs-18 text-danger fw-bold">
                  Sell
                </div>
                <div className="col font-roboto fw-400 fs-18 text-secondary"></div>
              </div>
              <div className="row mt-2">
                <div className="col font-roboto fw-600 fs-16 ">
                  AOK Korea Server
                </div>
                <div className="col font-roboto fw-600 fs-16 ">
                  13.855.750{" "}
                  <span
                    className="text-warning fw-bold"
                    style={{ fontSize: 10 }}
                  >
                    Gold
                  </span>
                </div>
                <div className="col font-roboto fw-600 fs-16 ">
                  13.565.000{" "}
                  <span
                    className="text-warning fw-bold"
                    style={{ fontSize: 10 }}
                  >
                    Gold
                  </span>
                </div>
                <>
                  <div className="col font-roboto text-secondary fw-600 fs-16">
                    <span className="text-danger">*</span> current server
                    <div className="font-inter fw-100 fs-14 text-secondary mt-1">
                      {/* <ChevronDoubleDown /> */}

                      <div>
                        <span className="me-2">
                          <GearFill />
                        </span>
                        Owned :{" "}
                        <strong className="text-success fw-bold">1 item</strong>
                      </div>
                    </div>
                  </div>
                </>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col font-roboto fw-600 fs-16 ">
                  Guardian Server 1
                </div>
                <div className="col font-roboto fw-600 fs-16 ">
                  14.055.000{" "}
                  <span
                    className="text-warning fw-bold"
                    style={{ fontSize: 10 }}
                  >
                    Gold
                  </span>
                </div>
                <div className="col font-roboto fw-600 fs-16 ">
                  13.785.025{" "}
                  <span
                    className="text-warning fw-bold"
                    style={{ fontSize: 10 }}
                  >
                    Gold
                  </span>
                </div>
                <div className="col font-roboto fw-600 fs-16">
                  <div
                    className="d-flex"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <div
                      className="btn btn-sm w-100 me-2"
                      style={{ backgroundColor: "#EAECEF" }}
                    >
                      Buy
                    </div>
                    <div
                      className="btn btn-sm w-100"
                      style={{ backgroundColor: "#EAECEF" }}
                    >
                      Sell
                    </div>
                  </div>
                  <div className="font-inter fw-100 fs-14 text-danger mt-1">
                    <ChevronDoubleDown />
                    <span className="ms-2">199.250</span>
                  </div>

                  <div className="font-inter fw-100 fs-14 text-secondary mt-1">
                    {/* <ChevronDoubleDown /> */}
                    <GearFill />
                    <span className="ms-2">Owned : 0 item</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row mt-2">
                <div className="col font-roboto fw-600 fs-16 ">
                  IDN IndoJaya
                </div>
                <div className="col font-roboto fw-600 fs-16 ">
                  13.685.850{" "}
                  <span
                    className="text-warning fw-bold"
                    style={{ fontSize: 10 }}
                  >
                    Gold
                  </span>
                </div>
                <div className="col font-roboto fw-600 fs-16 ">
                  13.275.000{" "}
                  <span
                    className="text-warning fw-bold"
                    style={{ fontSize: 10 }}
                  >
                    Gold
                  </span>
                </div>
                <div className="col font-roboto fw-600 fs-16">
                  <div
                    className="d-flex"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <div
                      className="btn btn-sm w-100 me-2"
                      style={{ backgroundColor: "#EAECEF" }}
                    >
                      Buy
                    </div>
                    <div
                      className="btn btn-sm w-100"
                      style={{ backgroundColor: "#EAECEF" }}
                    >
                      Sell
                    </div>
                  </div>
                  <div className="font-inter fw-100 fs-14 text-success mt-1">
                    {/* <ChevronDoubleDown /> */}
                    <ChevronDoubleUp />
                    <span className="ms-2">169.900</span>
                  </div>
                  <div className="font-inter fw-100 fs-14 text-secondary mt-1">
                    {/* <ChevronDoubleDown /> */}
                    <GearFill />
                    <span className="ms-2">Owned : 0 item</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 p-1 ps-2">
            {!waiting ? (
              <div className="card p-3 h-100">
                <div
                  className="font-roboto fw-700 text-center"
                  style={{ fontSize: 24 }}
                >
                  Trade
                </div>
                <div
                  className="font-inter fw-400 mt-4"
                  style={{ fontSize: 18 }}
                >
                  Last Price :<strong className="ms-3">13.855.750</strong>{" "}
                  <ReuseGold />
                </div>
                <div
                  className="font-inter fw-400 my-2"
                  style={{ fontSize: 18 }}
                >
                  Owned:<strong className="ms-3">1 pcs</strong>{" "}
                </div>
                <div className="d-flex mt-2">
                  <div>
                    <ExclamationDiamondFill
                      className="text-danger me-2"
                      style={{ fontSize: 20 }}
                    />
                  </div>
                  <div className="font-inter fw-400" style={{ fontSize: 10 }}>
                    Prices may change slightly due to market fluctuations.
                    Please review it carefully before confirming the
                    transaction.
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-3">
                    <div
                      className="btn w-100"
                      style={{ backgroundColor: "#F1F1F1" }}
                      onClick={() =>
                        setSaldo(
                          Math.floor((saldoAwal * 0.25) / lastPrice).toFixed(
                            0
                          ) * lastPrice
                        )
                      }
                    >
                      <p className=" font-inter fw-600 fs-14 p-0 m-0">25%</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div
                      className="btn w-100"
                      style={{ backgroundColor: "#F1F1F1" }}
                      onClick={() =>
                        setSaldo(
                          Math.floor((saldoAwal * 0.5) / lastPrice).toFixed(0) *
                            lastPrice
                        )
                      }
                    >
                      <p className=" font-inter fw-600 fs-14 p-0 m-0">50%</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div
                      className="btn w-100"
                      style={{ backgroundColor: "#F1F1F1" }}
                      onClick={() =>
                        setSaldo(
                          Math.floor((saldoAwal * 0.75) / lastPrice).toFixed(
                            0
                          ) * lastPrice
                        )
                      }
                    >
                      <p className=" font-inter fw-600 fs-14 p-0 m-0">75%</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div
                      className="btn w-100  "
                      style={{ backgroundColor: "#F1F1F1" }}
                      onClick={() =>
                        setSaldo(
                          Math.floor((saldoAwal * 1) / lastPrice).toFixed(0) *
                            lastPrice
                        )
                      }
                    >
                      <p className=" font-inter fw-600 fs-14 p-0 m-0">MAX</p>
                    </div>
                  </div>
                </div>
                <div
                  className="row mt-3 py-3 mx-1"
                  style={{ backgroundColor: "#F1F1F1" }}
                >
                  <div
                    className="font-roboto fw-700 text-center"
                    style={{ fontSize: 28 }}
                  >
                    {saldo.toLocaleString()} <ReuseGold />
                  </div>
                </div>
                <div className="font-inter fw-600 text-danger mt-2">
                  <span className="ms-2" style={{ fontSize: 8 }}>
                    Fee Transaction 0.16%
                  </span>
                </div>
                <div className="mt-4">
                  <div className="d-flex justify-content-between p-2">
                    <div>Quantity :</div>
                    <div className="d-flex align-items-center">
                      <div
                        className="fs-18  rounded d-flex align-items-center justify-content-center fw-bold bg-secondary text-white me-4"
                        style={{ width: 20, height: 20 }}
                        onClick={() => {
                          if (qty > 0) {
                            setQty(qty - 1)
                          }
                        }}
                      >
                        -
                      </div>
                      <div className="fs-24">{qty}</div>
                      <div
                        className="fs-18  rounded d-flex align-items-center justify-content-center fw-bold bg-secondary text-white ms-4"
                        style={{ width: 20, height: 20 }}
                        onClick={() => setQty(qty + 1)}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex mt-3">
                  {qty === 1 ? (
                    <div
                      className="btn btn-danger mt-3 text-white w-100"
                      // style={{ backgroundColor: "#2752E7" }}
                      data-bs-toggle="modal"
                      data-bs-target="#ConfirmTradeCoinModal"
                      onClick={() => setTransaction("Sell")}
                    >
                      <p className="p-0 m-0 font-inter fw-600 fs-18"> Sell</p>
                    </div>
                  ) : (
                    <div
                      className="btn btn-secondary mt-3 text-white w-100"
                      // style={{ backgroundColor: "#2752E7" }}

                      onClick={() => setTransaction("Sell")}
                    >
                      <p className="p-0 m-0 font-inter fw-600 fs-18"> Sell</p>
                    </div>
                  )}

                  <div
                    className="btn btn-success mt-3 text-white w-100 ms-3"
                    // style={{ backgroundColor: "#2752E7" }}
                    data-bs-toggle="modal"
                    data-bs-target="#ConfirmTradeCoinModal"
                    onClick={() => setTransaction("Buy")}
                  >
                    <p className="p-0 m-0 font-inter fw-600 fs-18"> Buy</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card p-3">
                <CountdownTimer setWaiting={setWaiting} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      <ConfirmTradeCoinModal
        setWaiting={setWaiting}
        transaction={transaction}
        lastPrice={lastPrice}
        qty={qty}
        saldoAwal={saldoAwal}
      />

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Under Maintenance!
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Sorry, trade item across server under maintenance. <br /> Wait for
              2 hour and try again!
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
