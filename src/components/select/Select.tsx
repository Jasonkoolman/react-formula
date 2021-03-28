import React from "React";
import { InputProps } from "../types";

type SelectProps = InputProps<HTMLSelectElement> & {
  label?: string;
  children: React.ReactChild | React.ReactChild[];
  multiple?: boolean;
};

/**
 * The default classes used by Select.
 */
const defaultClasses = {
  input: "control-input",
};

/**
 * Select control component.
 */
const Select = (props: SelectProps) => {
  return (
    <select
      {...props.inputProps}
      name={props.name}
      ref={props.inputRef}
      id={props.id}
      value={props.value}
      multiple={props.multiple}
      required={props.required}
      disabled={props.disabled}
      aria-required={props.required}
      aria-disabled={props.disabled}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
      onBlur={props.onBlur}
      className={defaultClasses.input}
    >
      {props.children}
    </select>
  );
};

export default Select;
