import React from "react";
import { Link } from "react-router-dom";
import { useNav } from "../hooks/useNav";
import '../styles/Body.css';


const Services = () => {
  const destinationRef = useNav("Services");

  return (
    <section ref={destinationRef} id="servicesSection" className="ServicesPics">
      <div className="Services">
        <h2>Your Laundry, Your Schedule</h2>
        <h1>Book now</h1>
        <h3>and breeze through your visit!</h3>
        <p>Experience a new level of laundry convenience - where your time and comfort come first.</p>
        <Link to="/login"> {/* Link to the "Booking" component */}
          <button className="reserve-button">
            Reserve Now
          </button>
        </Link>
        <img src="./BookNow1.png" alt="hfh" className="Services" />
      </div>
      <div className="Serv">
        <h5>SERVICES</h5>
      </div>
      <div className="Servimage-container">
        <img src="WashDry.png" alt="Image 1" />
        <img src="Self.png" alt="Image 2" />
        <img src="Pickup.png" alt="Image 3" />
        <h6>Wash, Dry & Fold</h6>
        <h5>Self-Service</h5>
        <h7>Pickup/Delivery</h7>
      </div>
    </section>
  );
};

export default Services;
