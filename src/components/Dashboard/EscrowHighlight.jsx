import { InfoCircle } from "react-bootstrap-icons";
import PieChart from "./PieChart";
import PieChartStatic from "./PieChartStatic";

export default function EscrowHighlight({ visibility }) {
	return (
    <>
      <div className="row mt-5">
        <div className="col-6">
          <div className="card h-100">
            <div
              className=" rounded px-4 py-3"
              style={{ backgroundColor: "white" }}
            >
              <div className="d-flex">
                <p className="font-inter fs-18 fw-600" style={{ marginTop: 6 }}>
                  Account PettyCash Highlights
                </p>
              </div>
              <div className="font-inter d-flex justify-content-between py-3">
                <div className="d-flex">
                  <div
                    style={{
                      height: 10,
                      width: 10,
                      marginTop: 5,
                      marginRight: 10,
                    }}
                    className="bg-success rounded"
                  ></div>
                  <div className="fs-14 fw-400">Est. Available Balance</div>
                  <div className="mx-2 fs-14">
                    <InfoCircle />
                  </div>
                </div>
                {visibility ? (
                  <div className="fs-16 fw-600">********</div>
                ) : (
                  <div className="fs-16 fw-600">
                    23.841.580{" "}
                    <span
                      className="text-warning fw-bold"
                      style={{ fontSize: 10 }}
                    >
                      Gold
                    </span>
                  </div>
                )}
              </div>
              <div className="font-inter d-flex justify-content-between py-3">
                <div className="d-flex">
                  <div
                    style={{
                      height: 10,
                      width: 10,
                      marginTop: 5,
                      marginRight: 10,
                    }}
                    className="bg-warning rounded"
                  ></div>
                  <div className="fs-14 fw-400">On Transaction</div>
                  <div className="mx-2 fs-14">
                    <InfoCircle />
                  </div>
                </div>
                {visibility ? (
                  <div className="fs-16 fw-600">******** </div>
                ) : (
                  <div className="fs-16 fw-600">
                    26.283.150{" "}
                    <span
                      className="text-warning fw-bold"
                      style={{ fontSize: 10 }}
                    >
                      Gold
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="card h-100">
            <div
              className=" rounded px-4 py-3"
              style={{ backgroundColor: "white" }}
            >
              <div className="row">
                <div className="col-6">
                  <p
                    className="font-inter fs-18 fw-600"
                    style={{ marginTop: 6 }}
                  >
                    Profit Highlights
                  </p>
                  <div className="font-inter d-flex justify-content-between py-3">
                    <div className="d-flex">
                      <div
                        style={{
                          height: 10,
                          width: 10,
                          marginTop: 5,
                          marginRight: 10,
                        }}
                        className="bg-success rounded"
                      ></div>
                      {visibility ? (
                        <div className="fs-14 fw-400"> ********</div>
                      ) : (
                        <div className="fs-14 fw-400">
                          <span className="fw-bold">SA16</span> 752.000
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="font-inter d-flex justify-content-between py-3">
                    <div className="d-flex">
                      <div
                        style={{
                          height: 10,
                          width: 10,
                          marginTop: 5,
                          marginRight: 10,
                        }}
                        className="bg-warning rounded"
                      ></div>
                      {visibility ? (
                        <div className="fs-14 fw-400"> ********</div>
                      ) : (
                        <div className="fs-14 fw-400">
                          <span className="fw-bold">LBP</span> 390.000
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="font-inter d-flex justify-content-between py-3">
                    <div className="d-flex">
                      <div
                        style={{
                          height: 10,
                          width: 10,
                          marginTop: 5,
                          marginRight: 10,
                        }}
                        className="bg-primary rounded"
                      ></div>
                      {visibility ? (
                        <div className="fs-14 fw-400"> ********</div>
                      ) : (
                        <div className="fs-14 fw-400">
                          {" "}
                          <span className="fw-bold">DP2</span> 88.750
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-6 align-items-center">
                  {visibility ? <PieChartStatic /> : <PieChart />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
