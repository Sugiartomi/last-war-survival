import img_facebook from "../assets/img/facebook.png";
import img_google from "../assets/img/google.png";

import Navbar from "../components/Reusble/Navbar";
import Footer from "../components/Reusble/Footer";

import { useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
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
            Login
          </div>
          <div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control shadow-none ps-4"
                id="floatingInput"
                placeholder=" "
              />
              <label
                htmlFor="floatingInput"
                className="text-secondary opacity-75 px-4"
              >
                Email
              </label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control shadow-none ps-4"
                id="floatingPassword"
                placeholder=" "
              />
              <label className="text-secondary opacity-75  px-4">
                Password
              </label>
            </div>

            <div
              className="font-inter text-primary text-center py-4"
              style={{ fontSize: 14, fontWeight: 600 }}
              onClick={() => navigate("/forgot-password")}
            >
              <p className="mb-0 pointer">Forgot Password?</p>
            </div>
            <div className="d-grid">
              <button className="btn btn-primary btn-login py-3" type="submit">
                <div
                  className="font-inter"
                  style={{ fontWeight: 600 }}
                  onClick={() => navigate("/login-2fa")}
                >
                  Login
                </div>
              </button>
            </div>
          </div>
          <div
            className="text-danger mt-3 text-center"
            style={{ fontSize: 12 }}
          >
            *DUMMY* -- Click "Login" and go to next page
          </div>
          <div
            className="row py-4 px-3 d-flex align-items-center font-inter text-secondary"
            style={{ fontWeight: 600, fontSize: 14 }}
          >
            <div
              className="col bg-secondary me-3 opacity-25"
              style={{ height: 1 }}
            />
            Or Login with
            <div
              className="col bg-secondary ms-3 opacity-25"
              style={{ height: 1 }}
            />
          </div>
          <div className="d-flex justify-content-center mt-2">
            <div className="btn btn-outline-secondary px-4 me-2">
              <img src={img_facebook} alt="" />
            </div>
            <div className="btn btn-outline-secondary px-4">
              <img src={img_google} alt="" />
            </div>
          </div>
          <div
            className="font-inter text-center mt-4"
            style={{ fontWeight: 400 }}
          >
            Don’t have an account?{" "}
            <span
              className="text-primary"
              onClick={() => navigate("/register")}
            >
              Register Now
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
