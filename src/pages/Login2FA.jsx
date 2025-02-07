import Navbar from "../components/Reusble/Navbar"
import Footer from "../components/Reusble/Footer"
import OtpForm from "react-otp-form"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Login2FA() {
  const [input, setInput] = useState("")
  const navigate = useNavigate()
  function handleOnChange(data) {
    const { otpString } = data
    setInput(otpString)
  }

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
            Verifikasi keamanan
          </div>
          <div className="font-inter fw-400 fs-16 text-center text-secondary">
            Untuk mengamankan akun Anda, harap lengkapi verifikasi berikut.
          </div>
          <div className="mt-3">
            <OtpForm
              numberOfInputs={6}
              showOtp={true}
              handleOnChange={handleOnChange}
              className="w-100"
              style={{ width: 300 }}
            />
            <div
              className="text-danger my-3 text-center"
              style={{ fontSize: 12 }}
            >
              *DUMMY* -- click "Confirm"
            </div>
            <div className="d-grid">
              <button
                className={
                  input.length === 6
                    ? "btn btn-primary btn-login py-3 mx-2"
                    : "btn btn-secondary btn-login py-3 mx-2"
                }
              >
                <div
                  className="font-inter"
                  style={{ fontWeight: 600 }}
                  onClick={() => navigate("/dashboard")}
                >
                  Confirm
                </div>
              </button>
            </div>
            <div
              className={"font-inter text-primary text-center py-4 pointer"}
              style={{ fontSize: 14, fontWeight: 600 }}
              onClick={() => navigate("/forgot-password")}
            >
              Verifikasi keamanan tidak tersedia ?
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
