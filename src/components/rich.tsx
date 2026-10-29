import { Fragment } from "react";

// Title parts alternate plain and emphasised text: ["plain ", "emphasised", " plain"].
// Emphasis is italic in English; Amharic pages restyle it (see styles.css).
export function Emphasis({ parts }: { parts: string[] }) {
  return (
    <>
      {parts.map((p, i) => (i % 2 ? <span key={i} className="italic">{p}</span> : <Fragment key={i}>{p}</Fragment>))}
    </>
  );
}

// Renders `**bold**` spans inside a dictionary paragraph.
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((p, i) => (i % 2 ? <strong key={i} className="font-medium text-ink">{p}</strong> : <Fragment key={i}>{p}</Fragment>))}
    </>
  );
}
