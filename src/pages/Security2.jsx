import {
  CheckCircle,
  CheckCircleFill,
  DashCircle,
  ExclamationCircleFill,
} from "react-bootstrap-icons"
import Footer from "../components/Reusble/Footer"
import NavbarTrue from "../components/Reusble/NavbarTrue"
import { useNavigate } from "react-router-dom"
import { AiFillLock } from "react-icons/ai"
import img_phone from "../assets/img/phone-checklist.svg"
import img_pin from "../assets/img/pin-checklist.svg"
import img_2fa from "../assets/img/google2fa-checklist.svg"
import img_whitelist from "../assets/img/ipwhitelist-checklist.svg"
import { useEffect, useState } from "react"
import AddPhoneNumber from "../components/Security2/AddPhoneNumber"
import PhoneNumberFalse from "../components/Security2/PhoneNumberFalse"
import PinSecurity from "../components/Security2/PinSecurity"
import ResetPin from "../components/Security2/ResetPin"
import Reset2fa from "../components/Security2/Reset2fa"

export default function Security2() {
  const navigate = useNavigate()
  const [security, setSecurity] = useState(0)
  const [status, setStatus] = useState({
    phonenumber: true,
    pin: false,
    "2fa": false,
  })

  useEffect(() => {
    if (localStorage.status2fa === "success") {
      setStatus({
        phonenumber: true,
        pin: true,
        "2fa": true,
      })
    }
  }, [])
  useEffect(() => {
    let count = []
    for (const key in status) {
      const res = status[key]
      if (res === true) {
        count.push("plus")
      }
    }
    setSecurity(count.length)
  }, [status])

  window.onbeforeunload = function () {
    return localStorage.setItem("status2fa", "invalid")
  }

  return (
    <>
      <NavbarTrue />

      <div
        className="d-flex justify-content-between"
        style={{ backgroundColor: "	rgb(192,192,192,0.2)" }}
      >
        <div className="font-roboto fw-700 px-5 py-4" style={{ fontSize: 32 }}>
          Security
        </div>
        <div className="text-muted px-5 py-4" style={{ fontSize: 32 }}>
          <AiFillLock />
        </div>
      </div>
      <div className="container-fluid" style={{ padding: "24px 72px 0px" }}>
        <div className="col-6 font-roboto fw-700 mt-5" style={{ fontSize: 32 }}>
          Google Authentication (2FA)
        </div>
        <div className="mt-4">
          <div className="row">
            <div className="col-6 font-roboto fw-400" style={{ fontSize: 20 }}>
              Biometric Auth
              <div className="font-inter fw-400 fs-14">
                Protect your account and withdrawal with biometric security
              </div>
            </div>

            <div
              className="col-3 d-flex align-items-center font-roboto fw-400 text-success"
              style={{ fontSize: 20 }}
            >
              <CheckCircleFill /> <span className="mx-2"> active</span>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-end">
              {/* <div className="btn btn-sm btn-secondary">Atur</div> */}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6 font-roboto fw-400" style={{ fontSize: 20 }}>
              Google Authenticator (Recomended)
              <div className="font-inter fw-400 fs-14">
                use for withdrawal transaction and change security setting
              </div>
            </div>

            <div
              className="col-3 d-flex align-items-center font-roboto fw-400 text-success"
              style={{ fontSize: 20 }}
            >
              <CheckCircleFill /> <span className="mx-2"> active</span>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-end">
              {/* <div className="btn btn-sm btn-secondary">Reset</div> */}
            </div>
          </div>
        </div>
        <hr style={{ margin: "50px 0px" }} />
        <div className="col-6 font-roboto fw-700" style={{ fontSize: 32 }}>
          Email Verification
        </div>
        <div className="mt-4">
          <div className="row">
            <div className="col-6 font-roboto fw-400" style={{ fontSize: 20 }}>
              Phone Number Verfication
              <div className="font-inter fw-400 fs-14">
                Protect your account and transaction
              </div>
            </div>

            <div
              className="col-3 d-flex align-items-center font-roboto fw-400 text-success"
              style={{ fontSize: 20 }}
            >
              <CheckCircleFill /> <span className="mx-2"> 856*****327</span>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-end">
              {/* <div className="btn btn-sm btn-secondary">Ubah</div> */}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6 font-roboto fw-400" style={{ fontSize: 20 }}>
              Email Verification
              <div className="font-inter fw-400 fs-14">
                Protect your account and transaction
              </div>
            </div>

            <div
              className="col-3 d-flex align-items-center font-roboto fw-400 text-success"
              style={{ fontSize: 20 }}
            >
              <CheckCircleFill />{" "}
              <span className="mx-2"> hall***@gmail.com</span>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-end">
              {/* <div className="btn btn-sm btn-secondary">Reset</div> */}
            </div>
          </div>
        </div>
        <hr style={{ margin: "100px 0px" }} />
        <div className="col-6 font-roboto fw-700" style={{ fontSize: 32 }}>
          Advance Security Setting
        </div>
        <div className="mt-4 mb-5   ">
          <div className="d-flex justify-content-between">
            <div className="font-roboto fw-400" style={{ fontSize: 20 }}>
              Password
              <div className="font-inter fw-400 fs-14">
                set password for login yourr account and secure transaction
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              {/* <div className="btn btn-sm btn-secondary">Atur ulang kata sandi</div> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid mb-5"
        style={{ padding: "24px 72px 0px" }}
      >
        <div className="font-roboto fw-600" style={{ fontSize: 20 }}>
          Status of Account Security:{" "}
          {security == 2 ? (
            <span
              className="py-1 px-3 text-warning  rounded ms-2"
              style={{ backgroundColor: "#FEF1F2" }}
            >
              Medium
            </span>
          ) : security == 3 ? (
            <span
              className="py-1 px-3 text-success  rounded ms-2"
              style={{ backgroundColor: "#E8FFF7" }}
            >
              High
            </span>
          ) : (
            <span
              className="py-1 px-3 text-danger  rounded ms-2"
              style={{ backgroundColor: "#FEF1F2" }}
            >
              Low
            </span>
          )}
        </div>
        <div className="row mt-4">
          <div className="col-6">
            <div className="card h-100 px-5 py-4">
              <div
                className="font-roboto fw-700 d-flex"
                style={{ fontSize: 20 }}
              >
                <>1. Phone Number Activation</>
                {status.phonenumber ? (
                  <>
                    <div
                      className="text-center rounded-circle ms-2 text-success"
                      style={{ marginTop: -3 }}
                    >
                      <CheckCircle />
                    </div>
                    <div className="text-center rounded-circle ms-2 text-muted fs-14 mt-1">
                      Verified
                    </div>
                  </>
                ) : (
                  <div
                    className="text-center rounded-circle ms-2 text-danger"
                    style={{ marginTop: -3 }}
                  >
                    <DashCircle />
                  </div>
                )}
              </div>
              <div className="row mt-3">
                <div className="col-2">
                  <img
                    src={img_phone}
                    className="img-fluid mt-1"
                    style={{ float: "right" }}
                    alt=""
                  />
                </div>
                <div className="col">
                  <div className="font-roboto fw-600">
                    Phone Number Activation
                  </div>
                  <p className="font-inter fs-14 mb-0 mt-2">
                    To protect the security of your account, please verify the
                    number your phone.We will not use your phone number for
                    other purposes.
                  </p>
                  {status.phonenumber ? (
                    <div
                      className="btn btn-sm mt-3 mb-4 opacity-50"
                      style={{ backgroundColor: "#2752E7" }}
                    >
                      <p className="mb-0 text-roboto text-white px-3">
                        Verified
                      </p>
                    </div>
                  ) : (
                    <div
                      className="btn btn-sm mt-3 mb-4"
                      style={{ backgroundColor: "#2752E7" }}
                    >
                      <p
                        className="mb-0 text-roboto text-white px-3"
                        data-bs-toggle="modal"
                        data-bs-target="#AddPhoneNumber"
                      >
                        Kirim Kode Aktivasi
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card h-100 px-5 py-4">
              <div
                className="font-roboto fw-700 d-flex"
                style={{ fontSize: 20 }}
              >
                <>2. PIN</>
                {status.pin ? (
                  <>
                    <div
                      className="text-center rounded-circle ms-2 text-success"
                      style={{ marginTop: -3 }}
                    >
                      <CheckCircle />
                    </div>
                    <div
                      className="text-center rounded-circle ms-2 fs-14 text-muted mt-1"
                      style={{ marginTop: -3 }}
                    >
                      Active
                    </div>
                  </>
                ) : (
                  <div
                    className="text-center rounded-circle ms-2 text-danger"
                    style={{ marginTop: -3 }}
                  >
                    <DashCircle />
                  </div>
                )}
              </div>
              <div className="row mt-3">
                <div className="col-2">
                  <img
                    src={img_pin}
                    className="img-fluid mt-1"
                    style={{ float: "right" }}
                    alt=""
                  />
                </div>
                <div className="col">
                  <div className="font-roboto fw-600">
                    Personal Identification Number
                  </div>
                  <p className="font-inter fs-14 mb-0 mt-2">
                    PIN Guard helps prevent withdrawal access to your account by
                    asking for a PIN.
                  </p>
                  {status.phonenumber ? (
                    status.pin ? (
                      <div
                        className="btn btn-sm btn-outline-primary mt-3 mb-4"
                        data-bs-toggle="modal"
                        data-bs-target="#ResetPinSecurity"
                      >
                        <p className="mb-0 text-roboto text-primary px-3">
                          Change
                        </p>
                      </div>
                    ) : (
                      <div
                        className="btn btn-sm mt-3 mb-4"
                        style={{ backgroundColor: "#2752E7" }}
                        data-bs-toggle="modal"
                        data-bs-target="#PinSecurity"
                      >
                        <p className="mb-0 text-roboto text-white px-3">
                          Activate
                        </p>
                      </div>
                    )
                  ) : (
                    <div
                      className="btn btn-sm mt-3 mb-4"
                      style={{ backgroundColor: "#2752E7" }}
                      data-bs-toggle="modal"
                      data-bs-target="#PhoneNumberFalse"
                    >
                      <p className="mb-0 text-roboto text-white px-3">done</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6">
            <div className="card h-100 px-5 py-4">
              <div
                className="font-roboto fw-700 d-flex"
                style={{ fontSize: 20 }}
              >
                <>3. Google 2FA</>

                {status["2fa"] ? (
                  <>
                    <div
                      className="text-center rounded-circle ms-2 text-success"
                      style={{ marginTop: -3 }}
                    >
                      <CheckCircle />
                    </div>
                    <div
                      className="text-center rounded-circle ms-2 fs-14 text-muted mt-1"
                      style={{ marginTop: -3 }}
                    >
                      Active
                    </div>
                  </>
                ) : (
                  <div
                    className="text-center rounded-circle ms-2 text-danger"
                    style={{ marginTop: -3 }}
                  >
                    <DashCircle />
                  </div>
                )}
              </div>
              <div className="row mt-3">
                <div className="col-2">
                  <img
                    src={img_2fa}
                    className="img-fluid mt-1"
                    style={{ float: "right" }}
                    alt=""
                  />
                </div>
                <div className="col">
                  <div className="font-roboto fw-600">Google Authenticator</div>
                  <p className="font-inter fs-14 mb-0 mt-2">
                    Google 2FA authentication helps prevent unauthorized access
                    to your account by requesting a one-time password after
                    every time you try to log in.
                  </p>
                  {status.phonenumber ? (
                    status["2fa"] ? (
                      <div
                        className="btn btn-sm btn-outline-primary mt-3 mb-4"
                        data-bs-toggle="modal"
                        data-bs-target="#askChange2fa"
                      >
                        <p className="mb-0 text-roboto text-primary px-3">
                          Change
                        </p>
                      </div>
                    ) : (
                      <div
                        className="btn btn-sm mt-3 mb-4"
                        style={{ backgroundColor: "#2752E7" }}
                      >
                        <p
                          className="mb-0 text-roboto text-white px-3"
                          onClick={() => navigate("/2fa")}
                        >
                          Activate
                        </p>
                      </div>
                    )
                  ) : (
                    <div
                      className="btn btn-sm mt-3 mb-4"
                      style={{ backgroundColor: "#2752E7" }}
                      data-bs-toggle="modal"
                      data-bs-target="#PhoneNumberFalse"
                    >
                      <p className="mb-0 text-roboto text-white px-3">Done</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card h-100 px-5 py-4">
              <div
                className="font-roboto fw-700 d-flex"
                style={{ fontSize: 20 }}
              >
                <>4. IP Whitelist</>
                <div
                  className="text-center rounded-circle ms-2"
                  style={{ marginTop: -3 }}
                >
                  <ExclamationCircleFill style={{ color: "#7D97F1" }} />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-2">
                  <img
                    src={img_whitelist}
                    className="img-fluid mt-1"
                    style={{ float: "right" }}
                    alt=""
                  />
                </div>
                <div className="col">
                  <div className="font-roboto fw-600">Whitelist</div>
                  <p className="font-inter fs-14 mb-0 mt-2">
                    Address management allows you to organize access login using
                    a specific IP. Aim to help protect your account by only
                    allowing addresses that are whitelisted.
                  </p>
                  <div
                    className="btn btn-sm mt-3 mb-4"
                    style={{ backgroundColor: "#2752E7" }}
                  >
                    <p className="mb-0 text-roboto text-white px-3">Activate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* MODAL */}
      <PhoneNumberFalse />
      <AddPhoneNumber status={status} setStatus={setStatus} />
      <PinSecurity status={status} setStatus={setStatus} />
      <ResetPin id={"ResetPinSecurity"} />
      <Reset2fa />
    </>
  )
}
