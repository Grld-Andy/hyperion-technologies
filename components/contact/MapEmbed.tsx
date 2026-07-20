import { CONTACT } from "@/lib/constants";

export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-mid-gray">
      <iframe
        title="Hyperion Technologies location map"
        src={CONTACT.mapEmbedSrc}
        width="100%"
        height="320"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
