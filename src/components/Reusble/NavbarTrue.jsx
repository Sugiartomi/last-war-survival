import { MoonFill } from "react-bootstrap-icons";
import img_arbitgo_1 from "../../assets/img/lastwar.png"
import img_avatar from "../../assets/img/avatar.png"

import { useLocation, useNavigate } from "react-router-dom"

export default function NavbarTrue() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg bg-body-tertiary "
        style={{ position: "sticky" }}
      >
        <div className="container-fluid ">
          <a className="navbar-brand col-4 text-center" href="#">
            <img
              src={img_arbitgo_1}
              alt=""
              className="img-fluid"
              style={{ width: 150 }}
              onClick={() => navigate("/")}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 col-6 d-flex justify-content-center font-inter fs-16"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link  pointer"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  pointer"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => navigate("/trade")}
                >
                  Trade
                </a>
              </li>
              <li className="nav-item dropdown dropdown-hover">
                <div
                  onClick={() => navigate("/app-package/card")}
                  className={
                    pathname === "/app-package/card" ||
                    pathname === "/app-package/history"
                      ? "nav-link pointer active"
                      : "nav-link pointer"
                  }
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  App Package
                </div>
              </li>

              <li className="nav-item dropdown dropdown-hover list-unstyled">
                <a
                  onClick={() =>
                    window.open(
                      "https://lastwar.wiki/category/items/",
                      "_blank"
                    )
                  }
                  className={
                    pathname === "/activation-key/card" ||
                    pathname === "/activation-key/history"
                      ? "nav-link  pointer active"
                      : "nav-link  pointer"
                  }
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Wiki
                </a>
              </li>
              <li className="nav-item dropdown dropdown-hover">
                <a
                  className="nav-link  pointer"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Help
                </a>
                <ul className="dropdown-menu dropdown-hover-content">
                  <li>
                    <a className="dropdown-item pointer fs-14">
                      Information & Tutorial
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item pointer fs-14">Community</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item pointer fs-14">Support</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex justify-content-center col-lg-6 font-inter">
              <li className="nav-item dropdown list-unstyled pointer">
                <img
                  src={img_avatar}
                  style={{ width: 35, height: 35 }}
                  className="img-fluid p-1 rounded-circle border nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item pointer"
                      onClick={() => navigate("/dashboard")}
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item pointer"
                      onClick={() => navigate("/profile")}
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item pointer"
                      onClick={() => navigate("/wallet")}
                    >
                      Inventory
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item pointer"
                      onClick={() => navigate("/referensi")}
                    >
                      Reference
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item pointer"
                      onClick={() => navigate("/security")}
                    >
                      Security
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item pointer"
                      onClick={() => navigate("/")}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
              <div className="font-inter p-2 text-muted mx-5 pointer fs-16 fw-600">
                <MoonFill />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
