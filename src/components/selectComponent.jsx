import React, { Component } from "react";

class SelectComponent extends Component {
  render() {
    const { component, width, label, onChange } = this.props;
    return (
      <div class={"form-group col-md-" + component.width}>
        <label for={component.key}>{component.label}</label>
        <select
          class="custom-select"
          name={component.key}
          id={component.key}
          onChange={onChange}
        >
          {component.options.map((option) => (
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
