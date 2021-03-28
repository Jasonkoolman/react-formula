import React from "react";
import { ReactComponent as Logo } from "../assets/img/formula-icon.svg";
import { ReactComponent as IsolatedRendersSVG } from "../assets/img/isolated-renders.svg";

const Home = () => (
  <main className="container">
    <header className="mt-6 mb-6">
      <h1 className="app-title">
        <Logo title="Formula logo" />
        Form<span>ula</span>
      </h1>
      <p
        style={{
          fontSize: 18,
          letterSpacing: 0.5,
          textAlign: "center",
          opacity: 0.65,
        }}
      >
        Painless forms for React.
      </p>
    </header>
    <div
      className="mb-6 text-center block-center"
      style={{
        maxWidth: 600,
      }}
    >
      <p>
        Let's face it, forms are verbose in React. To make matters worse, most
        form libraries do way too much magic and often have a significant
        performance cost associated with them. Formula is a component library on
        top of{" "}
        <a
          href="https://react-hook-form.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          react hook form
        </a>{" "}
        to help you compose forms of any complexity within no-time.
      </p>
    </div>

    <IsolatedRendersSVG
      title="Isolated renders"
      style={{ maxWidth: 620, margin: "0 auto", display: "block" }}
    />
  </main>
);

export default Home;
