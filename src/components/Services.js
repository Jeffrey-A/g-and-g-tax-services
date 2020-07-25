import React from "react";
// Services image
import IndividualAndBusinessTaxes from "../assets/taxes-individual-and-business.png";
import itinRequest from "../assets/itin-request.png";
import installmentPlan from "../assets/installement-plan.png";
import businessLicense from "../assets/business-licenses.png";
import bookkeeping from "../assets/bookkeeping.png";
import taxId from "../assets/tax-id.png";
import payrollAndSales from "../assets/payroll-and-sales-taxes.png";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createServices = (services) => {
    const container = [];
    services.forEach((serv, index) => {
      container.push(<li key={index}>{serv}</li>);
    });
    return container;
  };

  render() {
    return (
      <div id="services" className="services-section container-section">
        <div className="container">
          <h3 className="section-heading text-center">Our Services</h3>
          <i className="fa fa-check-circle"></i>
          <div className="services-container">
            <div className="service-card text-center">
              <div className="service-card-img-container">
                <img src={IndividualAndBusinessTaxes} alt="" />
              </div>
              <p className="service-name">
                income tax individual &#38; business
              </p>
            </div>

            <div className="service-card text-center">
              <div className="service-card-img-container">
                <img src={itinRequest} alt="" />
              </div>
              <p className="service-name">itin request</p>
            </div>

            <div className="service-card text-center">
              <div className="service-card-img-container">
                <img src={installmentPlan} alt="" />
              </div>
              <p className="service-name">installment plans</p>
            </div>

            <div className="service-card text-center">
              <div className="service-card-img-container">
                <img src={businessLicense} alt="" />
              </div>
              <p className="service-name">business licenses</p>
            </div>

            <div className="service-card text-center">
              <div className="service-card-img-container">
                <img src={bookkeeping} alt="" />
              </div>
              <p className="service-name">bookkeeping</p>
            </div>

            <div className="service-card text-center">
              <div className="service-card-img-container">
                <img src={taxId} alt="" />
              </div>
              <p className="service-name">tax ID</p>
            </div>

            <div className="service-card text-center">
              <div className="service-card-img-container">
                <img src={payrollAndSales} alt="" />
              </div>
              <p className="service-name">payroll &#38; sales taxes</p>
            </div>
          </div>

          <div className="mk-appointment-container">
            <a
              className="mk-appointment"
              href="mailto:ggtaxservicesinc@gmail.com"
            >
              Make an Appointment
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
