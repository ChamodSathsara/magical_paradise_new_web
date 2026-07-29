'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleIcon } from 'lucide-react';
import { SITE } from '../../data/site';

export function WhatsAppButton() {
  return (
    <motion.a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05 }}
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[#1f8f4e] px-4 py-3.5 text-white shadow-lift">
      
      <MessageCircleIcon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      <span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] sm:inline">
        WhatsApp Us
      </span>
    </motion.a>);

}