import OrangeContent from "./OrangeContent";


type Props = {}

const Orange = (props: Props) => {
  return (
    <div className=" h-[90rem] rounded-t-[60rem] bg-[rgb(220,117,80)] w-[120rem] flex flex-col justify-center relative items-center">
        <OrangeContent text="Global clients and handpicked projects that place innovation at the forefront"/>
    </div>
  )
}

export default Orange;