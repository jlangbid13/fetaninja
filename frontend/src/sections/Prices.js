import { useNav } from "../hooks/useNav"
import React from "react"
const Prices = () => {
  const flightRef = useNav("Prices")

  return (
    <section ref={flightRef} id="pricesSection" className="Prices">
      <div className="Title">
      <h2>PRICES</h2>
      <h1></h1>
      <div className="PriceImgContainer">
        <img src="wash-left.png" alt="Image 1"/>
        <img src="Dryer.png" alt="Image 2"/>
        <img src="TruckFinal.png" alt="Image 3"/>
      </div>
      <div className="PricesTitle">
        <h2>WASHING MACHINE</h2>
        </div>
        <div className="PricesWash">
        <h2>Starts at 36 Php</h2>
        </div>

        <div className="Dryer">
        <h2>DRYERS</h2>
        </div>
        <div className="PricesDryer">
        <h2>Starts at 68 Php</h2>
        </div>

        <div className="Truck">
        <h2>DELIVERY</h2>
        </div>
        <div className="PricesTruck">
        <h2>Starts at 50 Php</h2>
        </div>
      </div>
     
    </section>
  )
}

export default Prices