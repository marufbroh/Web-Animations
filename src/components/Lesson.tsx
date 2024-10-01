import { motion, useDragControls } from "framer-motion";

const Lesson = () => {

const controls = useDragControls();
  return (
    <div className="border border-red-500 size-[400px] flex flex-col justify-center items-center">
      <div onPointerDown={(e) => controls.start(e)} className="w-32 h-6 size-32 bg-green-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
      ></div>
      <motion.div className="size-32 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
      drag="x"
      dragControls={controls}
      ></motion.div>
    </div>
  );
};

export default Lesson;
