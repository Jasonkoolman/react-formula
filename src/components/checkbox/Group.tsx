// import React, { useCallback, ReactElement } from "react";
// import { ControlProps } from "../control.interface";
// import { CheckboxProps } from "./Checkbox";

// type CheckboxChildProps = Omit<CheckboxProps, "value" | "onChange"> & {
//   name: string;
// };
// type CheckboxChildPassedProps = Pick<
//   CheckboxProps,
//   "value" | "onChange" | "disabled"
// >;

// interface GroupProps extends ControlProps {
//   value?: Record<string, boolean>;
//   children: ReactElement<CheckboxChildProps>[];
// }

// /**
//  * The default classes used by Group.
//  */
// const defaultClasses = {
//   root: "control-checkbox-group",
// };

// /**
//  * A group of checkbox controls.
//  */
// const Group = ({ value = {}, disabled, children, onChange }: GroupProps) => {
//   const handleSelect = useCallback(
//     (name: string, checked: boolean) => {
//       onChange &&
//         onChange({
//           ...value,
//           [name]: checked,
//         });
//     },
//     [value]
//   );

//   const cloneCheckbox = (child: ReactElement<CheckboxChildProps>) => {
//     const name = child.props.name;
//     const props = {
//       onChange: (checked: boolean) => handleSelect(name, checked),
//       value: value[name],
//     } as CheckboxChildPassedProps;

//     if (disabled) {
//       props.disabled = true;
//     }

//     return React.cloneElement(child, props);
//   };

//   return (
//     <div className={defaultClasses.root}>
//       {React.Children.map(children, cloneCheckbox)}
//     </div>
//   );
// };

// export default Group;

// export type { GroupProps };

export default {};
