import React from "react";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      services: ["services 1", "services 2", "services 3"]
    };
  }

  componentDidMount() {
    const services = ["services 1", "services 2", "services 3"]
    const servs = [];
    services.forEach((s, i) => servs.push(<li key={i}>{s}</li>));
    this.setState({ services: servs });
  }

  handleClick = () => {
    this.setState(preState => {
      return { isExpanded: !preState.isExpanded };
    });
  };

  render() {
    const { isExpanded, services } = this.state;
    return (
      <div className="container">
        <h3 className="section-heading">Services</h3>
        <div className="services-container">
          <div
            className="service text-center"
            onClick={() => this.handleClick()}
          >
            Placeholder
          </div>
          {isExpanded ? services : null}
          <div className="service text-center" onClick={this.handleClick}>
            Placeholder
          </div>
          <div className="service text-center" onClick={this.handleClick}>
            Placeholder
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
