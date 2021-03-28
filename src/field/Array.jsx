import { useFormContext, useFieldArray } from "react-hook-form";
import { mergeClasses } from "../../utils";

/**
 * The default classes used by FieldArray.
 */
const defaultClasses = {
  root: "field-array",
  item: "field-array-item",
};

/**
 * Field array component.
 */
const Array = (props) => {
  const classes = mergeClasses(defaultClasses, props.classes);
  const context = useFormContext();
  const control = context ? context.control : props.control;

  const { fields, append, remove } = useFieldArray({
    name: props.name,
    control,
  });

  const renderField = (field, index) => {
    return props.render({
      id: field.id,
      name: `${props.name}[${index}]`,
      value: field.value,
    });
  };

  return (
    <div className={classes.root}>
      {fields.map((field, index) => (
        <div key={field.id} className={classes.item} data-index={index}>
          {renderField(field, index)}
          <button type="button" onClick={() => remove(index)}>
            Add field
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append(props.defaultValue || {})}>
        Remove field
      </button>
    </div>
  );
};

// Array.propTypes = {
//   name: Props.string.isRequired,
//   render: Props.func.isRequired,
//   control: Props.object,
//   classes: Props.object,
//   defaultValue: Props.object
// };

export default Array;
