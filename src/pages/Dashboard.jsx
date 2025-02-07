import { useState } from "react";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import Footer from "../components/Reusble/Footer";
import NavbarTrue from "../components/Reusble/NavbarTrue";
import BalancePackage from "../components/Dashboard/BalancePackage";
import EscrowHighlight from "../components/Dashboard/EscrowHighlight";
import ExchangeRates from "../components/Dashboard/ExchangeRates";
import EscrowWallet from "../components/Dashboard/EscrowWallet";
import Roadmap from "../components/Dashboard/RoadMap";

export default function Dashboard() {
	const [visibility, setVisibility] = useState(false)
	return (
    <>
      <NavbarTrue />

      <div className="container-fluid" style={{ padding: "24px 72px" }}>
        <div className="d-flex">
          <div className="font-roboto fw-700" style={{ fontSize: 32 }}>
            Dashboard
          </div>
          {visibility ? (
            <div
              className="py-2 mx-4 pointer"
              onClick={() => setVisibility(false)}
            >
              <EyeFill style={{ fontSize: "32" }} />
            </div>
          ) : (
            <div
              className="py-2 mx-4 pointer"
              onClick={() => setVisibility(true)}
            >
              <EyeSlashFill style={{ fontSize: "32" }} />
            </div>
          )}
        </div>
        <div className="font-roboto fs-14 fw-400">
          Last Login Time : 2023-01-19 10:16:11
        </div>
        {/* 4 cards */}
        <BalancePackage visibility={visibility} />

        {/* RoadMap */}
        {/* <Roadmap/> */}

        {/* 2 cards */}
        <EscrowHighlight visibility={visibility} />
        <div className="row">
          <div className="col-6 pe-5">
            <ExchangeRates />
          </div>
          <div className="col-6 ps-5">
            <EscrowWallet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
