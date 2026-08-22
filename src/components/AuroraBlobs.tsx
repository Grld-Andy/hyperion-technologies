import { useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';

interface Blob {
  id: string;
  size: number;
  anchor: string;
  gradient: string;
  blur: number;
  x: number[];
  y: number[];
  scale: number[];
  duration: number;
  delay: number;
  depth: number;
}

const BLOBS: Blob[] = [
  {
    id: 'blue',
    size: 440,
    anchor: '-top-28 -left-24',
    gradient: 'radial-gradient(circle, oklch(0.55 0.2 264 / 0.55), transparent 70%)',
    blur: 75,
    x: [0, 90, -40, 60, 0],
    y: [0, 60, 110, -30, 0],
    scale: [1, 1.15, 0.9, 1.1, 1],
    duration: 11,
    delay: 0,
    depth: 22,
  },
  {
    id: 'gold',
    size: 480,
    anchor: '-right-20 -bottom-28',
    gradient: 'radial-gradient(circle, oklch(0.79 0.14 84 / 0.4), transparent 70%)',
    blur: 80,
    x: [0, -80, 50, -30, 0],
    y: [0, -70, -20, 80, 0],
    scale: [1, 0.9, 1.18, 1.05, 1],
    duration: 14,
    delay: -3,
    depth: -16,
  },
  {
    id: 'teal',
    size: 380,
    anchor: 'top-1/3 left-[38%]',
    gradient: 'radial-gradient(circle, oklch(0.68 0.15 195 / 0.32), transparent 70%)',
    blur: 85,
    x: [0, 70, -90, 40, 0],
    y: [0, -60, 50, -40, 0],
    scale: [1, 1.2, 0.85, 1.1, 1],
    duration: 10,
    delay: -6,
    depth: 28,
  },
  {
    id: 'violet',
    size: 340,
    anchor: 'top-6 right-[22%]',
    gradient: 'radial-gradient(circle, oklch(0.55 0.19 300 / 0.3), transparent 70%)',
    blur: 70,
    x: [0, -60, 40, -20, 0],
    y: [0, 90, -50, 30, 0],
    scale: [1, 0.88, 1.12, 1, 1],
    duration: 12,
    delay: -8,
    depth: -24,
  },
  {
    id: 'gold-2',
    size: 300,
    anchor: 'top-[42%] left-[6%]',
    gradient: 'radial-gradient(circle, oklch(0.85 0.13 88 / 0.35), transparent 70%)',
    blur: 65,
    x: [0, 55, -70, 35, 0],
    y: [0, -80, -25, 65, 0],
    scale: [1, 1.1, 0.92, 1.16, 1],
    duration: 13,
    delay: -5,
    depth: 18,
  },
];

function usePointer() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handle = (e: PointerEvent) => {
      x.set(e.clientX / window.innerWidth - 0.5);
      y.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('pointermove', handle);
    return () => window.removeEventListener('pointermove', handle);
  }, [x, y]);

  return { x, y };
}

function AuroraBlob({
  blob,
  pointer,
  wanderEnabled,
}: {
  blob: Blob;
  pointer: { x: MotionValue<number>; y: MotionValue<number> };
  wanderEnabled: boolean;
}) {
  const parallaxX = useSpring(useTransform(pointer.x, (v) => v * blob.depth), {
    stiffness: 40,
    damping: 20,
  });
  const parallaxY = useSpring(useTransform(pointer.y, (v) => v * blob.depth), {
    stiffness: 40,
    damping: 20,
  });

  return (
    <motion.div
      className={`absolute ${blob.anchor}`}
      style={{ x: parallaxX, y: parallaxY, width: blob.size, height: blob.size }}
    >
      <motion.div
        className="h-full w-full rounded-full"
        style={{ background: blob.gradient, filter: `blur(${blob.blur}px)` }}
        animate={wanderEnabled ? { x: blob.x, y: blob.y, scale: blob.scale } : undefined}
        transition={{
          duration: blob.duration,
          delay: blob.delay,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}

export function AuroraBlobs() {
  const reduceMotion = useReducedMotion();
  const pointer = usePointer();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {BLOBS.map((blob) => (
        <AuroraBlob key={blob.id} blob={blob} pointer={pointer} wanderEnabled={!reduceMotion} />
      ))}
    </div>
  );
}
