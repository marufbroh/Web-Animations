import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const Lesson1 = () => {
  const controls = useAnimationControls();

  useEffect(() => {
controls.start((i) => ({x: 200, transition: {delay: i * 1}}))
  }, [])

  return (
    <div className="border border-red-500 size-[400px] flex flex-col justify-center items-center">
      <motion.div
        className="size-32 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        animate={controls}
        custom={1}
        onClick={() => controls.stop()}
      ></motion.div>
      <motion.div
        className="size-32 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        animate={controls}
        custom={2}
      ></motion.div>
      <motion.div
        className="size-32 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        animate={controls}
        custom={3}
      ></motion.div>
    </div>
  );
};

export default Lesson1;
