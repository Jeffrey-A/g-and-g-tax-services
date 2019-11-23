import React from "react";

function ContactCard(props) {
  return (
    <div>
      <div className="contact-img">
        <img src={props.img} alt="" />
      </div>
      <div className="contact-title">
        <h3>{props.title}</h3>
      </div>
      <div className="contact-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default ContactCard;
