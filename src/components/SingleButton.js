import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const SingleButton = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <AwesomeButton type="primary" size={props.size} ripple onPress={props.onPress}>
        {props.label}
      </AwesomeButton>
    </div>
  );
};

export default SingleButton;
