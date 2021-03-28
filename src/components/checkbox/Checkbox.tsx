import React from "react";
import Group from "./Group";
import { InputProps } from "../types";

type CheckboxProps = InputProps &
  (
    | { text: string; children?: never }
    | { text?: never; children: React.ReactNode }
  );

/**
 * The default classes used by Checkbox.
 */
const defaultClasses = {
  root: "control-check",
  input: "control-check-input",
  label: "control-check-label",
};

/**
 * Checkbox control component.
 */
const Checkbox = (control: CheckboxProps) => {
  const checked = control.value === true;

  return (
    <label className={defaultClasses.root}>
      <input
        className={defaultClasses.input}
        {...control.inputProps}
        name={control.name}
        ref={control.inputRef}
        type="checkbox"
        required={control.required}
        disabled={control.disabled}
        aria-checked={checked}
        aria-disabled={control.disabled}
        defaultChecked={checked}
        onChange={control.onChange}
        onBlur={control.onBlur}
      />
      <span className={defaultClasses.label}>
        {control.text || control.children}
      </span>
    </label>
  );
};

Checkbox.Group = Group;

export default Checkbox;
export type { CheckboxProps };
