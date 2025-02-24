import Shares from "../main/Shares"

type Props = {}

const Main = (props: Props) => {
  return (
    <div className="h-[120rem] bg-white w-full flex flex-col items-center relative ">
        <Shares text="LASTING RELATIONSHIPS WITH"
                header="We’ve created a process that knits your product with the innovation it deserves."
        />
    </div>
  )
}

export default Main