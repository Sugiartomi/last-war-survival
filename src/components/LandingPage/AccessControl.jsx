import { motion } from "motion/react"
import img_sample_image_1 from "../../assets/img/Upgrade-Ore.png"

export default function AccessControlLandingPage() {
  return (
    <>
      <div className="row mt-5 px-5">
        <div className="col-md-6">
          <div className="row d-flex justify-content-center">
            <div className="col-8 py-5 ">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img
                  src={img_sample_image_1}
                  alt=""
                  className="img-fluid"
                  style={{
                    // border: "30px #EEF5FF solid",
                    borderRadius: 20,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="px-5">
            <div
              className="font-roboto"
              style={{
                fontSize: 48,
                fontWeight: 700,
              }}
            >
              Technologies
            </div>
            <div
              className="font-roboto"
              style={{
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              Players can upgrade technologies and unlock abilities through
              progression systems.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
