import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion';

interface BlobSpec {
  size: number;
  color: string;
  blur: number;
  /** Pixels per second — low enough to read as ambient drift. */
  speed: number;
  /** Starting position as a fraction of the movable range. */
  origin: { x: number; y: number };
  phase: number;
}

const BLOBS: BlobSpec[] = [
  {
    size: 420,
    color: 'oklch(0.5 0.2 264 / 0.55)',
    blur: 70,
    speed: 26,
    origin: { x: 0.02, y: 0.04 },
    phase: 0.2,
  },
  {
    size: 460,
    color: 'oklch(0.79 0.135 84 / 0.35)',
    blur: 75,
    speed: 20,
    origin: { x: 0.92, y: 0.88 },
    phase: 1.4,
  },
  {
    size: 400,
    color: 'oklch(0.65 0.16 200 / 0.28)',
    blur: 80,
    speed: 23,
    origin: { x: 0.34, y: 0.16 },
    phase: 2.7,
  },
];

interface Bounds {
  w: number;
  h: number;
}

function randomHeading(speed: number) {
  const angle = Math.random() * Math.PI * 2;
  return { vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed };
}

function rescale(vx: number, vy: number, speed: number) {
  const mag = Math.hypot(vx, vy) || 1;
  return { vx: (vx / mag) * speed, vy: (vy / mag) * speed };
}

function getLimits(size: number, bounds: Bounds) {
  const overflow = size * 0.3;
  const minX = -overflow;
  const maxX = Math.max(minX, bounds.w - size + overflow);
  const minY = -overflow;
  const maxY = Math.max(minY, bounds.h - size + overflow);
  return { minX, maxX, minY, maxY };
}

function AuroraBlob({ blob, bounds, active }: { blob: BlobSpec; bounds: Bounds; active: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const vel = useRef({ vx: 0, vy: 0 });
  const seeded = useRef(false);
  const elapsed = useRef(0);

  useLayoutEffect(() => {
    if (bounds.w === 0 || bounds.h === 0) return;
    const { minX, maxX, minY, maxY } = getLimits(blob.size, bounds);

    if (!seeded.current) {
      x.set(minX + blob.origin.x * (maxX - minX));
      y.set(minY + blob.origin.y * (maxY - minY));
      vel.current = randomHeading(blob.speed);
      seeded.current = true;
      return;
    }

    x.set(Math.min(maxX, Math.max(minX, x.get())));
    y.set(Math.min(maxY, Math.max(minY, y.get())));
  }, [blob, bounds, x, y]);

  useAnimationFrame((_, delta) => {
    if (!active || !seeded.current || bounds.w === 0) return;
    if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return;

    const dt = Math.min(delta, 48) / 1000;
    elapsed.current += delta;

    const { minX, maxX, minY, maxY } = getLimits(blob.size, bounds);

    let nx = x.get() + vel.current.vx * dt;
    let ny = y.get() + vel.current.vy * dt;
    let { vx, vy } = vel.current;
    let hit = false;

    if (nx <= minX) {
      nx = minX;
      vx = Math.abs(vx);
      vy += (Math.random() - 0.5) * blob.speed * 0.45;
      hit = true;
    } else if (nx >= maxX) {
      nx = maxX;
      vx = -Math.abs(vx);
      vy += (Math.random() - 0.5) * blob.speed * 0.45;
      hit = true;
    }

    if (ny <= minY) {
      ny = minY;
      vy = Math.abs(vy);
      vx += (Math.random() - 0.5) * blob.speed * 0.45;
      hit = true;
    } else if (ny >= maxY) {
      ny = maxY;
      vy = -Math.abs(vy);
      vx += (Math.random() - 0.5) * blob.speed * 0.45;
      hit = true;
    }

    vel.current = hit ? rescale(vx, vy, blob.speed) : { vx, vy };
    x.set(nx);
    y.set(ny);
    scale.set(1 + Math.sin(elapsed.current * 0.00035 + blob.phase) * 0.07);
  });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute top-0 left-0 will-change-transform"
      style={{ x, y, scale }}
    >
      <div
        className="rounded-full"
        style={{
          width: blob.size,
          height: blob.size,
          background: `radial-gradient(circle, ${blob.color}, transparent 70%)`,
          filter: `blur(${blob.blur}px)`,
        }}
      />
    </motion.div>
  );
}

export function AuroraBlobs() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { amount: 'some', once: false });
  const reduceMotion = useReducedMotion();
  const [bounds, setBounds] = useState<Bounds>({ w: 0, h: 0 });

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const publish = () => setBounds({ w: node.clientWidth, h: node.clientHeight });
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(node);
    return () => ro.disconnect();
  }, []);

  const active = Boolean(inView && !reduceMotion);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {bounds.w > 0
        ? BLOBS.map((blob) => (
            <AuroraBlob key={blob.color} blob={blob} bounds={bounds} active={active} />
          ))
        : null}
    </div>
  );
}
