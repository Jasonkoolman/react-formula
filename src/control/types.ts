import React from "react";
import Hook from "react-hook-form";
import { FormValues, Modify } from "../types";

export type InputState = Hook.ControllerFieldState;

export type UncontrolledRenderProps = Omit<
  Hook.UseFormRegisterReturn,
  "ref"
> & {
  inputRef: React.Ref<any>;
  inputState: InputState;
};

export type UseRegisterProps<
  TFormValues extends FormValues = FormValues
> = Pick<Hook.UseControllerProps<TFormValues>, "name" | "control" | "rules">;

export type UseRegisterReturn<
  TFormValues extends FormValues = FormValues
> = Modify<
  Hook.UseControllerReturn<TFormValues>,
  { field: Hook.UseFormRegisterReturn }
>;

export type ControlledRenderProps<
  TFormValues extends FormValues = FormValues
> = Omit<Hook.ControllerRenderProps<TFormValues>, "ref"> & {
  inputRef: React.Ref<any>;
  inputState: InputState;
};

export interface ControlTransform {
  input: (value: unknown) => unknown;
  output: (value: unknown) => unknown;
}

export type UseControlProps<
  TFormValues extends FormValues = FormValues
> = Hook.UseControllerProps<TFormValues> & {
  /**
   * Whether the input value should be controlled.
   */
  controlled?: boolean;
  /**
   * Transform functions to transform input and output of the control value.
   */
  transform?: ControlTransform;
};

export type UseControlReturn<TFormValues extends FormValues = FormValues> = {
  input: ControlRenderProps<TFormValues>;
  formState: Hook.FormState<TFormValues>;
};

export type ControlRenderProps<TFormValues extends FormValues = FormValues> =
  | UncontrolledRenderProps // TODO: Use Hook.FieldPath for name as we have access to TFormValues
  | ControlledRenderProps<TFormValues>;

export type ControlProps<
  TFormValues extends FormValues = FormValues
> = UseControlProps<TFormValues> & {
  render: (input: ControlRenderProps<TFormValues>) => React.ReactElement;
};
