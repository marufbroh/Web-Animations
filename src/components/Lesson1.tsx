import { motion } from "framer-motion";

const Lesson1 = () => {
  return (
    <motion.div
      className="size-64 bg-indigo-500 rounded-lg"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ type: "spring", duration: 2 }}
    ></motion.div>
  );
};

export default Lesson1;
