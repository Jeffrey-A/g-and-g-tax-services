import React from "react";
import ContactCard from "./ContactCard";
import location from "../assets/location.png";
import phone from "../assets/cel.png";
import email from "../assets/email.png";

class Contact extends React.Component {
  render() {
    return (
      <div className="container contact-section">
        <h3 className="section-sub-heading text-center">Contact Us</h3>
        <div className="contact-card-container">
          <ContactCard img={location} title="Address" text="2851 Webb Avenue" />
          <ContactCard img={phone} title="Phone" text="xxx-xxx-xxxx" />
          <ContactCard img={email} title="Email" text="example@gmail.com" />
        </div>
      </div>
    );
  }
}

export default Contact;
