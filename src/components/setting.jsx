import React, { Component, useState } from "react";
import bsCustomFileInput from "bs-custom-file-input";

const Setting = () => {
  const [fileInput, setFileInput] = useState(React.createRef());

  return (
    <form>
      <div class="row">
        <div class="col-6 subheading">
          <label htmlFor="font1">Handwriting Font</label>
        </div>
        <div class="col-6 subheading">
          <label htmlFor="font2">Upload your handwriting font (Beta)</label>
        </div>
      </div>
      <div class="row mb-5">
        <select class="col-5 custom-select" name="font1" id="font1">
          <option selected>Yellowtail</option>
          <option value="1">RobotoSlab</option>
          <option value="2">Oswald</option>
        </select>
        <div class="col-1 subheading">or</div>
        <div class="col-5 custom-file">
          <input
            type="file"
            name="font2"
            id="font2"
            class="bs-custom-file-input"
            ref={fileInput}
          />
        </div>
      </div>
      <div class="row">
        <label htmlFor="fontColor" class="col subheading">
          Pen Ink Color
        </label>
      </div>
      <div class="row  mb-4">
        <select class="col custom-select" name="fontColor" id="fontColor">
          <option selected>Blue</option>
          <option value="1">black</option>
        </select>
      </div>
      <div class="row">
        <label htmlFor="fontSize" class="col-4 subheading">
          Font Size
        </label>
        <label htmlFor="vertical" class="col-4 subheading">
          Vertical Position of Text
        </label>
        <label htmlFor="wordSpacing" class="col-4 subheading">
          Word Spacing
        </label>
      </div>
      <div class="row input-group mb-3">
        <input
          type="number"
          class="col-4 form-control"
          placeholder="12"
          aria-label="12"
          name="fontSize"
        />
        <span class="w-3 mr-4 input-group-text">pt</span>
        <input
          type="number"
          class="col-4 form-control"
          placeholder="0"
          name="vertical"
        />
        <span class="w-3 mr-4 input-group-text">px</span>
        <input
          type="number"
          class="col-4 form-control"
          placeholder="3"
          name="wordSpacing"
        />
        <span class="w-3 input-group-text">px</span>
      </div>
    </form>
  );
};

export default Setting;

{
  /* <button
                className="btn-primary"
                onClick={() =>
                  console.log(fileInput.current.files[0].webkitRelativePath)
                }
              ></button> */
}
{
  /* <a href={fileInput.current.files[0]} download></a> */
}
