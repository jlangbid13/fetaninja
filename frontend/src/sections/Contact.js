import { useNav } from "../hooks/useNav"
import '../styles/ninja.css';
import React from "react"
const Contact = () => {
  const bookingRef = useNav("Contact")

  return (
    <section ref={bookingRef} id="contactSection">
      <h2>Contact</h2>
      <p>You’re single. I’m single. I feel like this is a problem we can solve together.</p>
    </section>
  )
}

export default Contact