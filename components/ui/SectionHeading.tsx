type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${
            light ? "text-gold-soft" : "text-gold"
          }`}
        >
          <span className="h-px w-6 bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight ${
          light ? "text-primary-foreground" : "text-primary-deep"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
