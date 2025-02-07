import { useState } from "react"
import { useNavigate } from "react-router-dom"

import legendBluePrint from "../../assets/img/items/legendary-gear-blueprint-last-war-survival.webp"
import mythicBluePrint from "../../assets/img/items/gear-blueprint-mythic-last-war-survival.webp"
import basicChipMaterial from "../../assets/img/items/basic-chip-material.webp"
import superAlloy from "../../assets/img/items/superalloy-290x300.webp"
import dronePart from "../../assets/img/items/Drone-Parts-2.png"

export default function ExchangeRates() {
  const navigate = useNavigate()
  const [loadingCoin, setLoadingCoin] = useState(false)
  const dataCoin = [
    {
      img: mythicBluePrint,
      assetsName: "Mythic Blueprint",
      symbol: "MBP",
      last_price: "13.855.750",
      percentage_24h: "+35,74",
    },
    {
      img: legendBluePrint,
      assetsName: "Legendary Blueprint",
      symbol: "LBP",
      last_price: "4.305.000",
      percentage_24h: "+35,74",
    },

    {
      img: basicChipMaterial,
      assetsName: "Basic Chip Material",
      symbol: "BCM",
      last_price: "1.057.750  ",
      percentage_24h: "+35,74",
    },
    {
      img: superAlloy,
      assetsName: "Super Alloy",
      symbol: "SA16",
      last_price: "440.600 ",
      percentage_24h: "-3,74",
    },
    {
      img: dronePart,
      assetsName: "Drone Part",
      symbol: "DP2",
      last_price: "57.500 ",
      percentage_24h: "-4,4",
    },
  ]
  return (
    <>
      <div className="row mt-5">
        <div className="d-flex justify-content-between">
          <div className="font-inter fs-16 fw-600">Material Rates</div>
          <div className="font-inter fs-18 fw-600">
            <select
              className="form-select form-select-sm shadow-none"
              aria-label="Default"
            >
              <option selected>Guardian Server 1</option>
              <option value="1">Guardian Server 2</option>
              <option value="2">AOK Korea</option>
              <option value="3">LOZZ</option>
              <option value="4">IDN IndoJaya</option>
              <option value="5">A174 Server</option>
            </select>
          </div>
        </div>
        <table className="table table-hover mt-4">
          <thead className="fw-bold">
            <tr style={{ fontSize: 12 }}>
              <th scope="col">Market</th>
              <th scope="col" className="text-center">
                Symbol
              </th>
              <th scope="col" className="text-center">
                Price
              </th>
              <th scope="col" className="text-end">
                Change
              </th>
            </tr>
          </thead>
          <tbody>
            {loadingCoin ? (
              <>Loading...</>
            ) : (
              dataCoin.map((e) => {
                return (
                  <>
                    <tr className="fs-14">
                      <td scope="row" className="py-2">
                        {console.log(e.img)}
                        <img
                          style={{
                            width: 25,
                            height: 25,
                            marginRight: 15,
                          }}
                          src={e.img}
                          alt=""
                        />
                        <span className="fw-light">{e.assetsName}</span>
                      </td>
                      <td className="py-2 text-center">{e.symbol}</td>
                      <td className="py-2 text-center">
                        {e.last_price}{" "}
                        <span
                          className="text-warning fw-bold"
                          style={{ fontSize: 10 }}
                        >
                          Gold
                        </span>
                      </td>
                      {e.percentage_24h[0] === "+" ? (
                        <td className="py-2 text-end text-success">
                          {e.percentage_24h}%
                        </td>
                      ) : (
                        <td className="py-2 text-end text-danger">
                          {e.percentage_24h}%
                        </td>
                      )}
                    </tr>
                  </>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
