// import React from 'react';
// import PropTypes from 'prop-types';

// export type ButtonType = 'button' | 'reset' | 'submit';
// export type ButtonVariant = 'primary' | 'basic' | 'outline';

// export interface ButtonProps {
//   variant?: ButtonVariant;
//   size?: 'sm' | 'lg';
//   type?: ButtonType;
//   href?: string;
//   disabled?: boolean;
//   className?: string;
// }

// export type CommonButtonProps = 'href' | 'size' | 'variant' | 'disabled';

// const Button = ({
//     variant,
//     size,
//     className,
//     type,
//     ...props
//   }: ButtonProps) => {
//     const prefix = "btn";

//     const classes = classNames(
//       className,
//       prefix,
//       active && 'active',
//       variant && `${prefix}-${variant}`,
//       block && `${prefix}-block`,
//       size && `${prefix}-${size}`,
//     );

//     if (props.href) {
//       return (
//         <SafeAnchor
//           {...props}
//           as={as}
//           ref={ref}
//           className={classNames(classes, props.disabled && 'disabled')}
//         />
//       );
//     }

//     if (ref) {
//       (props as any).ref = ref;
//     }

//     if (type) {
//       (props as any).type = type;
//     } else if (!as) {
//       (props as any).type = 'button';
//     }

//     const Component = as || 'button';
//     return <Component {...props} className={classes} />;
//   },
// );

// export default Button;

export default {};
