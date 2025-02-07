import img_wallet from "../../assets/img/wallet.png"
import img_refresh from "../../assets/img/refresh-sign.png"
import img_hand_dollar from "../../assets/img/hand-dollar.png"

import {
  ArrowUpCircleFill,
  BoxSeam,
  Bullseye,
  Gem,
  Key,
  KeyFill,
  PaintBucket,
  WalletFill,
} from "react-bootstrap-icons"

export default function BalancePackage({ visibility }) {
  return (
    <>
      <div className="row mt-3">
        <div className="col-3">
          {/* <div className="card border-0 h-100"  style={{ backgroundColor: "#2752E7" }}> */}
          <div
            className="card border-0 h-100"
            style={{ backgroundColor: "black" }}
          >
            <div className=" rounded px-4 py-3">
              <div className="d-flex">
                {/* <img
                  src={img_wallet}
                  alt=""
                  className="img-fluid me-2"
                  style={{ width: "32px", height: "32px" }}
                /> */}
                <WalletFill className="text-white" size={35} />
                <p
                  className="text-white font-inter fs-14 fw-600 ms-3"
                  style={{ marginTop: 6 }}
                >
                  Est. Balance
                </p>
              </div>

              {visibility ? (
                <>
                  <p className="text-white font-inter m-0 mt-2 fs-16 fw-600">
                    ********{" "}
                  </p>
                </>
              ) : (
                <>
                  <p
                    className="text-white fw-inter m-0 fw-600"
                    style={{ fontSize: 26 }}
                  >
                    50.124.730{" "}
                    <span
                      className="text-warning fw-bold"
                      style={{ fontSize: 10 }}
                    >
                      Gold
                    </span>
                  </p>
                </>
              )}

              <p
                className="fw-bold p-1 pb-0 mb-0 fs-14 d-flex ps-0"
                style={{ color: "#53D258" }}
              >
                <div className="border px-3 py-1 rounded bg-white ">
                  <span className="fw-bold me-2">
                    <ArrowUpCircleFill />
                  </span>
                  +2.45%
                </div>
              </p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card h-100">
            <div
              className=" rounded px-4 py-3"
              style={{ backgroundColor: "white" }}
            >
              <div className="d-flex">
                {/* <img
                  src={img_refresh}
                  alt=""
                  className="img-fluid me-2"
                  style={{ width: "32px", height: "32px" }}
                /> */}
                <BoxSeam className="text-secondary" size={35} />

                <p
                  className="font-inter fs-14 fw-600 ms-3"
                  style={{ marginTop: 6 }}
                >
                  Total App Package
                </p>
              </div>
              {visibility ? (
                <p
                  className="font-inter p-1 pb-0 mb-0 fw-600"
                  style={{ fontSize: 30 }}
                >
                  ***
                </p>
              ) : (
                <p
                  className="font-inter p-1 pb-0 mb-0"
                  style={{ fontSize: 30, fontWeight: 600 }}
                >
                  55
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card h-100">
            <div
              className=" rounded px-4 py-3"
              style={{ backgroundColor: "white" }}
            >
              <div className="d-flex">
                {/* <img
                  src={img_hand_dollar}
                  alt=""
                  className="img-fluid me-2"
                  style={{ width: "32px", height: "32px" }}
                /> */}
                <Bullseye className="text-secondary" size={35} />

                <p
                  className="font-inter fs-14 fw-600 ms-3"
                  style={{ marginTop: 6 }}
                >
                  Total Activation Key
                </p>
              </div>
              {visibility ? (
                <p
                  className="font-inter p-1 pb-0 mb-0 fw-600"
                  style={{ fontSize: 30 }}
                >
                  ***
                </p>
              ) : (
                <p
                  className="font-inter p-1 pb-0 mb-0 fw-600"
                  style={{ fontSize: 30 }}
                >
                  14
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="card h-100">
            <div
              className=" rounded px-4 py-3"
              style={{ backgroundColor: "white" }}
            >
              <div className="d-flex">
                {/* <img
                  src={img_hand_dollar}
                  alt=""
                  className="img-fluid me-2"
                  style={{ width: "32px", height: "32px" }}
                /> */}
                <Gem className="text-secondary" size={32} />

                <p
                  className="font-inter fs-14-fw-600 ms-3"
                  style={{ marginTop: 6 }}
                >
                  Total Crystal
                </p>
              </div>
              {visibility ? (
                <p
                  className="font-inter p-1 pb-0 mb-0 fw-600"
                  style={{ fontSize: 30 }}
                >
                  ***
                </p>
              ) : (
                <p
                  className="font-inter p-1 pb-0 mb-0 fw-600"
                  style={{ fontSize: 30 }}
                >
                  4
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
