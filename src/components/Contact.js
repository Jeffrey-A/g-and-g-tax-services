import React from "react";
import ContactCard from "./ContactCard";
import location from "../assets/location.png";
import phone from "../assets/cel.png";
import email from "../assets/email.png";

class Contact extends React.Component {
  render() {
    return (
      <div id="contact" className="container contact-section container-section">
        <h3 className="section-heading text-center">Contact Us</h3>
        <div className="contact-card-container">
          <ContactCard img={location} title="Address" text="603 W 180 Street, Suite 22" extra="New York, NY 10033" />
          <ContactCard img={phone} title="Phone" text="(646) 669-8768" extra="(929) 355-2686" />
          <ContactCard img={email} title="Email" text="ggtaxservicesinc@gmail.com" />
        </div>
      </div>
    );
  }
}

export default Contact;
