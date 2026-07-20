import { stats } from "@/lib/data/site-content";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-royal-950 to-royal-800 py-16">
      <div className="gold-seam" />
      <div className="container-hyperion">
        <p className="mb-8 text-center text-xs uppercase tracking-widest text-white/40">
          Placeholder figures — replace with verified statistics
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-mono text-3xl font-bold text-gold-300 md:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
