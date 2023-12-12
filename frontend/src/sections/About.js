import { useNav } from "../hooks/useNav"
import React from "react"

const About = () => {
  const hotelRef = useNav("About")

  return (
    <section ref={hotelRef} id="aboutSection" className="AboutContainer">
      <div className="Mission">
      <h2>MISSION</h2>
      <h1></h1>
      <p>Our mission is to revolutionize the laundry experience by providing a user-friendly platform that enables customers to book laundry services in advance, ensuring a hassle-free and time-efficient process.</p>
      </div>
      <div className="Vision">
      <h2>VISION</h2>
      <h1></h1>
      <p>Our goals include enhancing customer satisfaction, optimizing resource utilization, expanding our service reach, and promoting sustainability within the industry.</p>
      </div>
      
    </section>

  )
}

export default About