import React from "react";
import examples from "../../examples/field";
import CodeBlock from "../../components/CodeBlock";

export function Field() {
  return (
    <div>
      <section>
        <h3>Basic</h3>
        <CodeBlock code={examples.basic} />
      </section>
      <section>
        <h3>Building blocks</h3>
        <CodeBlock code={examples.recreate} />
      </section>
    </div>
  );
}
