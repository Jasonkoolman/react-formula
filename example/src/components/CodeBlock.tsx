import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import { ReactComponent as CodeSandboxIcon } from "../assets/icons/codeSandbox.svg";
import styles from "./CodeBlock.module.scss";
import copyToClipboard from "../utils/copyToClipboard";

SyntaxHighlighter.registerLanguage("tsx", tsx);

type CodeBlockProps = {
  code: string;
  url?: string;
  disableCopy?: boolean;
};

type CodeBlockToolbarProps = {
  url?: string;
  onCopy?: () => void;
};

type CodeBlockContentProps = {
  code: string;
};

const CodeBlockToolbar = ({ url, onCopy }: CodeBlockToolbarProps) => (
  <div className={styles.toolbar}>
    {onCopy && (
      <button
        className={`${styles.button}`}
        onClick={onCopy}
        aria-label="Copy to clipboard"
      >
        Copy
      </button>
    )}
    {url && (
      <a
        className={`${styles.button} ${styles.demoButton}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CodeSandboxIcon />
        Preview
      </a>
    )}
  </div>
);

const CodeBlockContent = ({ code }: CodeBlockContentProps) => (
  <div className={styles.content}>
    <SyntaxHighlighter language="tsx" useInlineStyles={false}>
      {code}
    </SyntaxHighlighter>
  </div>
);

export default function CodeBlock({ code, url, disableCopy }: CodeBlockProps) {
  const handleCopy = React.useMemo(
    () => (disableCopy ? undefined : () => copyToClipboard(code)),
    [code, disableCopy]
  );

  return (
    <div className={styles.container}>
      <CodeBlockToolbar url={url} onCopy={handleCopy} />
      <CodeBlockContent code={code} />
    </div>
  );
}
