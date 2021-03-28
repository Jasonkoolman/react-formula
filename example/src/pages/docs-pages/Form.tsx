import React from "react";
import examples from "../../examples/form";
import CodeBlock from "../../components/CodeBlock";

export function Form() {
  return (
    <div>
      <section>
        <h3>Basic</h3>
        <CodeBlock code={examples.basic} />
      </section>
    </div>
  );
}
