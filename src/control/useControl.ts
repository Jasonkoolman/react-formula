import { useController, useFormState } from "react-hook-form";
import { FormValues } from "../types";
import {
  UseControlProps,
  UseControlReturn,
  UseRegisterProps,
  UseRegisterReturn,
} from "./types";

function useRegister<TFormValues extends FormValues = FormValues>(
  props: UseRegisterProps<TFormValues>
): UseRegisterReturn<TFormValues> {
  const { name, control, rules } = props;
  const formState = useFormState({ control });
  const fieldState = Object.defineProperties(
    {},
    {
      invalid: {
        get() {
          return !!formState.errors[name];
        },
      },
      isDirty: {
        get() {
          return !!formState.dirtyFields[name];
        },
      },
      isTouched: {
        get() {
          return !!formState.touchedFields[name];
        },
      },
      error: {
        get() {
          return !!formState.errors[name];
        },
      },
    }
  );

  return {
    field: control?.register(name, rules) || ({} as any),
    fieldState,
    formState,
  };
}

export function useControl<TFormValues extends FormValues = FormValues>({
  name,
  rules,
  control,
  defaultValue,
  controlled,
}: UseControlProps<TFormValues>): UseControlReturn<TFormValues> {
  const useProps = {
    name,
    rules,
    defaultValue,
    control,
  };

  const {
    field: { ref, ...input },
    fieldState: inputState,
    formState,
  } = controlled ? useController(useProps) : useRegister(useProps);

  return {
    input: {
      ...input,
      inputState,
      inputRef: ref,
    },
    formState,
  };
}
