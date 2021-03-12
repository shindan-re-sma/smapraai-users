import React from "react";

const Loading = ({ message }) => {
  return (
    <div
      className="ui active dimmer"
      style={{ position: "relative", display: "block", height: "800px" }}
    >
      <div className="ui big text loader">{message}</div>
    </div>
  );
};

Loading.defaultProps = {
  message: "Loading...",
};

export default Loading;
