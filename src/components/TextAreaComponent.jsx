import React, { Component } from "react";

class TextAreaCompnent extends Component {
  render() {
    return (
      <div className="ml-5 mt-4 col-5">
        <label className="ml-4" for="Textarea1">
          Type/Paste text here
        </label>
        <textarea
          className="ml-4 form-control"
          id="Textarea1"
          rows="10"
        ></textarea>
      </div>
    );
  }
}

export default TextAreaCompnent;
