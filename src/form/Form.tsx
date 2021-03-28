import React from "react";
import { FormProvider } from "react-hook-form";
import { isFunction } from "../utils";
import { FormValues } from "../types";
import { FormProps } from "./types";
import { useForm } from "./useForm";
import ErrorBoundary from "./ErrorBoundary";
import Field from "./Field";

/**
 * The base component for forms.
 */
export const Form = <
  TFormValues extends FormValues = FormValues,
  TContext extends object = object
>(
  props: FormProps<TFormValues, TContext>
) => {
  const {
    mode = "onSubmit",
    reValidateMode = "onChange",
    criteriaMode = "firstError",
    shouldFocusError = true,
    defaultValues,
    onSubmit,
    children,
    formProps = {},
  } = props;

  const methods = useForm({
    mode,
    reValidateMode,
    criteriaMode,
    defaultValues,
    shouldFocusError,
  });

  const { handleSubmit } = methods;

  return (
    <ErrorBoundary>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} {...formProps} noValidate>
          {isFunction(children) ? children(methods) : children}
        </form>
      </FormProvider>
    </ErrorBoundary>
  );
};

Form.Field = Field;
