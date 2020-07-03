import React, { Component } from "react";
import image from "../image.jpg_large";

class ResultComponent extends Component {
  render() {
    return (
      <div className={"ml-5 mt-5 col-6 " + this.props.hidden}>
        <img className="img-fluid" src={image} alt="Responsive"></img>
      </div>
    );
  }
}

export default ResultComponent;
