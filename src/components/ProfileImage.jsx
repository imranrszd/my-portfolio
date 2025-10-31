import { motion } from "framer-motion";

function ProfileImage() {
  return (
    <>
      <div className="absolute w-full h-50 bg-(--primary-color) border rounded"></div>
      <motion.div
        className="relative w-50 h-50 rounded mb-8 mr-10 overflow-hidden shadow-lg"
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
        style={{ perspective: 1000 }}
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/58bdb4b49f7456dff81be981/1575407748923-YJ3UPHY60JCESZ6ZQDII/74687630_1332617436911108_6686358952074418598_n.jpg"
          alt="Profile"
          className="w-full h-full object-cover rounded"
        />
      </motion.div></>
  );
}

export default ProfileImage;
