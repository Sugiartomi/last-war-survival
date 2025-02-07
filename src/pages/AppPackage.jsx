import Footer from "../components/Reusble/Footer"
import NavbarTrue from "../components/Reusble/NavbarTrue"
import { Outlet } from "react-router-dom"
import img_avatar from "../assets/img/packagetobuy.png"
import { Gem } from "react-bootstrap-icons"
import { useState } from "react"

export default function AppPackage() {
  const [input, setInput] = useState(0)
  return (
    <>
      <div
        className="d-flex justify-content-between"
        style={{ minHeight: "100vh", flexDirection: "column" }}
      >
        <div>
          <NavbarTrue />
          <div className="container-fluid" style={{ padding: "24px 72px" }}>
            <div className="row">
              {/* kiri */}
              <div className="col-8">
                <div className="card pe-4 h-100">
                  <div className="d-flex justify-content-between p-5">
                    <div className="">
                      <div className="row">
                        <div className="col d-flex justify-content-center align-items-center">
                          <img
                            src={img_avatar}
                            className="img-fluid"
                            alt=""
                            style={{ width: " 75%" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <div className="font-inter text-secondary fs-14 fw-400">
                        Account Balance :
                      </div>
                      <div className="font-roboto fs-48 fw-700">
                        50.124.730 <span className="fs-16">Gold</span>
                      </div>
                      <div className="font-inter text-secondary fs-14 fw-400">
                        Quantity :
                      </div>
                      <div className="font-roboto fw-700 d-flex justify-content-around align-items-center">
                        <div
                          style={{ fontSize: 48 }}
                          onClick={input > 0 ? () => setInput(input - 1) : ""}
                        >
                          -
                        </div>
                        <div className="fs-48 ">{input}</div>
                        <div
                          style={{ fontSize: 30 }}
                          onClick={() => setInput(input + 1)}
                        >
                          +
                        </div>
                      </div>

                      <div className="font-roboto fs-48 fw-700 mt-5 bg-warning rounded text-center text-white py-2">
                        Buy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* kanan */}
              <div className="col-4">
                <div className="card ps-4 h-100 gradient-blue">
                  <div className="p-3">
                    <div
                      className="font-inter text-white"
                      style={{ fontSize: 20, fontWeight: 400 }}
                    >
                      App Package
                    </div>
                    <div className="font-roboto text-white fs-48 fw-700">
                      313.750 <span className="fs-16">Gold</span>
                    </div>
                    <div
                      className="font-inter text-white fs-14 fw-400"
                      style={{ marginTop: -10 }}
                    >
                      (Include Tax)
                    </div>
                    <div className="font-inter text-white mt-3 fs-14 fw-400">
                      1. 8M Iron
                    </div>
                    <div className="font-inter text-white fs-14 fw-400">
                      2. 8M Food
                    </div>
                    <div className="font-inter text-white fs-14 fw-400">
                      3. 8M Hero Exp
                    </div>
                    <div className="font-inter text-white fs-14 fw-400">
                      4. Glory Name Banner (7 days)
                    </div>
                    <div className="font-inter text-white fs-14 fw-400">
                      5. Extra 1 field of troops (7 days)
                    </div>
                    <div className="font-inter text-white fs-14 fw-400">
                      6. VIP Status (30 days)
                    </div>
                    <div className="font-inter text-white fs-14 fw-400">
                      7. 200 Crystal
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <Outlet /> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
