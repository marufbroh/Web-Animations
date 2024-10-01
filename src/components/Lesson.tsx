import { motion, useAnimate } from "framer-motion";

const Lesson = () => {
const [scope, animate] = useAnimate();

const handleClick = () => {
animate(scope.current, {rotate: 45})
}

  return (
    <div className="border border-red-500 size-[400px] flex flex-col justify-center items-center">
      <div className="size-32 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
      ref={scope}
      onClick={handleClick}
      ></div>
    </div>
  );
};

export default Lesson;
