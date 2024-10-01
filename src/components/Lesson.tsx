import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Lesson = () => {
  const [visible, setVisible] = useState(true);

  const box = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 100,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div className="border border-red-500 size-[400px] flex flex-col justify-center items-center">
      <motion.button
        layout
        className="bg-green-500 p-1 rounded"
        onClick={() => setVisible(!visible)}
      >
        Toggle
      </motion.button>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="size-32 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
            variants={box}
            initial="hidden"
            animate="visible"
            exit="exit"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lesson;
