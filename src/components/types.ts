import React from "react";

export interface InputProps<TElement = HTMLInputElement> {
  /**
   * Unique identifier.
   */
  id?: string;

  /**
   * The unique name.
   */
  name?: string;

  /**
   * The default value, use when uncontrolled.
   */
  defaultValue?: any;

  /**
   * The input value, use when controlled.
   */
  value?: any;

  /**
   * Whether the input is required.
   */
  required?: boolean;

  /**
   * Whether the input is disabled.
   */
  disabled?: boolean;

  /**
   * State of the input.
   */
  inputState?: ControlState;

  /**
   * Ref to the input element.
   */
  inputRef?: React.Ref<TElement>;

  /**
   * Props to be passed to the input element.
   */
  inputProps?: React.InputHTMLAttributes<TElement>;

  /**
   * Invoked when the input value changes.
   */
  onChange?: React.ChangeEventHandler<TElement>;

  /**
   * Invoked when the input blur event is called.
   */
  onBlur?: React.FocusEventHandler<TElement>;
}

export interface ControlState {
  invalid: boolean;
  isTouched: boolean;
  isDirty: boolean;
}

export type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};
