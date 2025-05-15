"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeInWrapper({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // only animate once
    margin: "-100px 0px", // start slightly before it hits view
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
