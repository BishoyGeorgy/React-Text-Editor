import React, { Component } from "react";
import SelectComponent from "./selectComponent";
import InputComponent from "./InputComponent";

class FormComponent extends Component {
  render() {
    const { onChange, components, selectComponents } = this.props;
    return (
      <React.Fragment>
        <form className="ml-5 mr-5 mb-5" onChange={onChange}>
          <div class="form-row ml-5 mr-4 subheading">
            {selectComponents.map((c) => (
              <SelectComponent component={c} />
            ))}
          </div>
          <div class="form-row ml-5 mr-4 subheading">
            {components.map((c) => (
              <InputComponent component={c} />
            ))}
          </div>
        </form>
        <div class="form-row ml-5 mr-4 subheading">
          <button
            onClick={this.props.handleOnClick}
            className="btn btn-dark mb-2"
          >
            Genrate Image
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default FormComponent;
