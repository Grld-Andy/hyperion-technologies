import { ImageIcon, PlayCircle } from "lucide-react";

type Props = {
  label: string;
  kind?: "image" | "video";
  aspect?: "square" | "video" | "portrait" | "wide";
  className?: string;
};

const aspectClass: Record<NonNullable<Props["aspect"]>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

/**
 * Renders a labeled placeholder tile standing in for a real photo/video.
 * To replace: drop your file into the matching /public path and swap this
 * component for a real <Image>/<video> element referencing it.
 */
export default function PlaceholderMedia({
  label,
  kind = "image",
  aspect = "video",
  className = "",
}: Props) {
  const Icon = kind === "video" ? PlayCircle : ImageIcon;
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${aspectClass[aspect]} ${className}`}
      style={{
        background:
          "linear-gradient(135deg, var(--color-royal-800), var(--color-royal-600) 55%, var(--color-royal-400))",
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 60% 70%, white 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 p-4 text-center">
        <Icon className="h-8 w-8 text-gold-300" strokeWidth={1.5} />
        <p className="text-xs font-medium uppercase tracking-wider text-white/85">{label}</p>
      </div>
    </div>
  );
}
