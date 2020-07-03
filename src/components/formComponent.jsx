import React, { Component } from "react";
import SelectComponent from "./selectComponent";

class FormComponent extends Component {
  state = {};
  render() {
    const fontTypes = [
      {
        key: "RobotoSlab",
        selected: true,
        name: "Roboto Slab",
      },
      {
        key: "Oswald",
        selected: false,
        name: "Oswald",
      },
      {
        key: "Yellowtail",
        selected: false,
        name: "Yellow tail",
      },
    ];
    const fontColors = [
      {
        key: "blue",
        selected: true,
        name: "Blue",
      },
      {
        key: "black",
        selected: false,
        name: "Black",
      },
    ];
    return (
      <React.Fragment>
        <form>
          <div class="form-row ml-5 mr-4 subheading">
            <SelectComponent
              width="6"
              label="Handwriting Font"
              key="fontType"
              options={fontTypes}
            />
            <SelectComponent
              width="6"
              label="Pen Ink Color"
              key="fontColor"
              options={fontColors}
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default FormComponent;
