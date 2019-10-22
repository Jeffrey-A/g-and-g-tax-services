import React from "react";
import CertificateLogo from '../assets/icons8-diploma-24.png';

function About(props) {
  return (
    <div className="container about-container">
      <h3 className="section-heading">About Us</h3>
      <div className="text-center">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
      </div>
      <div className="certification-list-container">
        <h4 className="section-sub-heading text-center">Certifications</h4>
        <ul className="certification-list">
          <li>
            <img src={CertificateLogo} /> 
            <p>Placeholder</p>
            </li>
          <li>
            <img src={CertificateLogo} /> 
            <p>Placeholder</p>
          </li>
          <li>
            <img src={CertificateLogo} /> 
            <p>Placeholder</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
