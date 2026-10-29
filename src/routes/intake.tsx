import { createFileRoute } from "@tanstack/react-router";
import { IntakePage } from "@/components/pages/intake";
import { pageHead } from "@/lib/i18n";

export const Route = createFileRoute("/intake")({
  head: () => pageHead("am", "intake"),
  component: IntakePage,
});
