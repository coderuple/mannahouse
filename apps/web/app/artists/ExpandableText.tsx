"use client";

import * as React from "react";

type ExpandableTextProps = {
  text?: string;
  maxChars?: number;
  className?: string;
};

export function ExpandableText({ text = "", maxChars = 100, className }: ExpandableTextProps) {
  const [expanded, setExpanded] = React.useState(false);

  if (!text) return null;

  const needsClamp = text.length > maxChars;
  const displayText = !needsClamp || expanded ? text : text.slice(0, maxChars).trimEnd() + "…";

  return (
    <p className={className}>
      {displayText}
      {needsClamp && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="ml-1 underline text-white/80 hover:text-white"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </p>
  );
}


