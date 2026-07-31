import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default || MarqueeModule;

const LatestNews = () => {
  return (
    <div>
      <div className="flex items-center gap-5 my-5 bg-base-200 p-3">
        <p className="bg-secondary text-white py-2 px-5 font-medium text-xl">
          Latest
        </p>
        <Marquee pauseOnHover={true}>
          <div className="flex gap-5">
            <p className="font-semibold text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, molestiae.
            </p>
            <p className="font-semibold text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, molestiae.
            </p>
            <p className="font-semibold text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam, molestiae.
            </p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
