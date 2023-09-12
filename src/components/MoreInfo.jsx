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
const MoreInfo = () => {
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
          <AccordionItemHeading>
            <AccordionItemButton className="text-sm font-semibold flex">
              More information
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className=" mt-1 text-xs flex flex-col gap-y-2 mb-2">
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
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default MoreInfo;
