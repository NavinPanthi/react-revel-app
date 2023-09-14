const Footer = () => {
  return (
    <div className="h-14 fixed bottom-0 px-4 w-full flex items-center justify-around  bg-white bsb">
      <p className="text-sm">
        <span className="text-ppurple font-semibold font-sans">Rs. 10,000</span>
        <span className="text-pgray "> onwards</span>
      </p>
      <button className="text-ppurple bg-purple-200 px-7 rounded-md py-1">
        Book
      </button>
    </div>
  );
};
export default Footer;
