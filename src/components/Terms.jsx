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

const About = () => {
  const [angleDown, setAngleDown] = useState(false);

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
                <p>Terms and Conditions</p>
                {angleDown ? (
                  <FaAngleDown {...p} className="text-black" />
                ) : (
                  <FaAngleUp {...p} className="text-black" />
                )}
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <ol className="mt-1 text-xs flex flex-col  mb-2">
              <li> Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
              <li> sit amet consectetur adipisicing elit</li>
              <li> adipisicing elit</li>
              <li> psum dolor sit amet consectetur adipisicing elit</li>
              <li> Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
            </ol>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default About;
