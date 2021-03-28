import { FormValues } from "../types";
import { useControl } from "./useControl";
import { ControlProps } from "./types";

/**
 * The base component for form controls.
 *
 * This component acts as a Controller and will take care
 * of the registration process for controls as well as
 * injecting common props and adding custom validation.
 */
export const Control = <TFormValues extends FormValues = FormValues>(
  props: ControlProps<TFormValues>
) => {
  const {
    name,
    control,
    controlled,
    defaultValue,
    transform,
    rules,
    render,
    ...rest
  } = props;

  const { input } = useControl({
    name,
    rules,
    transform,
    defaultValue,
    control,
    controlled,
  });

  const inputProps = {
    ...rest,
    ...input,
  };

  return render(inputProps);
};
