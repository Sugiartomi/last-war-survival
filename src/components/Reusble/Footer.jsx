import {
	Instagram,
	Facebook,
	Twitter,
	Youtube,
	Telegram,
	Spotify,
	Tiktok,
} from "react-bootstrap-icons";

import img_arbitgo from "../../assets/img/lastwar.png"
import lastwar2 from "../../assets/img/lastwar2.png"

export default function Footer() {
  const images = [
    {
      id: 1,
      logo: "instagram",
    },
  ]

  return (
    <>
      <footer
        className="bg-dark text-white"
        style={{ padding: "24px 72px 8px" }}
      >
        <div className="container-fluid">
          <div className="row py-3">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 px-0">
              <div
                className="d-flex justify-content-start"
                style={{ height: 30 }}
              >
                <img
                  className="img-fluid"
                  src={img_arbitgo}
                  style={{ width: 250, height: "auto", objectFit: "cover" }}
                  alt=""
                />
              </div>
              <div
                className="font-roboto mb-2 mt-4 text-white"
                style={{ fontSize: 20, fontWeight: 700 }}
              >
                LAST WAR SURVIVAL COMPANY
              </div>
              <ul className="font-roboto list-unstyled mb-0 text-white fs-16 fw-400">
                <li>
                  <a>603 Central Ave S, Quincy</a>
                </li>
                <li>
                  <a>Washington DC, 9884, USA</a>
                </li>
                <li>
                  <a> +15097876310</a>
                </li>
                <li className="d-flex justify-content-start mt-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61566336664332&_rdc=1&_rdr#"
                    style={{ color: "#808080" }}
                    target="_blank"
                    className="px-2"
                  >
                    <Facebook size={30} />
                  </a>
                  <a
                    href="https://x.com/lastwarsurvival/status/1777664922647920640"
                    style={{ color: "#808080" }}
                    target="_blank"
                    className="px-2"
                  >
                    <Twitter size={30} />
                  </a>
                  <a
                    href="https://www.instagram.com/lastwarsurvival_official/?hl=id"
                    style={{ color: "#808080" }}
                    target="_blank"
                    className="px-2"
                  >
                    <Instagram size={30} />
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCwMSgEuR4Mf2BzhmqZWp1Lw"
                    style={{ color: "#808080" }}
                    target="_blank"
                    className="px-2"
                  >
                    <Youtube size={30} />
                  </a>
                  <a
                    href="https://www.lastwar.com/en/home.html?1738832852164"
                    style={{ color: "#808080" }}
                    target="_blank"
                    className="px-2"
                  >
                    <Telegram size={30} />
                  </a>
                  <a
                    href="https://www.lastwar.com/en/home.html?1738832852164"
                    style={{ color: "#808080" }}
                    target="_blank"
                    className="px-2"
                  >
                    <Tiktok size={30} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 px-md-5 ">
              <h6 className="text-white font-inter mb-4 pt-1 fs-18 fw-600">
                Company
              </h6>
              <ul className="list-unstyled mb-0 font-inter fs-16 fw-400">
                <li className="mb-2 ">
                  <a
                    href="https://www.lastwar.com/en/home.html?1738832852164#gameinfo"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.lastwar.com/en/home.html?1738832852164#gameinfo"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.lastwar.com/en/home.html?1738832852164#gameinfo"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Support Center
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.lastwar.com/en/home.html?1738832852164#gameinfo"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Career
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-12 mb-lg-0 px-0">
              <div className="text-white mb-4 font-inter fs-18 fw-600">
                <a
                  href="https://lastwar-h5.lastwargame.com/app/terms_new.html"
                  target="_blank"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Term of Services
                </a>
              </div>
              <div className="text-white mb-4 font-inter fs-18 fw-600">
                <a
                  href="https://lastwar-h5.lastwargame.com/app/privacy_new.html"
                  target="_blank"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 mb-lg-0 px-0">
              <img src={lastwar2} alt="" />
            </div>
          </div>
        </div>
        <hr className="p-0 m-0 b-0 mt-5 mb-3" />
        <div className="text-center py-2">
          <div className="container p-0">
            <p className="text-white mb-0 py-2">
              &copy; 2025 Last War All Right reserved
            </p>
          </div>
        </div>
        {/* <div className="bg-light py-2">
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">
              &copy; 2022 digitalexchange.id All Right reserved
            </p>
          </div>
        </div> */}
      </footer>
    </>
  )
}
