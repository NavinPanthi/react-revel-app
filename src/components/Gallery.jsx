import swift from "../assets/images/swift.png";
import adarsh from "../assets/images/adarsh.png";
import sabin from "../assets/images/sabin.png";
import sajan from "../assets/images/sajan.png";
import harry from "../assets/images/harry.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { useState } from "react";

const Artists = () => {
  const [angleDown, setAngleDown] = useState(false);
  const gallery = { swift, adarsh, sabin, sajan, harry };
  const p = {
    className: "text-ppurple mr-1",
    size: "1.2em",
  };
  return (
    <div className="px-2">
      <div className="h-[0.9px] bg-slate-400"></div>
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading className="py-3">
            <AccordionItemButton>
              <div
                className="text-sm font-semibold flex items-center justify-between"
                onClick={() => setAngleDown(!angleDown)}
              >
                <p>Gallery</p>
                {angleDown ? (
                  <FaAngleDown {...p} className="text-black" />
                ) : (
                  <FaAngleUp {...p} className="text-black" />
                )}
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <ul className=" mt-1 text-xs flex flex-row gap-y-2 mb-2 overflow-x-scroll">
              {Object.values(gallery).map((image, index) => (
                <li key={index} className="p-1 ">
                  <img
                    className="rounded-lg w-[72] h-36"
                    src={image}
                    alt="singer"
                  />
                </li>
              ))}
            </ul>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Artists;
