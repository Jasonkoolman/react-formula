import React from "react";

interface InfoProps {
  children: React.ReactChild | React.ReactChild[];
}

function Info({ children }: InfoProps) {
  return <p className="field-info">{children}</p>;
}

export default Info;
