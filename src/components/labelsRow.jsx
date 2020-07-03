import React, { Component, useState } from "react";

const labelsRow = (props) => {
  return (
    <div class="row">
      {props.labels.map((l) => {
        <label htmlFor={l.name} class={"col-" + 12 / l.length + "subheading"}>
          {l.name}
        </label>;
      })}
    </div>
  );
};

export default labelsRow;
