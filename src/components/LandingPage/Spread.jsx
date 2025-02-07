import { motion } from "motion/react"
import img_sample_image_1 from "../../assets/img/Alliance-Center-1024x1024.png"

export default function SpreadLandingPage() {
  return (
    <>
      <div className="row mb-5 mt-5 px-5">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="px-5">
            <div
              className="font-roboto"
              style={{
                fontSize: 48,
                fontWeight: 700,
              }}
            >
              Strongest Alliance
            </div>
            <div
              className="font-roboto"
              style={{
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              Alliances are forged and broken as players weigh the benefits of
              cooperation against the lure of dominance. The game thrives on
              psychological warfare, with bluffing and misinformation as
              powerful tools to manipulate market conditions and rivals. Success
              demands a sharp mind, adaptability, and the courage to seize
              opportunities—or the wisdom to cut losses and regroup.
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row d-flex justify-content-center">
            <div className="col-8 py-5">
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
      </div>
    </>
  )
}
