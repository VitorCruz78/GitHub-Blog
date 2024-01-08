import Image from "next/image";
import ImageBG from "../assets/Image-Background.png"

export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={ImageBG} alt="" style={{ width: '100%', height: '296px' }} />
      <div className="w-[54rem] h-[220px] bg-default border border-white rounded-md mt-[-60px]">
      </div>
    </div>
  )
}