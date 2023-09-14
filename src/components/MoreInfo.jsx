import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { BsFillCloudSunFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { TbLanguageHiragana } from "react-icons/tb";
import { AiFillLike } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { useState } from "react";
const MoreInfo = () => {
  const [angleDown, setAngleDown] = useState(false);
  const p = {
    className: "text-ppurple mr-1",
    size: "1.2em",
  };
  const f = {
    className: "flex items-center",
  };

  return (
    <div className="px-2">
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading className="py-3">
            <AccordionItemButton>
              <div
                className="text-sm font-semibold flex items-center justify-between"
                onClick={() => setAngleDown(!angleDown)}
              >
                <p>More information</p>
                {angleDown ? (
                  <FaAngleDown {...p} className="text-black" />
                ) : (
                  <FaAngleUp {...p} className="text-black" />
                )}
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className=" mt-1 text-xs flex flex-col gap-y-2 mb-2">
              <div {...f}>
                <BsFillCloudSunFill {...p} />
                Outdoor events
              </div>
              <div {...f}>
                <BiTimeFive {...p} />
                11 AM to 5 AM
              </div>
              <div {...f}>
                <AiOutlineUsergroupAdd {...p} />
                18yrs+
              </div>
              <div {...f}>
                <TbLanguageHiragana {...p} />
                Nepali, English
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>

      <div className="h-[0.9px]  bg-slate-400 "></div>
      {/* More interested div */}
      <div className=" my-2 flex flex-col">
        <p className="text-sm font-semibold">
          Click on interested to stay updated about this event.
        </p>
        <div className="flex flex-row items-center justify-between my-1">
          <div className="w-1/2">
            <div className="flex items-center">
              <AiFillLike {...p} />
              <span className="text-xs">500</span>
            </div>
            <p className="text-[11px] pt-1 text-pgray">
              People who have shown interested recently.
            </p>
          </div>
          <button className="text-xs text-ppurple border  border-ppurple py-1 rounded-lg px-4">
            Interested ?
          </button>
        </div>
      </div>
      {/* More interested div ends here*/}
    </div>
  );
};
export default MoreInfo;
