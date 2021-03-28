import Hook from "react-hook-form";
import { FormValues } from "../types";
import { ControlProps, UseControlProps } from "../control";

export type UseFieldProps<TFormValues extends FormValues = FormValues> = Pick<
  UseControlProps<TFormValues>,
  "name" | "control" | "rules"
> & {
  /**
   * Identifier used to describe and refer to the control in the markup.
   *
   * If not provided, a unique id will be generated.
   */
  id?: string;
};

export type UseFieldReturn<TFormValues extends FormValues = FormValues> = {
  fieldId: string;
  errors: Hook.FieldErrors<TFormValues>;
};

export type FieldProps<
  TFormValues extends FormValues = FormValues
> = ControlProps<TFormValues> & {
  /**
   * Identifier used to describe and refer to the control in the markup.
   *
   * If not provided, a unique id will be generated.
   */
  id?: string;
  /**
   * Label text used in <Field.Label>.
   */
  label?: string;
  /**
   * Info text used in <Field.Info>.
   */
  info?: string;
  /**
   * Flag to determine whether or not to show errors in <Field.Error>.
   */
  showError?: boolean;
  /**
   * Flag to determine whether or not to show an asterix in <Field.Label>.
   */
  showRequired?: boolean;
};
