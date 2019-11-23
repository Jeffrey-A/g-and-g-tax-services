import React from "react";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createServices = services => {
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
          <div className="services-container">
            <div className="service-card shadow  text-center">
              <div className="service  service-category">
                <p className="service-category-title">Placeholder</p>
              </div>

              <ul className="services-ul">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            </div>

            <div className="service-card shadow text-center">
              <div className="service service-category">
                <p className="service-category-title">Placeholder</p>
              </div>

              <ul className="services-ul">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            </div>

            <div className="service-card shadow text-center">
              <div className="service service-category">
                <p className="service-category-title">Placeholder</p>
              </div>

              <ul className="services-ul">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            </div>

            <div className="service-card shadow text-center">
              <div className="service service-category">
                <p className="service-category-title">Placeholder</p>
              </div>

              <ul className="services-ul">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            </div>

            <div className="service-card shadow text-center">
              <div className="service service-category">
                <p className="service-category-title">Placeholder</p>
              </div>

              <ul className="services-ul">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            </div>

            <div className="service-card shadow text-center">
              <div className="service service-category">
                <p className="service-category-title">Placeholder</p>
              </div>

              <ul className="services-ul">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            </div>
          </div>

          <div className="mk-appointment-container">
            
              <a className="mk-appointment" href="mailto:ggtaxservicesinc@gmail.com">
                Make an Appointment
              </a>
           
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
