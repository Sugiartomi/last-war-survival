import img_browser_safari from "../assets/img/browser-safari.png"
import img_background_1 from "../assets/img/background-1.png"
import imgBackgroundEarth from "../assets/img/bg-banner.jpg"
import playstore from "../assets/img/google-play.svg"
import appstore from "../assets/img/apple-store.svg"

import Carousel from "../components/LandingPage/Carousel"
import Footer from "../components/Reusble/Footer"
import FeatureLandingPage from "../components/LandingPage/Feature"
import FortofolioLandingPage from "../components/LandingPage/Fortopolio"
import SpreadLandingPage from "../components/LandingPage/Spread"
import AccessControlLandingPage from "../components/LandingPage/AccessControl"
import NeedHelpLandingPage from "../components/LandingPage/NeedHelp"
import Navbar from "../components/Reusble/Navbar"
import { motion } from "motion/react"

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="" style={{ overflowX: "hidden" }}>
        <div
          className="container-fluid py-3 mx-0 px-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(37,37,37,0) , #080808),url(${imgBackgroundEarth})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: 1200,
          }}
        >
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <div
                className="col-8 font-roboto text-center fw-bold w-100 text-white mt-2 py-2 pt-3"
                style={{
                  lineHeight: "50px",
                  fontWeight: 700,

                  backgroundColor: "#FFFFFF30",
                }}
              >
                <span style={{ fontSize: 24, color: "#FFFFFF" }}>
                  <span className="" style={{ color: "#088F8F" }}>
                    Disclaimer!
                  </span>{" "}
                  This website is just for fun, not Last War Survival official
                  but this is Tomi Sugiarto's Web Portfolio
                </span>
              </div>
            </div>
            <div className="container">
              <div className="row" style={{ margin: "150px 0 200px" }}>
                <div className="col-12 col-md-6 d-flex justify-content-center">
                  <div className=" d-flex justify-content-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 1.2,
                        scale: {
                          type: "spring",
                          visualDuration: 1,
                          bounce: 0.7,
                        },
                      }}
                    >
                      <img
                        src={img_browser_safari}
                        alt=""
                        style={{ borderRadius: 15 }}
                        className="img-fluid"
                      />
                    </motion.div>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-start align-items-center mt-4  ">
                  <div>
                    <div
                      className="col-11 font-inter text-center text-white p-4"
                      style={{
                        fontSize: "16px",
                        lineHeight: "28px",
                        fontWeight: 400,
                        borderRadius: 10,
                        backgroundColor: "#00000040",
                      }}
                    >
                      <span style={{ fontSize: 24 }}>"</span>{" "}
                      <strong>Last War Exchange</strong>. This exchange can take
                      place through various online platforms, though it's
                      important for players to be cautious when engaging in such
                      transactions to avoid scams. The growing demand for game
                      currency has led to an entire secondary market where
                      buying and selling virtual currencies is a profitable
                      business for some. <span style={{ fontSize: 24 }}>"</span>
                    </div>
                    <div className="d-flex justify-content-center mt-4 text-white">
                      <div className="px-5 py-2 border rounded">Learn</div>
                      <div className="px-5 py-2  ms-3 bg-success fw-bold border rounded">
                        Buy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="" style={{ margin: "150px 0" }}>
                <Carousel />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <FortofolioLandingPage />
          <FeatureLandingPage />
          <AccessControlLandingPage />
          <SpreadLandingPage />
          <NeedHelpLandingPage />
        </div>

        <div
          className="row d-none d-xl-block"
          style={{ padding: "96px 120px" }}
        >
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
                The choice is yours in this millions-strong community of
                Barbarians. Download for free and Clash on, Chief!
              </div>
              <div className="d-flex mt-4">
                <img
                  src={playstore}
                  alt=""
                  className="rounded"
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.fun.lastwar.gp&gl=ph",
                      "_blank"
                    )
                  }
                />
                <img
                  src={appstore}
                  alt=""
                  className="rounded ms-4 bg-white"
                  onClick={() =>
                    window.open(
                      "https://apps.apple.com/it/app/last-war-survival/id6448786147",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
