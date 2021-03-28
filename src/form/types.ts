import React from "react";
import Hook from "react-hook-form";
import { FormValues } from "../types";

type FormChildren = React.ReactChild | React.ReactChild[];

export type UseFormProps<
  TFormValues extends FormValues = FormValues,
  TContext extends object = object
> = Hook.UseFormProps<TFormValues, TContext>;

export type UseFormReturn<
  TFormValues extends FormValues = FormValues
> = Hook.UseFormReturn<TFormValues>;

export type FormProps<
  TFormValues extends FormValues = FormValues,
  TContext extends object = object
> = UseFormProps<TFormValues, TContext> & {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children:
    | FormChildren
    | ((methods: UseFormReturn<TFormValues>) => FormChildren);
  formProps?: React.FormHTMLAttributes<HTMLFormElement>;
};
