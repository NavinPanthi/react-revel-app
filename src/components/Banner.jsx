import tailor from "../assets/images/tailor.jpg";
import share from "../assets/images/share.png";
import calendar from "../assets/images/calendar.png";
import location from "../assets/images/location.png";
const Banner = () => {
  return (
    <div className="h-[310px] overflow-hidden relative my-1 bg-white">
      <img src={tailor} alt="singer tailor" className="rounded-xl px-1" />
      <div className="h-[175px] absolute top-32  left-1 right-1 w-[97.5%] rounded-xl bg-white  p-2  bs ">
        <div className="text-xl flex items-center justify-between ">
          <span>Taylor Swift in Nepal</span>
          <button>
            <img src={share} alt="share" />
          </button>
        </div>
        <div className="text-sm fonts flex items-center my-2">
          <p className="bg-pred px-2 h-[26px] text-white rounded-sm flex items-center">
            High in demand
          </p>
          <p className="bg-pred ml-1  h-[26px] px-2 text-white rounded-sm flex items-center">
            Limited booking
          </p>
        </div>
        <div className="text-sm flex fonts items-center my-2">
          <p className="bg-pgray px-2 h-[26px]  text-white rounded-sm flex items-center">
            Music show
          </p>
          <p className="bg-pgray ml-1 px-2 h-[26px]  text-white rounded-sm flex items-center">
            Pop
          </p>
        </div>
        <div className="text-xs my-3 flex justify-between items-center ">
          <div className="flex items-center text-pgray">
            <img src={calendar} alt="calendar" />
            <p className="ml-1 "> Oct 4, 2023 - Oct 10, 2023</p>
          </div>
          <button className="text-ppurple ">Add to Calendar</button>
        </div>
        <div className="text-xs my-3 flex justify-between items-center">
          <div className="flex items-center text-pgray">
            <img src={location} alt="calendar" />
            <p className="ml-1"> Multiple Venue</p>
          </div>
          <button className="text-ppurple ">View on map</button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
