import { motion } from "framer-motion";

export default function ProjectLink({ title, description, linktext, top, left, bottom, right }) {
  return (
    <motion.div
      className="absolute border-2 max-h-[55%] h-[450px] w-[450px] bg-white text-(--primary-color) z-10 overflow-y-hidden"
      style={{ top, left, bottom, right, perspective: 1000 }}
      whileHover={{
        rotateX: -5,
        rotateY: 5,
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      animate={{
        y: [0, -10, 0],
        transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
      }}
    >
      <a href="#" className="group flex justify-center items-center cursor-pointer bg-white h-full p-6">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">{title || "Default Title"}</h1>
          <p className="my-3 text-lg">{description || "This is a description."}</p>

          <a className="flex items-center gap-1">
            <span>View my</span>
            <span className="text-blue-600 group-hover:underline">{linktext}</span>
          </a>
        </div>
      </a>
    </motion.div>
  );
}
