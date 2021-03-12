import React from "react";

const SelectButtons = (props) => {
  const renderButtons = () => {
    return props.options.map((option) => {
      const style = option.value === props.selected ? "ui primary button" : "ui button";
      return (
        <button
          key={option.value}
          className={style}
          value={option.value}
          onClick={props.onClickButton}
        >
          {option.label}
        </button>
      );
    });
  };

  return (
    <div id="purchase-option" className="field">
      <label>{props.label}</label>
      {renderButtons()}
    </div>
  );
};

export default SelectButtons;
