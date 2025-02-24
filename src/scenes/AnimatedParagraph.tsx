import founders from "./Pineapple Founders Video_3.mp4"
import { motion } from "framer-motion";


type AnimatedParagraphProps = {
  text: string;
//   hasEMDash?: boolean;
//   button : any;
};



const AnimatedParagraph = ({ text  }: AnimatedParagraphProps) => {
  const words = text.split(" ");

  return (
   <div className="mx-[12.5rem] h-[45rem] mt-[4rem] flex "> 
    
  <div className="flex items-start">
   <div className="mt-[1.5rem]">
   <span>
    <motion.span
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.1 }}>
        <span className="w-[30px] h-[2px] bg-[rgb(220,117,80)] block">
        
        </span>
       </motion.span>
    </span>
   </div>

    <div className=" ml-[1.2rem] "> 
    <div className="w-[33.6rem] ">
    <p className=" text-[silver] text-[1.2rem]  leading-[2.2rem]">
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
    </p>
    </div>
    
    <div>
    <motion.button
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.1 }}>
        <button className="bg-[rgb(220,117,80)] text-white  text-[1.5rem] px-10 py-6 rounded-lg mt-10  hover:bg-[rgb(220,117,80)]">
        Start a project
      </button>
       </motion.button>
   </div>
    </div>
  </div>

  <div className=" h-[40rem]  w-[40rem] flex  items-center justify-center ml-[10rem]">
      <video src={founders} className="rounded-[50%] h-[40rem] w-[40rem] w-full max-w-[800px]  object-cover shadow-lg" controls></video>
  </div>
   
    </div>
  );
};

export default AnimatedParagraph;
