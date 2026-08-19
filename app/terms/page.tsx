import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE, CONTACT, TRADEMARK_NOTICE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms and conditions for using Hyperion Technologies' website, training programs, and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-20 bg-card">
      <div className="container-hyperion max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Legal</span>
        <h1 className="mt-4 font-display text-3xl font-bold text-primary-deep md:text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: July 19, 2026</p>

        <div className="prose prose-royal mt-10 max-w-none prose-headings:font-display prose-headings:text-primary-deep prose-a:text-primary">
          <p>
            These Terms &amp; Conditions govern your use of the {SITE.name} website and your
            enrollment in our training programs and services. This is a template document —
            have it reviewed by a qualified professional before relying on it as your final
            legal document.
          </p>

          <h2>Use of This Website</h2>
          <p>
            Content on this website is provided for general informational purposes. We aim to
            keep information accurate and current, but we do not guarantee completeness or
            accuracy at all times.
          </p>

          <h2>Training Programs &amp; Enrollment</h2>
          <ul>
            <li>Course durations listed are typical estimates and are customizable based on schedule and pace.</li>
            <li>Enrollment terms, pricing, and payment arrangements are confirmed directly with our team prior to enrollment.</li>
            <li>We prepare students for official certification exams but do not administer those exams ourselves — official exams are delivered by the relevant certification body (e.g., Pearson VUE).</li>
          </ul>

          <h2>No Certification Guarantee</h2>
          <p>
            While our programs are designed to thoroughly prepare students, certification exam
            results depend on the certifying body and individual performance. We do not
            guarantee a specific exam outcome.
          </p>

          <h2>Intellectual Property &amp; Trademarks</h2>
          <p>{TRADEMARK_NOTICE}</p>

          <h2>IT Services</h2>
          <p>
            Scope, pricing, and timelines for services such as networking, systems
            administration, design, and development are agreed upon directly with clients
            before work begins.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the extent permitted by law, {SITE.name} is not liable for indirect or
            consequential damages arising from use of this website or our services.
          </p>

          <h2>Changes to These Terms</h2>
          <p>We may update these terms from time to time. Continued use of our website constitutes acceptance of any changes.</p>

          <h2>Contact Us</h2>
          <p>
            Questions about these terms can be directed to {CONTACT.email} or {CONTACT.phone}.
          </p>
        </div>
      </div>
    </section>
  );
}
