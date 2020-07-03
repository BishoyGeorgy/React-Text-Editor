import React, { Component } from "react";

class InputComponent extends Component {
  render() {
    const {
      width,
      label,
      type,
      unit,
      placeholder,
      value,
      onChange,
      component,
    } = this.props;
    return (
      <div className={"form-group col-md-" + component.width}>
        <label for={this.key}>{component.label}</label>
        <div className="input-group w-50">
          <input
            type={component.type}
            class="form-control"
            placeholder={component.placeholder}
            min="0"
            max="100"
            id={component.key}
            value={component.value}
            onChange={onChange}
          />
          <span class="w-3 mr-4 input-group-text">{unit}</span>
        </div>
      </div>
    );
  }
}

export default InputComponent;
