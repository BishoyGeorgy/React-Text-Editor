import React, { Component } from "react";

class InputComponent extends Component {
  render() {
    const { width, label, type, unit, placeholder } = this.props;
    return (
      <div className={"form-group col-md-" + width}>
        <label for={this.key}>{label}</label>
        <div className="input-group w-50">
          <input
            type={type}
            class="form-control"
            placeholder={placeholder}
            id={this.key}
          />
          <span class="w-3 mr-4 input-group-text">{unit}</span>
        </div>
      </div>
    );
  }
}

export default InputComponent;
