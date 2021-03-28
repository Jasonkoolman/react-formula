import { useForm as useFormHook } from "react-hook-form";
import { FormValues } from "../types";
import { UseFormProps, UseFormReturn } from "./types";

export const useForm = <
  TFormValues extends FormValues = FormValues,
  TContext extends object = object
>(
  props?: UseFormProps<TFormValues, TContext>
): UseFormReturn<TFormValues> => {
  // Proxy useForm so we can extend this hook later on
  return useFormHook<TFormValues, TContext>(props);
};
