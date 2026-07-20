"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";
import Button from "@/components/ui/Button";

// Node positions for the signature animated network-topology graphic.
const nodes = [
  { x: 60, y: 80 }, { x: 220, y: 40 }, { x: 380, y: 110 },
  { x: 520, y: 50 }, { x: 640, y: 140 }, { x: 140, y: 220 },
  { x: 320, y: 260 }, { x: 480, y: 230 }, { x: 610, y: 300 },
  { x: 90, y: 340 }, { x: 260, y: 390 }, { x: 440, y: 360 },
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [2, 6], [3, 7], [4, 8],
  [5, 6], [6, 7], [7, 8], [5, 9], [6, 10], [7, 11], [9, 10], [10, 11],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-royal-950 via-royal-900 to-royal-800 pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Signature animated network topology */}
      <svg
        viewBox="0 0 700 430"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40 md:opacity-60"
        preserveAspectRatio="xMidYMid slice"
      >
        {edges.map(([a, b], i) => (
          <motion.line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#edgeGradient)"
            strokeWidth={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.4, delay: i * 0.05, ease: "easeOut" }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={4}
            fill="#dfb545"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.7, 1], scale: 1 }}
            transition={{ duration: 2, delay: i * 0.08, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
          />
        ))}
        <defs>
          <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#dfb545" />
            <stop offset="100%" stopColor="#3f66c9" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container-hyperion relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300"
            >
              <ShieldCheck className="h-3.5 w-3.5" /> Accra&apos;s IT Training &amp; Services Partner
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              Certified networks start with{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">
                certified people.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-royal-100/80"
            >
              Hyperion Technologies delivers professional Cisco and CompTIA certification
              training alongside full-spectrum IT services — from networking and systems
              administration to graphics design and application development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Button href="/certifications" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Explore Certifications
              </Button>
              <Button href="/contact" variant="outline-light" size="lg">
                Talk to an Advisor
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-royal-100/70"
            >
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-gold-300" /> Cisco &amp; CompTIA aligned curriculum
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-gold-300" /> 10+ years teaching experience
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel relative hidden rounded-3xl p-8 lg:block"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-gold-300">Live Track / 200-301</p>
            <p className="mt-2 font-display text-2xl font-bold text-white">Cisco CCNA</p>
            <p className="mt-3 text-sm leading-relaxed text-royal-100/70">
              Networking fundamentals, IP connectivity, security basics, and automation —
              our most popular starting point.
            </p>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-gold-400/60 to-transparent" />
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-mono text-lg font-semibold text-white">8–12 wks</p>
                <p className="text-royal-100/60">Typical duration</p>
              </div>
              <div>
                <p className="font-mono text-lg font-semibold text-white">Associate</p>
                <p className="text-royal-100/60">Certification level</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
