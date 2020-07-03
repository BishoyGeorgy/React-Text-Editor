import React, { Component } from "react";
import SelectComponent from "./selectComponent";
import InputComponent from "./InputComponent";

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
        <form className="ml-5 mr-5 mb-5">
          <div class="form-row ml-5 mr-5 subheading">
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
          <div class="form-row ml-5 mr-4 subheading">
            <InputComponent
              width="4"
              label="Font Size"
              key="fontSize"
              type="number"
              unit="pt"
              placeholder="12"
            />
            <InputComponent
              width="4"
              label="Vertical Position of Text"
              key="verticalPosition"
              type="number"
              unit="px"
              placeholder="0"
            />
            <InputComponent
              width="4"
              label="Word Spacing"
              key="WordSpacing"
              type="number"
              unit="px"
              placeholder="3"
            />
          </div>
          <div class="form-row ml-5 mr-4 subheading">
            <InputComponent
              width="3"
              label="Letter Spacing"
              key="letterSpacing"
              type="number"
              unit="pt"
              placeholder="0"
            />
            <InputComponent
              width="3"
              label="Paper Margin"
              key="paperMargin"
              type="checkbox"
            />
            <InputComponent
              width="3"
              label="Paper Lines"
              key="paperLines"
              type="checkbox"
            />
            <InputComponent
              width="3"
              label="Paper Curvature"
              key="paperCurvature"
              type="checkbox"
            />
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
