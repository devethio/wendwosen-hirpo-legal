import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages/contact";
import { pageHead } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("am", "contact"),
  component: ContactPage,
});
