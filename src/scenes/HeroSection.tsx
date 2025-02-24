


import AnimatedHeading from "./AnimatedHeading"
import AnimatedParagraph from "./AnimatedParagraph"
import Orange  from "./navbar/Orange"





const HeroSection = () => {
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