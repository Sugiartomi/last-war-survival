import Navbar from "../components/Reusble/Navbar";
import Footer from "../components/Reusble/Footer";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export default function ResetPassword() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div
        className="row d-flex justify-content-center my-5"
        style={{ overflowX: "hidden" }}
      >
        <div className="col-3">
          <div
            className="font-roboto text-center py-4"
            style={{ fontSize: 32, fontWeight: 700 }}
          >
            Reset Password
          </div>
          <div>
            <div className="form-floating form-control-sm px-0">
              <input
                type="password"
                className="form-control form-control-sm shadow-none"
                id="floatingPassword"
                placeholder=" "
              />
              <label className="text-secondary opacity-75 px-4 mt-1">
                Password
              </label>
            </div>
            <div className="form-floating form-control-sm mt-3 px-0">
              <input
                type="password"
                className="form-control form-control-sm shadow-none"
                id="floatingPassword"
                placeholder=" "
              />
              <label className="text-secondary opacity-75 mt-1  px-4">
                Confirm Password
              </label>
            </div>
            <div className="d-flex mt-3">
              <div
                className="form-floating form-control-sm ps-0"
                style={{ width: "70%" }}
              >
                <input
                  type="number"
                  className="form-control form-ontrol-sm shadow-none icon-number-none"
                  id="floatingPassword"
                  placeholder=" "
                />
                <label className="text-secondary opacity-75 mt-1  px-4">
                  OTP Number
                </label>
              </div>
              <button
                className="btn btn-sm btn-primary ms-1 my-1"
                style={{ fontSize: 12, width: "30%" }}
              >
                <p className="mb-0">Send OTP</p>
              </button>
            </div>
            <div
              className="font-roboto mt-3"
              style={{ fontSize: 14, fontWeight: 400 }}
            >
              Our system send OTP to +62 8213425 * * * *
            </div>
            <div className="d-grid mt-3">
              <button
                className="btn btn-primary btn-login py-3"
                onClick={() => {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Success Reset Password",
                    showConfirmButton: false,
                    timer: 2000,
                  })
                  setTimeout(() => {
                    navigate("/login")
                  }, 1500)
                }}
              >
                <div className="font-inter" style={{ fontWeight: 600 }}>
                  Reset
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
