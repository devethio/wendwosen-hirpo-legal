import { useId } from "react";

// A woven border band after tibeb, the patterned hem of the Ethiopian netela.
// Drawn in currentColor, so set the colour with a text-* class.
export function Tibeb({ className = "" }: { className?: string }) {
  const id = `tibeb-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <svg aria-hidden className={`block w-full h-5 ${className}`}>
      <defs>
        <pattern id={id} width="32" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 1.5h32M0 18.5h32" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          <path d="M8 4l6 6-6 6-6-6z" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M8 7.5l2.5 2.5L8 12.5 5.5 10z" fill="currentColor" />
          <path d="M24 6l4 4-4 4-4-4z" fill="currentColor" opacity="0.45" />
          <circle cx="16" cy="10" r="0.9" fill="currentColor" />
          <circle cx="0" cy="10" r="0.9" fill="currentColor" />
          <circle cx="32" cy="10" r="0.9" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
