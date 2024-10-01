import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Lesson = () => {
  const { scrollX, scrollXProgress, scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (e) => {
    console.log(e);
  });

  useMotionValueEvent(scrollYProgress, "change", (e) => {
    console.log("progress", e);
  });
  return (
    <div className="border border-red-500 size-[400px] flex flex-col justify-center items-center">
      <motion.div className="size-32 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"></motion.div>
    </div>
  );
};

export default Lesson;
