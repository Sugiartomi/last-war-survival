import OtpForm from "react-otp-form";

import Navbar from "../components/Reusble/Navbar";
import Footer from "../components/Reusble/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OTPForgotPassword() {
	const navigate = useNavigate()
	const [input, setInput] = useState("");
	const [waiting, setWaiting] = useState(true);
	const [timer, setTimer] = useState(60);

	const email = localStorage.getItem("forgot-email")

	useEffect(() => {
		if (timer > 0) {
			setTimeout(() => {
				setTimer(timer - 1);
			}, 1000);
		} else if (timer === 0) {
			setWaiting(false);
		}
	}, [timer]);


	function handleOnChange(data) {
		const { otpString } = data;
		setInput(otpString);
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
            Email Verification
          </div>
          <div
            className="text-center text-muted font-inter"
            style={{ fontSize: 16, fontWeight: 400 }}
          >
            Sent verification code to :
          </div>
          <div
            className="text-center font-inter mb-3"
            style={{ fontSize: 24, fontWeight: 600 }}
          >
            {email ? email : "user1forgotpassword@gmail.com"}
          </div>
          <OtpForm
            numberOfInputs={6}
            showOtp={true}
            handleOnChange={handleOnChange}
          />
          <div
            className="text-center text-muted font-inter"
            style={{ fontSize: 16, fontWeight: 400 }}
          >
            Resend {timer}s
          </div>
          <div className="d-flex justify-content-center mt-4">
            {input.length === 6 ? (
              <button
                className="btn btn-primary btn-login py-3 w-75"
                type="submit"
                onClick={() => navigate("/reset-password")}
              >
                <div className="font-inter" style={{ fontWeight: 600 }}>
                  Confirm
                </div>
              </button>
            ) : (
              <button
                className="btn btn-secondary btn-login py-3 w-75"
                type="submit"
              >
                <div className="font-inter" style={{ fontWeight: 600 }}>
                  Confirm
                </div>
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
