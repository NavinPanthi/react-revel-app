import swift from "../assets/images/swift.png";
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

  const lists = [
    { id: 1, name: "Touka", title: "singer", image: swift },
    { id: 2, name: "Adarsha", title: "Comedian", image: swift },
    { id: 3, name: "Tailor Swift", title: "singer", image: swift },
    { id: 4, name: "Harry Styles", title: "singer", image: swift },
    { id: 5, name: "Sabin rai", title: "singer", image: swift },
    { id: 6, name: "Sajjan raj", title: "singer", image: swift },
  ];
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
                <p>Artists</p>
                {angleDown ? (
                  <FaAngleDown {...p} className="text-black" />
                ) : (
                  <FaAngleUp {...p} className="text-black" />
                )}
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <ul className=" mt-1 text-xs flex flex-row gap-y-2 mb-2 overflow-x-scroll "> 
              {lists.map((artist) => (
                <li key={artist.id} className="flex flex-col h-[108px] justify-center items-center p-1">
                  <div className="w-[76px] h-[76px] ">
                    <img src={artist?.image} alt="artist" className="rounded-full" />
                  </div>
                  <span >{artist?.name}</span>
                  <span className="text-[11px] text-pgray">{artist?.title}</span>
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
