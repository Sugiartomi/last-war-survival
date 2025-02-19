import { motion } from "motion/react"
import img_sample_image_1 from "../../assets/img/lastwar4.png"

export default function FortofolioLandingPage() {
  return (
    <>
      <div className="row mb-5 px-5" style={{ marginTop: 200 }}>
        <div className="col-12 col-md-6">
          <div className="row d-flex justify-content-center">
            <div className="col-8 py-5">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <img
                  src={img_sample_image_1}
                  alt=""
                  className="img-fluid"
                  style={{
                    border: "30px #EEF5FF solid",
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
              Last War Survival
            </div>
            <div
              className="font-roboto"
              style={{
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              In the high-stakes world of the trading asset war game, players
              enter a dynamic battlefield where strategy, negotiation, and risk
              management are key to victory. Each participant starts with a
              portfolio of virtual assets—ranging from commodities and
              currencies to futuristic technologies and rare resources. The
              objective is to outmaneuver opponents by strategically trading,
              hoarding, or sabotaging key assets while navigating a volatile
              market influenced by unpredictable events.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
