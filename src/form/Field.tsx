import React from "react";
import { useFormContext } from "react-hook-form";
import { FormValues } from "../types";
import { Field as BaseField, FieldProps } from "../field";
import { warn } from "../utils";

/**
 * Wrapper component for Field to use within a Form component.
 *
 * This component proxies all parameters to Field, but uses the form context
 * to access the control. This way the Form.Field can be deeply nested within
 * a Form component, without having to pass a `control` property to each child.
 */
const Field = <TFormValues extends FormValues = FormValues>(
  props: FieldProps<TFormValues>
) => {
  const context = useFormContext();

  if (!context) {
    return warn(
      `No context found for Form.Field "${props.name}". Please ensure that the component is a child of <Form>, or manually create a context. Another option is to use <Field>, which does not rely on context.`
    );
  }

  const { control, formState } = context;

  // Make sure formState is read to enable the Proxy before render
  const isDirty = formState.isDirty;
  const error = formState.errors[props.name];

  return (
    <MemoField
      {...props}
      control={control}
      isDirty={isDirty}
      hasError={!!error}
      errorType={error?.type}
    />
  );
};

/**
 * A memoized Field to prevent unnecessary renders due to Context changes.
 *
 * @internal
 */
const MemoField = React.memo(
  ({ isDirty, hasError, errorType, ...rest }: any) => <BaseField {...rest} />,
  (prevProps, nextProps) =>
    prevProps.isDirty === nextProps.isDirty &&
    prevProps.hasError === nextProps.hasError &&
    prevProps.errorType === nextProps.errorType
);

export default Field;
