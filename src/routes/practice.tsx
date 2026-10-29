import { createFileRoute } from "@tanstack/react-router";
import { PracticePage } from "@/components/pages/practice";
import { pageHead } from "@/lib/i18n";

export const Route = createFileRoute("/practice")({
  head: () => pageHead("am", "practice"),
  component: PracticePage,
});
