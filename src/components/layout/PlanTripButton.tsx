'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SparklesIcon } from 'lucide-react';

export function PlanTripButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-24 right-6 z-40"
    >
      <Link
        href="/plan-your-trip"
        aria-label="Plan your trip"
        className="flex items-center gap-3 rounded-full bg-gold px-4 py-3.5 text-jungle-deep shadow-lift transition-colors hover:bg-gold-light"
      >
        <SparklesIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        <span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] sm:inline">
          Plan My Trip
        </span>
      </Link>
    </motion.div>
  );
}
