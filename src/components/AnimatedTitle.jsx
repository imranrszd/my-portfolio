'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MagnifyText() {
  const text = "IMRAN'S PORTFOLIO";
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseMove = (index) => setHoverIndex(index);
  const handleMouseLeave = () => setHoverIndex(null);

  return (
    <a className="flex select-none">
      {text.split("").map((letter, i) => {
        const distance = hoverIndex === null ? 0 : Math.abs(i - hoverIndex);
        const scale = hoverIndex === null ? 1 : Math.max(1.1 - distance * 0.11, 1);
        const y = hoverIndex === null ? 0 : -Math.max(10 - distance * 4, 0);

        return (
          <motion.span
            key={i}
            onMouseEnter={() => handleMouseMove(i)}
            onMouseLeave={handleMouseLeave}
            animate={{ scale, y }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="text-6xl font-bold tracking-wide cursor-default"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </a>
  );
}
