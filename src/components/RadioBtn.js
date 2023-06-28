import React from "react";
import { ErrorMessage, useField, Field } from "formik";

const RadioBtn = (props) => {
  return (
    <div
      style={{ display: "flex", gap: "10px", flexDirection: "row" }}
      className="fields"
    >
      <label className="labels" style={{ flex: 1 }}>
        {props.label0}
      </label>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "row",
          flex: 4,
        }}
      >
        <label style={{ fontFamily: "Arial", fontSize: "16px" }}>
          <Field
            type="radio"
            name={props.name}
            value={props.value1}
            style={{ transform: "scale(0.6)" }}
          />
          {/* &gt;=18 */}
          {props.label1}
        </label>
        <label style={{ fontFamily: "Arial", fontSize: "16px" }}>
          <Field
            type="radio"
            name={props.name}
            value={props.value2}
            style={{ transform: "scale(0.7)" }}
          />
          {/* &lt;18 */}
          {props.label2}
        </label>
      </div>
    </div>
  );
};

export default RadioBtn;
