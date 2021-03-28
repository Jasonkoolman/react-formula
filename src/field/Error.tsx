import React from "react";
import {
  FieldError,
  FieldErrors,
  Message,
  MultipleFieldErrors,
} from "react-hook-form";

// type FieldValuesFromFieldErrors<
//   TFieldErrors
// > = TFieldErrors extends FieldErrors<infer TFieldValues> ? TFieldValues : never;

const defaultMessages = {
  required: "This field is required",
};

type ErrorProps<TFieldErrors extends FieldErrors> = {
  name: string; // FieldPath<FieldValuesFromFieldErrors<TFieldErrors>>;
  errors?: TFieldErrors;
  message?: Message;
  render?: (data: {
    message: Message;
    messages?: MultipleFieldErrors;
  }) => React.ReactNode;
};

const Error = <TFieldErrors extends FieldErrors>(
  props: ErrorProps<TFieldErrors>
) => {
  const { name, errors, message, render } = props;
  const error = errors ? errors[name] : null;

  if (!error) {
    return null;
  }

  const { message: validatorMessage, type, types } = error as FieldError;
  const errorMessage =
    message || validatorMessage || defaultMessages[type] || "Field is invalid";

  return (
    <div className="field-error" role="alert">
      {render
        ? (render({
            message: errorMessage,
            messages: types,
          }) as React.ReactElement)
        : errorMessage}
    </div>
  );
};

export default Error;
