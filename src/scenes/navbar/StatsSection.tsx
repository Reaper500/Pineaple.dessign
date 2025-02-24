import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

type StatBlockProps = {
  finalValue: number;
  label: string;
  unit?: string;
};

const StatBlock = ({ finalValue, label, unit } : StatBlockProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(finalValue);
    }, 500); 
    return () => clearTimeout(timer);
  }, [finalValue]);

  return (
    <div className= " flex flex-col h-[100%] gap-[0.5rem] justify-center items-center">
     <div className="flex items-center">
     <Odometer value={value} format="d" theme="default" className="text-[2.8rem] font-[500] leading-none" />
     {unit && <span className="text-[3.3rem] font-medium ">{unit}</span>}
     </div>
      <motion.div
        
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[16px]  w-full text-center "
      >
        {label}
      </motion.div>
    </div>
  );
};
                
const StatsSection = () => {
  return (
    <div className="flex  justify-center h-[5rem] leading-none items-center   ">
      <div className="h-[5rem] w-[18rem] flex justify-center items-center leading-none"><StatBlock finalValue={40} label="Projects" unit="+"/></div>
      <div className="h-[5rem] w-[18rem] flex justify-center items-center leading-none"><StatBlock finalValue={90} label="Return Rate"  unit="%"/></div>
      <div className="h-[5rem] w-[18rem] flex justify-center items-center leading-none"><StatBlock finalValue={20} label="Lives changed"  unit="million"/></div>
    </div>
  );
};

export default StatsSection;


