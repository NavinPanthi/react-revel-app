import tailor from "../assets/images/tailor.jpg";
import nepathya from "../assets/images/nepathya.png";
import calendar from "../assets/images/calendar.png";
import location from "../assets/images/location.png";

const Banner = () => {
  const events = [
    {
      id: 1,
      image: tailor,
      title: "Taylor Swift in Nepal",
      date: "Oct 4, 2023 - Oct 10, 2023",
      address: "Lakeside-6, Pokhara",
      price: "Rs.10,000 - Rs.50,000",
    },
    {
      id: 2,
      image: nepathya,
      title: "Nepathya in Nepal",
      date: "Oct 4, 2023 - Oct 10, 2023",
      address: "Lakeside-6, Pokhara",
      price: "Rs.5,000 - Rs.10,000",
    },
  ];
  return (
    <div className="">
      <p className="mx-1 my-2 text-xl font-semibold">Upcoming events</p>
      <div className="flex flex-row overflow-x-scroll">
        {events.map((event) => (
          <div className=" h-[225px]    relative my-1 bg-white" key={event.id}>
            <div className="w-[245px] mx-1">
              <img
                src={event.image}
                alt="singer tailor"
                className="rounded-xl  w-full h-[180px]"
              />
              <div className=" absolute top-24 w-[245px]   rounded-xl bg-white  p-2  bs ">
                <div className="text-xl flex items-center justify-between ">
                  <span>{event.title}</span>
                </div>

                <div className="text-xs my-2 flex justify-between items-center ">
                  <div className="flex items-center text-pgray">
                    <img src={calendar} alt="calendar" />
                    <p className="ml-1 "> {event.date}</p>
                  </div>
                </div>
                <div className="text-xs my-2 flex justify-between items-center">
                  <div className="flex items-center text-pgray">
                    <img src={location} alt="calendar" />
                    <p className="ml-1"> {event.address}</p>
                  </div>
                </div>
                <div className="text-xs mt-2 flex justify-between items-center">
                  <div className="flex items-center text-pgray">
                    <img src={location} alt="calendar" />
                    <p className="ml-1 text-ppurple">{event.price}</p>
                  </div>
                  <button className="text-ppurple bg-purple-200 px-5 rounded-md py-1">
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Banner;
