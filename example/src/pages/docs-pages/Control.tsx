import React from "react";
import examples from "../../examples/control";
import CodeBlock from "../../components/CodeBlock";

export function Control() {
  return (
    <div>
      <section>
        <h3>Native</h3>
        <CodeBlock code={examples.native} url="test" />
      </section>
      <section>
        <h3>Component</h3>
        <CodeBlock code={examples.component} />
      </section>
      <section>
        <h3>Validation</h3>
        <CodeBlock code={examples.validation} />
      </section>
      <section>
        <h3>Select</h3>
        <CodeBlock code={examples.select} />
      </section>
    </div>
  );
}
