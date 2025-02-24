// import React from 'react'
import slice from "../Removal-919.png"

// type Props = {
//     title: string
// }

const Navbar = () => {
  return (
    <nav className="h-[12vh] flex justify-center items-center ">
       <div className="text-white relative h-[8vh] relative top-[1.1rem] w-[113rem] flex justify-between items-center pb-[2.1rem]  ">
       <div>
            <h1 className='text-[silver] text-center'>UX UI Agency</h1>
        </div>

        

        <div className="flex gap-4 absolute left-[51rem] items-center">
            <img src={slice} alt="" className="h-[43px]"/>
            <p className="text-[1.5rem] ">Pineapple</p>
        </div>

        <div className="flex relative flex-col gap-2 overflow-hidden group ">
            <div className="bg-black h-1 w-4 relative right-2.5 absolute inset-0 bg-white transition-colors duration-[1000ms] ease-in-out group-hover:bg-orange-500"></div>
            <div className="bg-black h-1 w-8 bg-white h-1 w-4 relative right-2.5 absolute inset-0 bg-white transition-colors duration-[1000ms] ease-in-out group-hover:bg-orange-500"></div>
            <div className="bg-black h-1 w-4 relative left-5 bg-white h-1 w-4 relative right-2.5 absolute inset-0 bg-white transition-colors duration-[1000ms] ease-in-out group-hover:bg-orange-500"></div>
        </div>
       </div>
    </nav>
  )
}

export default Navbar;