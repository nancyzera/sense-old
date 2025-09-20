import { useEffect, useState } from "react";
import { createHighlighter, type Highlighter } from "shiki";

interface CodeBlockProps {
  code: string;
  language: "javascript" | "typescript" | "html" | "css" | "tsx" | "vue";
  theme?: string;
}

export default function CodeBlock({
  code,
  language,
  theme = "vitesse-dark",
}: CodeBlockProps) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    let isMounted = true;

    createHighlighter({
      themes: [theme],
      langs: [language],
    })
      .then((highlighter: Highlighter) => {
        if (!isMounted) return;

        setHtml(
          highlighter.codeToHtml(code, {
            lang: language,
            theme: theme,
          })
        );
      })
      .catch((err) => {
        console.error("Shiki highlighter error:", err);
      });

    return () => {
      isMounted = false;
    };
  }, [code, language, theme]);

  return (
    <div
      className="rounded-md p-4 text-sm overflow-x-auto custom-code-block"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}