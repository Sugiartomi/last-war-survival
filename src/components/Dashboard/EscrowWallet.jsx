import { useState } from "react";
import { PhoneVibrate } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";


import legendBluePrint from "../../assets/img/items/legendary-gear-blueprint-last-war-survival.webp"
import mythicBluePrint from "../../assets/img/items/gear-blueprint-mythic-last-war-survival.webp"
import basicChipMaterial from "../../assets/img/items/basic-chip-material.webp"
import superAlloy from "../../assets/img/items/superalloy-290x300.webp"
import dronePart from "../../assets/img/items/Drone-Parts-2.png"

export default function EscrowWallet() {
  const navigate = useNavigate()
  const [loadingCoin, setLoadingCoin] = useState(false)
  const [connect, setConnect] = useState(false)
  const dataCoin = [
    {
      img: mythicBluePrint,
      assetsName: "Mythic Blueprint",
      symbol: "LBP",
      onTransaction: "0 item",
      estimated: "13.855.750",
      available: "1 item",
      onProccess: "0",
    },
    {
      img: basicChipMaterial,
      assetsName: "Basic Chip Material",
      symbol: "BCM",
      onTransaction: "2 item",
      estimated: "8.462.000",
      available: "6 item",
      onProccess: "0",
    },
    {
      img: superAlloy,
      assetsName: "Super Alloy",
      symbol: "SA16",
      onTransaction: "9 item",
      estimated: "3.965.400",
      available: "0 item",
      onProccess: "0",
    },
  ]
  return (
    <>
      <div className="row mt-5">
        <div className="d-flex justify-content-between">
          <div className="font-inter">
            <span className="fs-18 fw-600">Inventory</span>
            {connect ? (
              <div
                className="btn btn-sm text-white font-inter ms-3 fs-16 fw-600"
                style={{ backgroundColor: "#22B99A" }}
                onClick={() => setConnect(false)}
              >
                <PhoneVibrate
                  className="fs-18 me-2"
                  style={{ marginTop: -3 }}
                />
                <span className="mb-0">Status Server : Connect</span>
              </div>
            ) : (
              <div
                className="btn btn-sm text-white font-inter ms-3 fs-16 fw-600"
                style={{ backgroundColor: "#DC3545" }}
                onClick={() => setConnect(true)}
              >
                <PhoneVibrate
                  className="fs-18 me-2"
                  style={{ marginTop: -3 }}
                />
                <span className="mb-0">Status Server : Unconnect</span>
              </div>
            )}
          </div>
        </div>
        <table className="table table-hover mt-4">
          <thead>
            <tr style={{ fontSize: 12 }}>
              <th scope="col">Symbol</th>
              <th scope="col" className="text-center">
                On Transaction
              </th>
              <th scope="col" className="text-center">
                Estimated (
                <span
                  className="text-warning fw-bold mx-1"
                  style={{ fontSize: 10 }}
                >
                  Gold
                </span>
                )
              </th>
              <th scope="col" className="text-center">
                Available
              </th>
              <th scope="col" className="text-center">
                Action
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
                        <span className="fw-bold">{e.symbol}</span>
                      </td>
                      <td className="py-2 text-center">{e.onTransaction}</td>
                      <td className="py-2 text-center">{e.estimated}</td>
                      <td className="py-2 text-center">{e.available}</td>

                      <td
                        className="text-center"
                        onClick={() => navigate("/trade-nama-coin")}
                      >
                        <div className="bg-success py-1 text-white fw-bold rounded">
                          Trade
                        </div>
                      </td>
                    </tr>
                  </>
                )
              })
            )}
            {}
          </tbody>
        </table>
      </div>
    </>
  )
}
