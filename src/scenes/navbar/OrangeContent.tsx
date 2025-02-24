import { motion } from "framer-motion";
import reel from "../Pineapple showreel v14_2.mp4"
import StatsSection from "./StatsSection";

type AnimatedOrangeprop = {
    text: string;
   
  };


  
  
  const OrangeContent = ({text} : AnimatedOrangeprop) => {
    const words = text.split(" ");
  
  return (
    <div className="flex flex-col gap-[2rem] justify-center items-center">
        
        <h3 className=" w-[24ch] text-center text-white text-[2.54rem] font-[550] absolute bottom-[66.2rem] leading-[3.4rem]">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h3>
        

        <div className="w-[89.2rem] h-[51.7rem] flex flex-col justify-between items-center absolute top-[28.2rem]">
            <section className="w-[89.2rem] flex flex-col justify-center items-center">
            <StatsSection />
            </section>
            <section>
                <video className="h-[42rem] w-[74.9rem]  object-cover" controls src={reel}></video>
            </section>
        </div>
    </div>
  )
}

export default OrangeContent;