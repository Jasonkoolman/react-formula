import React from "react";

interface LabelProps {
  htmlFor?: string;
  asterix?: boolean;
  children: React.ReactChild | React.ReactChild[];
}

function Label(props: LabelProps) {
  return (
    <label className="field-label" htmlFor={props.htmlFor}>
      {props.children}
      {props.asterix ? <span>*</span> : ""}
    </label>
  );
}

export default Label;
