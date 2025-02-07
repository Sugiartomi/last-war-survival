import Navbar from "../components/Reusble/Navbar";
import Footer from "../components/Reusble/Footer";

import { useNavigate } from "react-router-dom";
import { useState } from "react"

export default function ForgotPassword() {
	const navigate = useNavigate()
	const [input, setInput] = useState("")
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
            Forgot Password
          </div>
          <div
            className="text-center text-muted font-inter mb-3"
            style={{ fontSize: 16, fontWeight: 400 }}
          >
            Don't worry! It occurs. Please enter the email address linked with
            your account.
          </div>
          <form>
            <div className="form-floating mb-4">
              <input
                type="email"
                className="form-control shadow-none"
                id="floatingInput"
                placeholder=" "
                onChange={(e) => setInput(e.target.value)}
              />
              <label htmlFor="floatingInput" className="text-secondary">
                Enter your email
              </label>
            </div>
            <div className="d-grid mb-5">
              <button
                className="btn btn-primary btn-login py-3"
                type="submit"
                onClick={() => {
                  localStorage.setItem("forgot-email", input)
                  navigate("/forgot-password-otp")
                }}
              >
                <div className="font-inter" style={{ fontWeight: 600 }}>
                  Send Email
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}
