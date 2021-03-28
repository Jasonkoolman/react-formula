import React from "react";

interface ContainerProps {
  hasError?: boolean;
  children: React.ReactNode | React.ReactNode[];
}

function Container({ children, hasError }: ContainerProps) {
  return (
    <div className={"field-container" + (hasError ? " has-error" : "")}>
      {children}
    </div>
  );
}

export default Container;
