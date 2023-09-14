import Banner from "./Banner";
import Details from "./Details";
import Upcoming from "./Upcoming";
const Main = () => {
  return (
    <div className="mx-3 relative mb-[4.5em]">
      <div className="text-[10px] my-[12px] leading-[12.8px]">
        <span className="text-ppurple ">Events </span>/ Taylor Swift in Nepal
      </div>
      <Banner />
      <Details />
      <Upcoming />
    </div>
  );
};
export default Main;
