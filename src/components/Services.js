import React from "react";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded1: false,
      isExpanded2: false,
      isExpanded3: false,
      services1: ["services 1", "services 2", "services 3"],
      services2: ["services 4", "services 5", "services 6"],
      services3: ["services 7", "services 8", "services 9"]
    };
  }

  createServices = services => {
    const container = [];
    services.forEach((serv, index) => {
      container.push(<li key={index}>{serv}</li>);
    });
    return container;
  };

  handleClick1 = () => {
    this.setState(preState => {
      return { isExpanded1: !preState.isExpanded1 };
    });
  };

  handleClick2 = () => {
    this.setState(preState => {
      return { isExpanded2: !preState.isExpanded2 };
    });
  };

  handleClick3 = () => {
    this.setState(preState => {
      return { isExpanded3: !preState.isExpanded3 };
    });
  };

  render() {
    const {
      isExpanded1,
      isExpanded2,
      isExpanded3,
      services1,
      services2,
      services3
    } = this.state;
    return (
      <div className="container">
        <h3 className="section-heading">Services</h3>
        <div className="services-container">
          <div
            className="service text-center"
            onClick={() => this.handleClick1()}
          >
            Placeholder
          </div>
          <div className="services-container">
            <ul className="services-ul">
              {isExpanded1 ? this.createServices(services1) : null}
            </ul>
          </div>

          <div
            className="service text-center"
            onClick={() => this.handleClick2()}
          >
            Placeholder
          </div>
          <div className="services-container">
            <ul className="services-ul">
              {isExpanded2 ? this.createServices(services2) : null}
            </ul>
          </div>

          <div
            className="service text-center"
            onClick={() => this.handleClick3()}
          >
            Placeholder
          </div>
          <div className="services-container">
            <ul className="services-ul">
              {isExpanded3 ? this.createServices(services3) : null}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
