import img_sample_image_1 from "../../assets/img/sample-image-1.png"

export default function FeatureLandingPage() {
	return (
    <>
      <div className="row mb-5 px-5 mt-5">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="p-5">
            <div className="row">
              <div className="col-1">
                <div
                  className="font-roboto"
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#D0DBFF",
                  }}
                >
                  01
                </div>
              </div>
              <div className="col-11">
                <div
                  className="font-roboto"
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                  }}
                >
                  Cross different platforms
                </div>
                <div
                  className="font-roboto"
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                  }}
                >
                  Cross-platform support ensures players can compete or
                  collaborate across different devices.
                </div>
              </div>
              <hr className="border-secondary my-5" />
            </div>
            <div className="row">
              <div className="col-1">
                <div
                  className="font-roboto"
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#D0DBFF",
                  }}
                >
                  02
                </div>
              </div>
              <div className="col-11">
                <div
                  className="font-roboto"
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                  }}
                >
                  Real time Strategy & Transactions
                </div>
                <div
                  className="font-roboto"
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                  }}
                >
                  This game allow players to command troops and manage resources
                  simultaneously.
                </div>
              </div>
              <hr className="border-secondary my-5" />
            </div>
            <div className="row">
              <div className="col-1">
                <div
                  className="font-roboto"
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#D0DBFF",
                  }}
                >
                  03
                </div>
              </div>
              <div className="col-11">
                <div
                  className="font-roboto"
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                  }}
                >
                  24/7 Support
                </div>
                <div
                  className="font-roboto"
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                  }}
                >
                  customers can get help and find answers to questions as soon
                  as they come up—24/7 and in real-time.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={img_sample_image_1} alt="" className="img-fluid" />
        </div>
      </div>
    </>
  )
}
