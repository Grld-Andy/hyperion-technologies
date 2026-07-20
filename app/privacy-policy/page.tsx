import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE, CONTACT } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Hyperion Technologies' privacy policy covering data collection, use, and protection.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container-hyperion max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">Legal</span>
        <h1 className="mt-4 font-display text-3xl font-bold text-royal-950 md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate">Last updated: July 19, 2026</p>

        <div className="prose prose-royal mt-10 max-w-none prose-headings:font-display prose-headings:text-royal-950 prose-a:text-royal-600">
          <p>
            {SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy. This policy explains what
            information we collect through our website, how we use it, and the choices you
            have. This is a template policy — have it reviewed by a qualified professional
            before relying on it as your final legal document.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information when you interact with our website:</p>
          <ul>
            <li>Contact details you submit through our contact form (name, email, phone number, message)</li>
            <li>Basic usage data such as pages visited and general browser/device information</li>
            <li>Information you send us directly via WhatsApp, phone, or email</li>
          </ul>

          <h2>How We Use Information</h2>
          <ul>
            <li>To respond to enquiries about our training programs and services</li>
            <li>To process enrollments and communicate about courses</li>
            <li>To improve our website and service offerings</li>
          </ul>

          <h2>Sharing of Information</h2>
          <p>
            We do not sell your personal information. We may share information with trusted
            service providers strictly to operate our website and services (for example, form
            or hosting providers), and only as required to provide those services.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website may use basic cookies or similar technologies to support core
            functionality and understand aggregate site usage. You can control cookies through
            your browser settings.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect information submitted to us, but no method
            of transmission or storage is completely secure.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of personal information you
            have submitted to us by contacting us using the details below.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about this policy can be directed to {CONTACT.email} or {CONTACT.phone}.
          </p>
        </div>
      </div>
    </section>
  );
}
