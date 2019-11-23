import React from "react";
import ContactCard from "./ContactCard";

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <h3 className="section-sub-heading text-center">Contact Us</h3>
        <div className="contact-card-container">
          <ContactCard img="" title="Address" text="2851 Webb Avenue" />
          <ContactCard img="" title="Phone" text="xxx-xxx-xxxx" />
          <ContactCard img="" title="Email" text="example@gmail.com" />
        </div>
      </div>
    );
  }
}

export default Contact;
