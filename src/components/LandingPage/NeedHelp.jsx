import { Globe, Headphones, InfoCircleFill } from "react-bootstrap-icons"
import img_sample_image_1 from "../../assets/img/sample-image-1.png"

export default function NeedHelpLandingPage() {
  return (
    <>
      <div
        className="container-fluid p-5 rounded"
        id="support"
        style={{
          backgroundColor: "#F8F8FC",
        }}
      >
        <div className="row">
          <div
            className="font-roboto text-center"
            style={{
              fontSize: 48,
              fontWeight: 700,
            }}
          >
            Need Help ?
          </div>
          <div
            className="font-roboto text-center"
            style={{
              fontSize: 18,
              fontWeight: 400,
            }}
          >
            variety features that make it the best platform to start a new world
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div
                className="card py-5"
                onClick={() =>
                  window.open(
                    "mailto:customer@lastwarsurvival.com?subject=Subject&body=Body%20goes%20here"
                  )
                }
              >
                <div className="d-flex justify-content-center">
                  <div className="col-7">
                    <div className="d-flex justify-content-center">
                      <Headphones size={72} className="text-warning" />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div
                    className="card-text font-roboto text-center text-primary"
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                    }}
                  >
                    Support
                  </div>
                  <div
                    className="card-text font-roboto text-center text-secondary"
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                  >
                    Tell all your needs to our team via email
                    customer@lastwarsurvival.com
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="card py-5"
                onClick={() =>
                  window.open(
                    "https://www.lastwar.com/en/home.html?1738832852164",
                    "_blank"
                  )
                }
              >
                <div className="d-flex justify-content-center">
                  <div className="col-7">
                    <div className="d-flex justify-content-center">
                      <InfoCircleFill size={72} className="text-warning" />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div
                    className="card-text font-roboto text-center text-primary"
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                    }}
                  >
                    Information & Tutorial
                  </div>
                  <div
                    className="card-text font-roboto text-center text-secondary"
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                  >
                    See our YouTube for more updated Information and Tutorials
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 ">
              <div
                className="card py-5"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=61566336664332&_rdc=1&_rdr#",
                    "_blank"
                  )
                }
              >
                <div className="d-flex justify-content-center">
                  <div className="col-7">
                    <div className="d-flex justify-content-center">
                      <Globe size={72} className="text-warning" />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div
                    className="card-text font-roboto text-center text-primary"
                    style={{
                      fontSize: 24,
                      fontWeight: 700,
                    }}
                  >
                    Community
                  </div>
                  <div
                    className="card-text font-roboto text-center text-secondary"
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                  >
                    Join the community and meet the people traders from various
                    regions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
