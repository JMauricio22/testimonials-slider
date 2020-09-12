import React from "react";
import ReactDOM from "react-dom";
import PatternCurve from "../../images/pattern-curve.svg";
import "./Container.css";

const Container = (props) => {
  return <div className="container">{props.children}</div>;
};

export default Container;
