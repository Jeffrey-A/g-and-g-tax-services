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
      <div className="services-section">
        <div className="container">
          <h3 className="section-sub-heading text-center">Our Services</h3>
          <div className="services-container">
            <div className="service-card text-center">
              <div className="service  service-category">
                <p className="service-category-title">Placeholder</p>
              </div>

              <ul className="services-ul">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            </div>

            <div className="service-card text-center">
              <div className="service service-category">
                <p className="service-category-title">Placeholder</p>
              </div>

              <ul className="services-ul">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            </div>

            <div className="service-card text-center">
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
        </div>
      </div>
    );
  }
}

export default Services;
