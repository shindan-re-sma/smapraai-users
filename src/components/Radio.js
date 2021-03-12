import React from "react";

const Radio = (props) => {
  const radioValues = props.dataset.map((data, index) => {
    return (
      <div key={index} className="field">
        <div className="ui radio checkbox">
          <input
            type="radio"
            name={props.name}
            value={data.value}
            checked={props.value === data.value}
            onChange={props.onChange}
          />
          <label>{data.label}</label>
        </div>
      </div>
    );
  });

  return (
    <div className="field">
      <label>{props.label}</label>
      <div className="inline fields">{radioValues}</div>
    </div>
  );
};

export default Radio;
