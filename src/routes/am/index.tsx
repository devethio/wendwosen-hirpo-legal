import { createFileRoute, redirect } from "@tanstack/react-router";

// Amharic lived under /am before it became the default; keep those links working.
export const Route = createFileRoute("/am/")({
  beforeLoad: () => {
    throw redirect({ href: "/", statusCode: 301 });
  },
});
