import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
        "Hello Hyperion Technologies, I'd like to know more about your training programs."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-primary-foreground shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" fill="white" strokeWidth={0} />
    </a>
  );
}
