import { motion, useMotionValue, useTransform } from "framer-motion";

const Lesson = () => {
  const x = useMotionValue(0);

  const opacity = useTransform(x, [0, 400], [1, 0])
  return (
    <div className="border border-red-500 size-[400px] flex flex-col justify-center items-center">
      <motion.div
        className="size-32 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        style={{ x, opacity }}
        drag="x"
      ></motion.div>
    </div>
  );
};

export default Lesson;
