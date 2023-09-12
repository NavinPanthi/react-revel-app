import Banner from "./Banner";
import Details from "./Details";
const Main = () => {
  return (
    <div className="mx-3">
      <div className="text-[10px] my-[12px] leading-[12.8px]">
        <span className="text-ppurple ">Events </span>/ Taylor Swift in Nepal
      </div>
      <Banner />
      <Details />
    </div>
  );
};
export default Main;
