import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-gradient-to-b from-royal-950 to-royal-800 text-white">
      <div className="container-hyperion text-center">
        <p className="font-mono text-7xl font-bold text-gold-300 md:text-8xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold md:text-3xl">Page Not Found</h1>
        <p className="mx-auto mt-3 max-w-md text-royal-100/75">
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
        <p className="mt-10 text-sm text-royal-100/60">
          Or browse{" "}
          <Link href="/certifications" className="underline hover:text-gold-300">
            certifications
          </Link>{" "}
          and{" "}
          <Link href="/services" className="underline hover:text-gold-300">
            services
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
