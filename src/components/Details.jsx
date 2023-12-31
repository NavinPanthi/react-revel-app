import Artists from "./Artists";
import MoreInfo from "./MoreInfo";
import About from "./About";
import Gallery from "./Gallery";
import Video from "./Video";
import Terms from "./Terms";
import Follow from "./Follow";
const Details = () => {
  return (
    <div className=" my-1 bs mx-1 rounded-xl">
      <MoreInfo />
      <Artists />
      <About />
      <Gallery />
      <Video />
      <Terms />
      <Follow />
    </div>
  );
};
export default Details;
