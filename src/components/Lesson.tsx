import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Lesson = () => {
const ref = useRef(null);

const inView = useInView(ref, {once: true});

// console.log(inView);


  return (
    <div className="border border-red-500 size-[400px] flex flex-col justify-center items-center">
      <motion.div className="size-32 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
      ref={ref}
      animate={inView? {opacity: 1, x:0} : {opacity: 0, x: -500}}
      ></motion.div>
    </div>
  );
};

export default Lesson;
