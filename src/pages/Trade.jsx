import {
  CaretRightFill,
  ChevronCompactRight,
  ChevronRight,
} from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Reusble/Footer"
import NavbarTrue from "../components/Reusble/NavbarTrue"
import ModalStatusExchange from "../components/Trade/ModalStatusExchange"

export default function Trade() {
  const navigate = useNavigate()
  return (
    <>
      <NavbarTrue />

      <div className="container-fluid" style={{ padding: "24px 72px" }}>
        <div className="d-flex justify-content-between">
          <div className="font-roboto fw-700" style={{ fontSize: 28 }}>
            Earn Daily Profit With your Trading Skills and Opportunities
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control form-control-sm me-2 shadow-none"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn text-white"
              type="submit"
              style={{ backgroundColor: "#2752E7" }}
            >
              Search
            </button>
          </form>
        </div>
        <div className="font-roboto fw-400 fs-18">
          Simple & Safe. Search for popular items and earn profit.
        </div>
        {/* atas */}
        <div className="row my-5">
          <div className="col-3 p-1 px-2">
            <div
              className="card border-0 py-2 px-3"
              style={{ backgroundColor: "#FAFAFA" }}
            >
              <div className="font-inter fs-14 fw-400">Item</div>
              <div className="d-flex justify-content-between mt-2">
                <div className="font-inter fs-18 fw-600">Mythic Blueprint</div>
                <div className="font-inter fs-18 fw-600">13.855.750</div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className="font-inter fs-18 fw-600">Owned</div>
                <div className="font-inter fs-18 fw-600">1</div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="font-inter fs-18 fw-600 d-flex align-items-center">
                  ( MBP ) <span className="text-success ms-2">+35,74%</span>
                </div>
                <div
                  data-bs-toggle="modal"
                  data-bs-target="#statusExchangeModal"
                  className="d-flex pointer justify-content-center align-items-center rounded-circle bg-warning"
                  style={{ width: 30, height: 30 }}
                >
                  <ChevronRight style={{ fontSize: 14, fontWeight: "bold" }} />
                </div>
              </div>
            </div>
            <div
              className="btn w-100 mt-3"
              style={{ backgroundColor: "#2752E7" }}
              onClick={() => navigate("/trade-nama-coin")}
            >
              <div className="font-inter m-0 p-0 text-white">Trade Now</div>
            </div>
          </div>
          <div className="col-3 p-1 px-2">
            <div
              className="card border-0 py-2 px-3"
              style={{ backgroundColor: "#FAFAFA" }}
            >
              <div className="font-inter fs-14 fw-400">Item</div>
              <div className="d-flex justify-content-between mt-2">
                <div className="font-inter fs-18 fw-600">
                  Legendary Blueprint
                </div>
                <div className="font-inter fs-18 fw-600">4.305.000</div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className="font-inter fs-18 fw-600">Owned</div>
                <div className="font-inter fs-18 fw-600">0</div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="font-inter fs-18 fw-600 d-flex align-items-center">
                  ( LBP ) <span className="text-success ms-2">+31,44%</span>
                </div>
                <div
                  data-bs-toggle="modal"
                  data-bs-target="#statusExchangeModal"
                  className="d-flex pointer justify-content-center align-items-center rounded-circle"
                  style={{ width: 30, height: 30, backgroundColor: "#EAECEF" }}
                >
                  <ChevronRight style={{ fontSize: 14, fontWeight: "bold" }} />
                </div>
              </div>
            </div>
            <div
              className="btn w-100 mt-3"
              style={{ backgroundColor: "#A0A0A0" }}
            >
              <div className="font-inter m-0 p-0 text-white">Trade Now</div>
            </div>
          </div>
          <div className="col-3 p-1 px-2">
            <div
              className="card border-0 py-2 px-3"
              style={{ backgroundColor: "#FAFAFA" }}
            >
              <div className="font-inter fs-14 fw-400">Item</div>
              <div className="d-flex justify-content-between mt-2">
                <div className="font-inter fs-18 fw-600">Common Iron chest</div>
                <div className="font-inter fs-18 fw-600">15.000</div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className="font-inter fs-18 fw-600">Owned</div>
                <div className="font-inter fs-18 fw-600">0</div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="font-inter fs-18 fw-600 d-flex align-items-center">
                  ( CIS ) <span className="text-danger ms-2">-5,00%</span>
                </div>
                <div
                  data-bs-toggle="modal"
                  data-bs-target="#statusExchangeModal"
                  className="d-flex pointer justify-content-center align-items-center rounded-circle"
                  style={{ width: 30, height: 30, backgroundColor: "#EAECEF" }}
                >
                  <ChevronRight style={{ fontSize: 14, fontWeight: "bold" }} />
                </div>
              </div>
            </div>
            <div
              className="btn w-100 mt-3"
              style={{ backgroundColor: "#A0A0A0" }}
            >
              <div className="font-inter m-0 p-0 text-white">Trade Now</div>
            </div>
          </div>
          <div className="col-3 p-1 px-2">
            <div
              className="card border-0 py-2 px-3"
              style={{ backgroundColor: "#FAFAFA" }}
            >
              <div className="font-inter fs-14 fw-400">Item</div>
              <div className="d-flex justify-content-between mt-2">
                <div className="font-inter fs-18 fw-600">
                  Rare Commander Badge
                </div>
                <div className="font-inter fs-18 fw-600">108.400</div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className="font-inter fs-18 fw-600">Owned</div>
                <div className="font-inter fs-18 fw-600">0</div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="font-inter fs-18 fw-600 d-flex align-items-center">
                  ( RCB ) <span className="text-success ms-2">+0,37%</span>
                </div>
                <div
                  data-bs-toggle="modal"
                  data-bs-target="#statusExchangeModal"
                  className="d-flex pointer justify-content-center align-items-center rounded-circle"
                  style={{ width: 30, height: 30, backgroundColor: "#EAECEF" }}
                >
                  <ChevronRight style={{ fontSize: 14, fontWeight: "bold" }} />
                </div>
              </div>
            </div>
            <div
              className="btn w-100 mt-3"
              style={{ backgroundColor: "#A0A0A0" }}
            >
              <div className="font-inter m-0 p-0 text-white">Trade Now</div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <ModalStatusExchange />
    </>
  )
}
