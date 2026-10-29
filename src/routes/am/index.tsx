import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/home";
import { pageHead } from "@/lib/i18n";

export const Route = createFileRoute("/am/")({
  head: () => pageHead("am", "home"),
  component: HomePage,
});
