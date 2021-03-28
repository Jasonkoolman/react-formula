import { useMemo } from "react";
import { useFormState } from "react-hook-form";
import { generateId } from "../utils";
import { FormValues } from "../types";
import { UseFieldProps, UseFieldReturn } from "./types";

export function useField<TFormValues extends FormValues = FormValues>({
  id,
  name,
  control,
}: UseFieldProps<TFormValues>): UseFieldReturn<TFormValues> {
  const { errors } = useFormState({ control });
  const fieldId = useMemo(() => id || generateId(name), [id]);

  return {
    fieldId,
    errors,
  };
}
