import LineChart from "../Trade/lineChart"

import legendaryBlueprint from "../../assets/img/items/gear-blueprint-mythic-last-war-survival.webp"

export default function Card3TradeCoin() {
  return (
    <>
      <div className="row">
        <div className="col-4 p-1 pe-2">
          <div className="p-3 h-100">
            <div className="border border-2 border-primary p-3 rounded ">
              <div className="font-inter fw-bold fs-20 text-primary mt-2">
                [ AOK Korea Server ]
              </div>
              <div className="d-flex justify-content-between">
                <div className="font-inter fw-400 fs-14 text-secondary mt-2">
                  Available Gold :
                </div>
                <div className="d-flex justify-content-between">
                  <div
                    className="font-inter fw-600 mt-2"
                    style={{ fontSize: 20 }}
                  >
                    50.124.730{" "}
                    <span
                      className="text-warning fw-bold"
                      style={{ fontSize: 10 }}
                    >
                      Gold
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-6">
                <div className="font-inter fw-400 fs-14 text-secondary mt-2">
                  Name : <strong>Mythic Blueprint</strong>
                </div>

                <div className="font-inter fw-400 fs-14 text-secondary mt-2">
                  Description :
                </div>
                <div
                  className="font-inter fw-400 text-secondary mt-2"
                  style={{ fontSize: 12 }}
                >
                  <strong>Mythic Gear Blueprints</strong> are specifically
                  designed for upgrading legendary gear from star levels 1
                  through 4, allowing for incremental power boosts that can make
                  a noticeable difference in battles. Once the gear reaches the
                  4th star level, Mythic Gear Blueprints come into play,
                  enabling upgrades to the 5th star level, the pinnacle of gear
                  enhancement.
                </div>
              </div>
              <div className="col-6">
                <img
                  src={legendaryBlueprint}
                  className="img-fluid border rounded bg-danger"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-8 p-1 ps-2">
          <LineChart />
        </div>
      </div>
    </>
  )
}
