import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { useState } from "react";
import swift from "../assets/images/swift.png";
const Follow = () => {
  const [angleDown, setAngleDown] = useState(false);
  const p = {
    className: "text-ppurple mr-1",
    size: "1.2em",
  };
  return (
    <div className="px-2">
      <div className="h-[0.9px] bg-slate-400"></div>

      <div className="mt-3 text-xs flex flex-col items-center justify-center mb-3">
        <div className="h-[76px] w-[76px]">
          <img src={swift} className="rounded-full" alt="swift" />
        </div>
        <p className="text-sm font-semibold">Tailor Swift</p>
        <span className="text-[11px]">50 Followers</span>
        <p className="text-[10px] text-pgray">Organizer</p>
        <button className=" text-ppurple border  border-ppurple py-1 rounded-lg text-base px-16 my-2 mb-3">
          Follow
        </button>
      </div>
    </div>
  );
};

export default Follow;
