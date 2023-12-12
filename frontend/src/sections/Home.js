import { useNav } from "../hooks/useNav"
import React from "react"
const Home = () => {
  const homeRef = useNav("Home")

  return (
    <section ref={homeRef} id="homeSection" className="home">
      <img src="./home-image.jpg"/>
      
    </section>
  )
}

export default Home