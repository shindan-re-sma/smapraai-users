import React from "react";

function Selection(props) {
  const selectOptions = props.options.map((option, index) => {
    return (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    );
  });

  return (
    <div className="field">
      <label>{props.label}</label>
      <select className="ui dropdown" value={props.value} onChange={props.onChange}>
        {selectOptions}
      </select>
    </div>
  );
}

export default Selection;
