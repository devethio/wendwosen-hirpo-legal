import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/pages/about";
import { pageHead } from "@/lib/i18n";

export const Route = createFileRoute("/am/about")({
  head: () => pageHead("am", "about"),
  component: AboutPage,
});
