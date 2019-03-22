import React, { Fragment } from "react";

export default ({ data: { type, title, text, isClosable } }) => {
  const alertType = type ? `alert-${type}` : "";

  return (
    <div className={"alert " + alertType}>
      <div className="alert-heading">{title}</div>
      <small>{text}</small>
    </div>
  );
};
