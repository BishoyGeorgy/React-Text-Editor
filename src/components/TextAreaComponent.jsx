import React, { Component } from "react";

class TextAreaCompnent extends Component {
  render() {
    const {
      fontFamily,
      fontSize,
      color,
      padding,
      wordSpacing,
      letterSpacing,
    } = this.props;

    return (
      <div
        className="ml-5 mt-4 col-5"
        // style={{
        //   border: "1px solid rgb(204, 204, 204)",
        //   background:
        //     "linear-gradient(to right, rgb(255, 255, 255), rgb(255, 255, 255))",
        // }}
      >
        <label className="ml-4" for="Textarea1">
          Type/Paste text here
        </label>
        <textarea
          style={{
            fontFamily: fontFamily,
            fontSize: fontSize,
            color: color,
            paddingTop: padding,
            wordSpacing: wordSpacing,
            letterSpacing: letterSpacing,
          }}
          className="ml-4 form-control"
          id="Textarea1"
          rows="10"
        ></textarea>
      </div>
    );
  }
}

export default TextAreaCompnent;
