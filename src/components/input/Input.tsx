import React from "react";
import { InputProps as BaseInputProps } from "../types";

type InputType =
  | "text"
  | "color"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "number"
  | "password"
  | "range"
  | "reset"
  | "search"
  | "tel"
  | "time"
  | "url";

type InputProps = BaseInputProps & {
  type?: InputType;
  placeholder?: string;
  autoComplete?: string;
  readOnly?: boolean;
};

/**
 * The default classes used by Input.
 */
const defaultClasses = {
  input: "control-input",
};

const Input = (props: InputProps) => {
  return (
    <input
      aria-live="polite"
      {...props.inputProps}
      name={props.name}
      type={props.type || "text"}
      ref={props.inputRef}
      id={props.id}
      required={props.required}
      disabled={props.disabled}
      placeholder={props.placeholder}
      aria-required={props.required}
      aria-disabled={props.disabled}
      defaultValue={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
      readOnly={props.readOnly}
      autoComplete={props.autoComplete}
      className={defaultClasses.input}
    />
  );
};

const Text = (props: InputProps) => <Input {...props} type="text" />;
const Password = (props: InputProps) => <Input {...props} type="password" />;

Input.Text = Text;
Input.Password = Password;

export default Input;
