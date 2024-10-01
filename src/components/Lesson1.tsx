import { motion } from "framer-motion";
import { useRef } from "react";

const parent = {
  hidden: { x: 0, y: 0, opacity: 0 },
  visible: {
    x: [0, 300, -300, 0],
    y: [0, 300, -300, 0],
    rotate: [0, 300, -300, 0],
    opacity: 1,
    transition: {
      ease: "linear",
      repeat: Infinity,
      duration: 5,
      opacity: {
        duration: 0.5,
      },
    },
  },
  hover: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
  tap: {
    scale: 1.1,
    boxShadow: "0px 10px 10px",
  },
};

const Lesson1 = () => {
  const parentRef = useRef(null);
  return (
    <div
      ref={parentRef}
      className="border border-red-500 size-[400px] flex justify-center items-center"
    >
      <motion.div
        className="size-32 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        drag
        dragElastic={0.7}
        dragConstraints={parentRef}
        whileDrag="tap"
      ></motion.div>
    </div>
  );
};

export default Lesson1;
