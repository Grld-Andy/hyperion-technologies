import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-primary-deep text-primary-foreground">
      <div className="container-hyperion text-center">
        <p className="font-mono text-7xl font-bold text-gold-soft md:text-8xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold md:text-3xl">Page Not Found</h1>
        <p className="mx-auto mt-3 max-w-md text-primary-foreground/75">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/" size="lg" icon={<Home className="h-4 w-4" />}>
            Back to Home
          </Button>
          <Button href="/contact" variant="outline-light" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Contact Us
          </Button>
        </div>
        <p className="mt-10 text-sm text-primary-foreground/60">
          Or browse{" "}
          <Link href="/certifications" className="underline hover:text-gold-soft">
            certifications
          </Link>{" "}
          and{" "}
          <Link href="/services" className="underline hover:text-gold-soft">
            services
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
