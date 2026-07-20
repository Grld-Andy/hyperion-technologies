import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedServices from "@/components/home/FeaturedServices";
import TrainingPrograms from "@/components/home/TrainingPrograms";
import Stats from "@/components/home/Stats";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import VideoPreview from "@/components/home/VideoPreview";
import NewsPreview from "@/components/home/NewsPreview";
import ContactCTA from "@/components/home/ContactCTA";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Home",
  description:
    "Professional Cisco (CCNA, CCNP, CCIE) and CompTIA (A+, Network+) certification training plus full IT services in Accra, Ghana.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <TrainingPrograms />
      <Stats />
      <FeaturedServices />
      <GalleryPreview />
      <VideoPreview />
      <TestimonialsPreview />
      <NewsPreview />
      <ContactCTA />
    </>
  );
}
