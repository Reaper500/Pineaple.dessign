import logo1 from "../main/image-shares/logo 1.png"
import logo2 from "../main/image-shares/logo 2.png"
import logo3 from "../main/image-shares/logo 3.png"
import logo4 from "../main/image-shares/logo 4.png"
import logo5 from "../main/image-shares/logo 5.png"
import logo6 from "../main/image-shares/logo 6.png"
import logo7 from "../main/image-shares/logo 7.png"
import logo8 from "../main/image-shares/logo 8.png"
import logo9 from "../main/image-shares/logo 9.png"
import logo10 from "../main/image-shares/logo 10.png"
import logo11 from "../main/image-shares/logo 11.png"
import logo12 from "../main/image-shares/logo 12.png"
import logo13 from "../main/image-shares/logo 13.png"
import logo14 from "../main/image-shares/logo 14.png"
import logo15 from "../main/image-shares/logo 15.png"
import logo16 from "../main/image-shares/logo 16.png"
import logo17 from "../main/image-shares/logo 17.png"
import logo18 from "../main/image-shares/logo 18.png"


import { motion } from "framer-motion";

type SharesProps = {
    text: string;
    header : string
  };
  


  const Shares = ({text, header} :SharesProps) => {
    const words = text.split(" ");
    const head = header.split(" ")

  return (
    <div className="absolute  top-[4rem] flex flex-col items-center">
           <h1 className="  text-gray-400 text-[1.2rem] font-[500] ">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className= "inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h1>

    <div className="h-[13.9rem] w-[95rem] mt-[6rem] absolute grid grid-cols-6 gap-9 bg-white place-items-center">
        <img src={logo1} alt="" className="h-[3rem] w-[8rem]"/>
        <img src={logo2} alt="" className="h-[3rem] w-[8rem]"/>
        <img src={logo3} alt="" className="h-[3rem] w-[8rem]"/>
        <img src={logo4} alt="" className="h-[3rem] w-[8rem]"/>
        <img src={logo5} alt="" className="h-[3rem] w-[8rem]"/>
        <img src={logo6} alt="" className="h-[3rem] w-[8rem]"/>
        <img src={logo7} alt="" className="h-[3rem] w-[8rem]"/>
        <img src={logo8} alt="" className="h-[3rem] w-[8rem]"/>
        <img src={logo9} alt="" className="h-[3rem] w-[8rem]"/>
        <img src={logo10} alt=""className="h-[3rem] w-[8rem]" />
        <img src={logo11} alt=""className="h-[3rem] w-[8rem]" />
        <img src={logo12} alt=""className="h-[3rem] w-[8rem]" />
        <img src={logo13} alt=""className="h-[3rem] w-[8rem]" />
        <img src={logo14} alt=""className="h-[3rem] w-[8rem]" />
        <img src={logo15} alt=""className="h-[3rem] w-[8rem]" />
        <img src={logo16} alt=""className="h-[3rem] w-[8rem]" />
        <img src={logo17} alt=""className="h-[3rem] w-[8rem]" />
        <img src={logo18} alt=""className="h-[3rem] w-[8rem]" />
    </div>

    <div className="absolute top-[35rem] flex h-[13.9rem] w-[95rem] justify-between">
    <h1 className="  text-black text-[3.6rem]  font-[500] w-[22ch] leading-[4.6rem]">
      {head.map((head, index) => (
        <motion.span
          key={index}
          className= "inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          {head}&nbsp;
        </motion.span>
      ))}
    </h1>
    <div>
        <button className="bg-black text-white  text-[1.5rem] px-20 py-4 rounded-lg mt-[1rem]  hover:bg-[rgb(220,117,80)]">
            What We Do
        </button>
    </div>
    </div>
    </div>
  )
}

export default Shares