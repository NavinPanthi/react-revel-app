import swift from '..assets/images/tailor.jpg';
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
  const p = {
    className: "text-ppurple mr-1",
    size: "1.2em",
  };
  const lists = [
    { id: 1, name: "Touka", title: "singer", image: swift },
    { id: 2, name: "Adarsha", title: "Comedian", image: swift },
    { id: 3, name: "Tailor Swift", title: "singer", image: swift },
    { id: 4, name: "Harry Styles", title: "singer", image: swift },
    { id: 5, name: "Sabin rai", title: "singer", image: swift },
    { id: 6, name: "Sajjan raj", title: "singer", image: swift },
  ];
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
            <div className=" mt-1 text-xs flex flex-row gap-y-2 mb-2">
              <ul>
                {lists.map((artist) => (
                  <li key={artist.id}>
                    <img src={swift} alt="artist" />
                    <span>{artist?.name}</span>
                    <br />
                    {artist?.title}
                  </li>
                ))}
              </ul>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Artists;
