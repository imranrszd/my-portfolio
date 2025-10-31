import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const moveCursor = (e) => {
      x.set(e.clientX - 15);
      y.set(e.clientY - 15);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-[--primary-color] rounded-full pointer-events-none mix-blend-difference"
      style={{ x: springX, y: springY }}
    />
  );
}
