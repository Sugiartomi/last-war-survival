import Footer from "../components/Reusble/Footer";
import NavbarTrue from "../components/Reusble/NavbarTrue";
import {
  Gem,
  ExclamationDiamondFill,
  PatchCheckFill,
  CheckCircleFill,
  EyeFill,
  EyeSlashFill,
} from "react-bootstrap-icons"
import { RiShieldUserFill } from "react-icons/ri"
import img_avatar from "../assets/img/avatar.png"
import img_person_call from "../assets/img/people-call.svg"
import img_scan_code from "../assets/img/scan-code.svg"
import img_idcard from "../assets/img/id-card.svg"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import PointToCashout from "../components/Profile2/PointToCashout"
import ChangePassword from "../components/Profile2/ChangePassword"
import EmergencyContact from "../components/Profile2/EmergencyContact"
import PrimaryNumber from "../components/Profile2/PrimaryNumber"
import AlternativeNumber from "../components/Profile2/AlternativeNumber"
import ChangeEmail from "../components/Profile2/ChangeEmail"
import ChangeAddress from "../components/Profile2/ChangeAddress"

export default function Profile2() {
  const [kyc, setKYC] = useState(false)
  const [view, setView] = useState(false)
  const navigate = useNavigate()
  const forLoop = ["", "", "", "", "", "", "", ""]
  useEffect(() => {
    if (localStorage.statusKYC === "valid") {
      setKYC(true)
    }
  }, [])
  window.onbeforeunload = function () {
    return localStorage.setItem("statusKYC", "invalid")
  }
  return (
    <>
      <NavbarTrue />
      <div
        className="d-flex justify-content-between"
        style={{ backgroundColor: "	rgb(192,192,192,0.2)" }}
      >
        <div className="font-roboto fw-700 px-5 py-4" style={{ fontSize: 32 }}>
          Profile
        </div>
        <div className="text-muted px-5 py-4" style={{ fontSize: 32 }}>
          <RiShieldUserFill style={{ fontSize: 48 }} />
        </div>
      </div>
      <div className="container-fluid" style={{ padding: "24px 72px 0px" }}>
        <div className="row p-5">
          <div className="row mt-4">
            <div className="pe-4 h-100">
              <div className="row d-flex justify-content-between">
                <div className="col-4">
                  <div className=" row d-flex">
                    <div className=" col-3 d-flex justify-content-center align-items-center">
                      <img src={img_avatar} className="img-fluid" alt="" />
                    </div>
                    <div className="col">
                      <div
                        className="font-inter text-info fw-600 my-2"
                        style={{ fontSize: 32 }}
                      >
                        <span className="text-dark me-2">Halland Smith</span>
                        <PatchCheckFill />
                      </div>
                      <div className="font-inter fw-600 fs-14 text-success rounded d-flex align-items-center">
                        <div
                          className="px-2"
                          style={{
                            backgroundColor: "	rgb(192,192,192,0.2)",
                          }}
                        >
                          <span className="me-2">
                            Your account has been Verified
                          </span>
                          <CheckCircleFill />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="text-end">
                    <div className="text-muted" style={{ fontSize: 32 }}>
                      {view ? (
                        <EyeFill onClick={() => setView(false)} />
                      ) : (
                        <EyeSlashFill onClick={() => setView(true)} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Username */}
          <div className="row mt-5">
            <div className="col">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Username
              </div>

              <div className="font-inter fw-400 fs-14 ">
                Your identity for login and transaction history
              </div>
            </div>
            <div className="col-4">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                @hall_smith3523
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="row mt-4">
            <div className="col">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Email
              </div>

              <div className="font-inter fw-400 fs-14 ">
                For login, Withdrawal, Password, Change security opstions and
                API management.
              </div>
            </div>
            <div className="col-4">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                <div className="">
                  <CheckCircleFill className="text-success" />
                  {view ? (
                    <span className="ms-2">halland_smith@gmail.com</span>
                  ) : (
                    <span className="ms-2">hall**@gmail.com</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Contact */}
          <div className="row mt-4">
            <div className="col">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Phone
              </div>

              <div className="font-inter fw-400 fs-14 ">
                For login, Withdrawal, Password, Change security opstions and
                API management.
              </div>
            </div>
            <div className="col-4">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                <div className="">
                  <CheckCircleFill className="text-success" />
                  {view ? (
                    <span className="ms-2">+6282145871234</span>
                  ) : (
                    <span className="ms-2">+628214587****</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Point */}
          <div className="row mt-4">
            <div className="col">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Total Point : 150{" "}
                <span className="px-1 fw-bold text-warning">
                  <Gem />
                </span>
              </div>

              <div className="font-inter fw-400 fs-14 ">
                Points can be used or redeemed for cash out into your account
              </div>
            </div>
            <div className="col-4">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                <div
                  className="btn btn-sm btn-primary px-4"
                  data-bs-toggle="modal"
                  data-bs-target="#PointToCash"
                >
                  Point to Cash Out
                </div>
              </div>
            </div>
          </div>
          <hr style={{ margin: "100px 0px" }} />
          <div className="row">
            <div className="col">
              <div className="font-roboto fw-700" style={{ fontSize: 32 }}>
                {" "}
                Personal Data
              </div>
            </div>
            <div className="col-2 d-flex align-items-center">
              <div
                className="btn btn-sm btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#ChangeProfile"
              >
                change
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Place of birth
              </div>
              <div className="font-inter fw-400 fs-16">Missisipi</div>
            </div>
            <div className="col">
              <div className="col-3">
                <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                  Address
                </div>
                <div className="font-inter fw-400 fs-16">
                  St. Laurent IV B3/66
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Date of Birth
              </div>
              <div className="font-inter fw-400 fs-16">14-05-1989</div>
            </div>
            <div className="col">
              <div className="col-3">
                <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                  State
                </div>
                <div className="font-inter fw-400 fs-16">Missisipi</div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Gender
              </div>
              <div className="font-inter fw-400 fs-16">Man </div>
            </div>
            <div className="col">
              <div className="col-3">
                <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                  City
                </div>
                <div className="font-inter fw-400 fs-16">Tillatoba</div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Citizenship
              </div>
              <div className="font-inter fw-400 fs-16">Mexico</div>
            </div>
            <div className="col">
              <div className="col-3">
                <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                  Post code
                </div>
                <div className="font-inter fw-400 fs-16">38961</div>
              </div>
            </div>
          </div>
          <hr style={{ margin: "100px 0px" }} />
          <div className="row">
            <div className="col">
              <div className="font-roboto fw-700" style={{ fontSize: 32 }}>
                {" "}
                Emergency Email
              </div>
            </div>
            <div className="col-2 d-flex align-items-center">
              <div
                className="btn btn-sm btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#ChangeProfile"
              >
                change
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-3">
              <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                Nama
              </div>
              <div className="font-inter fw-400 fs-16">Halland Smith</div>
            </div>
            <div className="col">
              <div className="col-3">
                <div className="font-inter fw-600 " style={{ fontSize: 20 }}>
                  Email
                </div>
                <div className="font-inter fw-400 fs-16">
                  hallandsmith2@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="font-roboto fw-700" style={{ fontSize: 32 }}>
                {" "}
                Account Activity
              </div>
            </div>
            <div className="col-2 d-flex align-items-center">
              <div
                className="btn btn-sm btn-secondary"
                onClick={() => navigate("/account-activity")}
              >
                detail
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="font-inter fw-400 fs-16">
                Last Login : 02-02-2023 14:26:21
              </div>
              <div className="font-inter fw-400 fs-16 mt-2">
                Suspicious account activity?
                <span className="text-primary"> Non-Active Account?</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <PointToCashout />
      <ChangePassword />
      <ChangeEmail />
      <ChangeAddress />
      <EmergencyContact />
      <PrimaryNumber />
      <AlternativeNumber />
    </>
  )
}
