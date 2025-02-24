
import { motion } from "framer-motion";


type AnimatedHeadingProps = {
  text: string;
  hasEMDash?: boolean;
};



const AnimatedHeading = ({text , hasEMDash} :AnimatedHeadingProps) => {
  const words = text.split(" ");

  return (
   <div className="mx-[12.5rem] w-[85ch]">
     <h1 className="  text-left text-white text-[4.5rem] font-[500] mt-[10rem]  leading-[5.8rem]">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={`inline-block ${hasEMDash && [4,5,6,9,10].includes(index) ? "text-[rgb(220,117,80)]" : ""}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h1>
   </div>
  );
};

export default AnimatedHeading;
