import React from "react";

function ContactCard(props) {
  return (
    <div className="shadow contact-card">
      <div className="contact-img">
        <img src={props.img} alt="" />
      </div>
      <div className="contact-title">
        <h3>{props.title}</h3>
      </div>
      <div className="contact-text">
        <p>{props.text}</p>
        {props.extra ? <p>{props.extra}</p> : null}
      </div>
    </div>
  );
}

export default ContactCard;
