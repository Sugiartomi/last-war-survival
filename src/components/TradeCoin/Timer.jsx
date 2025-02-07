import { useState } from "react"
import { DashCircle, PlusCircle } from "react-bootstrap-icons"
import { CountdownCircleTimer } from "react-countdown-circle-timer"

export default function CountdownTimer({ setWaiting }) {
  const [useCrystal, setUseCrystal] = useState(0)
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      setWaiting(false)
      setUseCrystal(0)
      return <div className="timer">...</div>
    }

    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value text-center">{remainingTime}s</div>
      </div>
    )
  }
  function calcCrystal(e) {
    if (e === "minus") {
      if (useCrystal > 0) {
        setUseCrystal(useCrystal - 1)
      }
    } else if (e === "plus") {
      if (useCrystal < 10) {
        setUseCrystal(useCrystal + 1)
      }
    }
  }
  return (
    <>
      <div className="App">
        <div className="font-inter fw-600 fs-14 text-center">Cooling Down</div>
        <div className="font-inter fw-400 fs-14 text-center">
          1 Crsytal = 60 second
        </div>
        <div className="d-flex justify-content-center mt-3">
          <div className="timer-wrapper">
            <CountdownCircleTimer
              isPlaying
              duration={600}
              colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
              onComplete={() => [true, 1000]}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
        </div>
        <div className="font-inter fw-400 fs-14 text-center mt-3">
          Use crystal is restart cooling down
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex justify-content-center">
              <div className="p-1 mt-1">
                <DashCircle
                  className="pointer"
                  onClick={() => calcCrystal("minus")}
                />
              </div>
              <div
                className="font-roboto fw-700 mx-3 py-1"
                style={{ fontSize: 20 }}
              >
                {useCrystal}
              </div>
              <div className="p-1 mt-1">
                <PlusCircle
                  className="pointer"
                  onClick={() => calcCrystal("plus")}
                />
              </div>
            </div>
          </div>
          <div className="col-6 d-flex align-items-center jusitfy-content-center">
            {useCrystal === 0 ? (
              <div
                className="btn btn-success btn-sm w-100"
                data-bs-toggle="modal"
                data-bs-target="#BeliCrystal"
              >
                <p className="p-0 mt-1 mb-0 fs-18">Buy</p>
              </div>
            ) : (
              <div
                className="btn btn-success btn-sm w-100"
                data-bs-toggle="modal"
                data-bs-target="#UseCrystal"
              >
                <p className="p-0 mt-1 mb-0 fs-18">Use</p>
              </div>
            )}
          </div>
          <div className="d-flex justify-content-between border-bottom mt-3">
            <div className="font-inter p-1 text-secondry fw-400 fs-14">
              Owned :
            </div>
            {useCrystal === 0 ? (
              <div className="font-inter  text-secondry fw-600 fs-18">0</div>
            ) : (
              <div className="font-inter  text-secondry fw-600 fs-18">375</div>
            )}
          </div>
          <div className="btn mt-3" style={{ backgroundColor: "#EAECEF" }}>
            TRADE
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="UseCrystal"
        tabindex="-1"
        aria-labelledby="UseCrystalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div
                className="font-roboto fw-600 text-center"
                style={{ fontsize: 26 }}
              >
                Konfirmasi
              </div>
              <div className="font-roboto fw-400 fs-18 text-center mt-3">
                Are you sure to use{" "}
                <strong className="text-danger"> {useCrystal} </strong>Crsytal ?
              </div>
              <div className="d-flex mx-3 mt-3">
                <div
                  className="btn btn-outline-primary w-100 me-3"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </div>
                <div
                  className="btn btn-primary w-100"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setWaiting(false)}
                >
                  Yes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL BELI CRYSTAL */}
      <div
        className="modal modal-md fade"
        id="BeliCrystal"
        tabindex="-1"
        aria-labelledby="BeliCrystalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="d-flex justify-content-between px-4 mt-4">
              <div
                className="modal-title font-inter fw-700"
                style={{ fontSize: 26 }}
                id="BeliCrystalLabel"
              >
                Not enought Crystal
              </div>
            </div>
            <div className="px-4  mt-3 font-inter" style={{ fontSize: 16 }}>
              please deposit or buy package Crystal at{" "}
              <span className="text-primary">web store</span>
            </div>
            <div className="d-flex justify-content-end px-4 mb-3 mt-5 border-0 font-inter">
              <button type="button" className="btn " data-bs-dismiss="modal">
                Cancel
              </button>
              <a
                href="https://lastwar-h5.lastwargame.com/pay/index.html#/login/"
                target="_blank"
              >
                <button
                  type="button"
                  className="btn text-white"
                  style={{ backgroundColor: "#0052CC" }}
                  data-bs-dismiss="modal"
                >
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
