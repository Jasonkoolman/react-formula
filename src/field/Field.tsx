import React from "react";
import { FormValues } from "../types";
import { Control } from "../control";
import { useField } from "./useField";
import { FieldProps } from "./types";
import Container from "./Container";
import Label from "./Label";
import Error from "./Error";
import Info from "./Info";

/**
 * The default classes used by Field.
 */
// const defaultClasses = {
//   root: "field",
//   label: "field-label",
//   error: "field-error",
//   info: "field-info",
// };

/**
 * The base component for form fields.
 *
 * This component acts as a Controller and will take care
 * of the registration process for controls as well as
 * injecting common props, supporting custom validators
 * and rendering basic UI.
 */
export const Field = <TFormValues extends FormValues = FormValues>(
  props: FieldProps<TFormValues>
) => {
  const {
    id,
    name,
    label,
    info,
    control,
    rules,
    showError = true,
    showRequired = true,
    ...rest
  } = props;

  const { fieldId, errors } = useField({
    id,
    name,
    control,
  });

  const required = !!rules?.required;

  const controlProps = {
    ...rest,
    id: fieldId,
    name,
    control,
    rules,
    required,
  };

  const labelElement = React.useMemo(
    () =>
      label && (
        <Field.Label htmlFor={fieldId} asterix={required && showRequired}>
          {label}
        </Field.Label>
      ),
    [label, required, showRequired]
  );

  const infoElement = React.useMemo(
    () => info && <Field.Info>{info}</Field.Info>,
    [info]
  );

  const errorElement = errors && showError && (
    <Field.Error name={name} errors={errors} />
  );

  return (
    <Field.Container hasError={!!errors?.name}>
      {labelElement}
      <Control {...controlProps} />
      {infoElement}
      {errorElement}
    </Field.Container>
  );
};

Field.Container = Container;
Field.Label = Label;
Field.Error = Error;
Field.Info = Info;
