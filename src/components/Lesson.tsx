import { motion, useCycle } from "framer-motion";

const Lesson = () => {
  const [x, cycle] = useCycle(0, 100, -100);

  return (
    <div className="border border-red-500 size-[400px] flex flex-col justify-center items-center">
      <motion.div className="size-32 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
      animate={{x: x}}
      onTap={() => cycle()}
      ></motion.div>
    </div>
  );
};

export default Lesson;
