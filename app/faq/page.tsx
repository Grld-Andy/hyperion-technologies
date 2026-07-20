import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import FAQClient from "@/components/faq-client";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description: "Frequently asked questions about enrollment, certifications, and services at Hyperion Technologies.",
  path: "/faq",
});

export default function FAQPage() {
  return <FAQClient />;
}
