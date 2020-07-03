import React, { Component } from "react";

class SelectComponent extends Component {
  render() {
    const { width, label, options } = this.props;
    return (
      <div class={"form-group col-md-" + width}>
        <label for={this.key}>{label}</label>
        <select class="custom-select" name={this.key}>
          {options.map((option) => (
            <option
              value={option.key}
              key={option.key}
              selected={option.selected}
            >
              {option.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectComponent;
