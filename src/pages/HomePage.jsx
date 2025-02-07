import NavbarTrue from "../components/Reusble/NavbarTrue"
import img_browser_safari from "../assets/img/browser-safari.png"
import img_background_1 from "../assets/img/background-1.png"

import Carousel from "../components/LandingPage/Carousel"
import Footer from "../components/Reusble/Footer"
import FeatureLandingPage from "../components/LandingPage/Feature"
import FortofolioLandingPage from "../components/LandingPage/Fortopolio"
import SpreadLandingPage from "../components/LandingPage/Spread"
import AccessControlLandingPage from "../components/LandingPage/AccessControl"
import NeedHelpLandingPage from "../components/LandingPage/NeedHelp"
import Navbar from "../components/Reusble/Navbar"

import { useState } from "react"
import { CaretUpFill, EyeFill, EyeSlashFill } from "react-bootstrap-icons"
import Card4 from "../components/DashboardPnL/Card4"
import AreaChart from "../components/Reusble/AreaChart"
import CombineChart from "../components/Reusble/KLineChart"
import TradingViewWidget from "../components/Reusble/TradingViewWidget"
export default function HomePage() {
  const [visibility, setVisibility] = useState(false)
  const data = ["1", "1", "1", "1", "1", "1", "1", "1"]
  return (
    <>
      <NavbarTrue />
      <div style={{ overflowX: "hidden" }}>
        <div
          className="container-fluid py-5"
          style={{
            backgroundColor: "#F8F8FC",
          }}
        >
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div
                className="col-8 font-roboto text-center"
                style={{
                  fontSize: "56px",
                  lineHeight: "70px",
                  fontWeight: 700,
                }}
              >
                Buy and sell digital currencies with{" "}
                <span className="text-primary">one click</span>
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-2  ">
              <div
                className="col-8 font-inter text-center"
                style={{
                  fontSize: "20px",
                  lineHeight: "28px",
                  fontWeight: 400,
                }}
              >
                Buy and sell digital currencies as fast and easy as you like
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-6 d-flex justify-content-center">
                <input
                  type="email"
                  className="form-control shadow-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <button className="btn btn-primary ms-3">Started</button>
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-8">
                <img src={img_browser_safari} alt="" className="img-fluid" />
              </div>
            </div>
            <div style={{ margin: "150px 0" }}>
              <Carousel />
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ padding: "24px 72px" }}>
          <div className="font-roboto fw-700" style={{ fontSize: 32 }}>
            Dashboard PnL
            {visibility ? (
              <span onClick={() => setVisibility(false)}>
                <EyeFill className="ms-3 text-secondary" />
              </span>
            ) : (
              <span onClick={() => setVisibility(true)}>
                <EyeSlashFill className="ms-3 text-secondary" />
              </span>
            )}
          </div>
          <div className="font-roboto fw-400 text-muted fs-14">
            Last Login Time : 2023-01-19 10:16:11
          </div>
          <div className="row mt-5">
            <div className="col-4 p-1">
              <div className="card h-100 rounded">
                <div className="font-roboto fs-18 fw-700 mt-3 mx-3">Assets</div>
                <div className="font-roboto fs-16 fw-400 mt-4 mx-3">
                  Your Balance
                </div>
                <div className="font-roboto fs-18 fw-700 mx-3 mt-1">
                  {visibility ? "Rp. 25,901,000" : "Rp. ********"}
                  {visibility ? (
                    <span
                      className="text-success fs-14 p-1 rounded ms-2"
                      style={{ backgroundColor: "#E8FFEB" }}
                    >
                      <CaretUpFill className="fs-12" /> 810%
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mt-5">
                  <AreaChart />
                </div>
              </div>
            </div>
            {/* 4 card */}
            <div className="col-8">
              <Card4 visibility={visibility} />
            </div>
          </div>
          <div className="row">
            <div className="col-4 p-3">
              <div className="card h-100 rounded p-4 fs-16">
                <div className="row mb-4">
                  <div className="col-3 fw-600">Market</div>
                  <div className="col-3 text-center">Indodax</div>
                  <div className="col-3 text-center">Binance</div>
                  <div className="col-3 text-end">OKX</div>
                </div>
                {data.map((e) => {
                  return (
                    <div className="row fs-14 mt-3 fs-14">
                      <div className="col-3 fw-600 fs-12">BTC/USDT</div>
                      <div className="col-3 text-center">Bitcoin</div>
                      <div className="col-3 text-center"> $23,495 </div>
                      <div className="col-3 text-success text-end">+23.4%</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <FeatureLandingPage />

        <FortofolioLandingPage />

        <SpreadLandingPage />

        <AccessControlLandingPage />

        <NeedHelpLandingPage />

        <div className="row" style={{ padding: "96px 120px" }}>
          <div className="container" style={{ position: "relative" }}>
            <img src={img_background_1} alt="Snow" style={{ width: "100%" }} />
            <div
              className="centered col-6"
              style={{
                position: "absolute",
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="font-roboto text-white"
                style={{ fontSize: 40, fontWeight: 700 }}
              >
                Bergabunglah dengan Platform generasi baru
              </div>
              <button
                className="btn bg-white font-inter px-5 py-3 mt-4"
                style={{ fontSize: 16, fontWeight: 600 }}
              >
                Mulai Sekarang
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
