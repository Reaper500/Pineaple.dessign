
import reel from "./Pineapple Reel Video_3.mp4"

import AnimatedHeading from "./AnimatedHeading"
import AnimatedParagraph from "./AnimatedParagraph"
// import { div } from "framer-motion/client"
import Orange  from "./navbar/Orange"

type Props = {}



const HeroSection = (props: Props) => {
  return (
    <>
      <div className="pt-[2rem] text-white bg-black">
      <AnimatedHeading hasEMDash={true} text="Designing digital experiences that enrich human lives and help businesses grow." />
      <AnimatedParagraph text="Pineapple is a global UX/UI agency helping ambitious companies and visionary entrepreneurs bring the next design revolution." />
      <Orange />
      </div>
    </>
  )
}

export default HeroSection;