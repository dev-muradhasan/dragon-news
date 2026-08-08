import { use } from "react";
import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default || MarqueeModule;

const heading = fetch('/news.json').then(res=>res.json());

const LatestNews = () => {
  const headerData = use(heading);
  const filteredData = headerData.filter(head=>head.others.is_today_pick)

  return (
    <div>
      <div className="flex items-center gap-5 my-5 bg-base-200 p-3">
        <p className="bg-secondary text-white py-2 px-5 font-medium text-xl">
          Latest
        </p>
        <Marquee pauseOnHover={true} speed={120}>
          <div className="flex gap-10">
            {filteredData.map((singleData) => (
              <p key={singleData.id} className="font-semibold text-lg">{singleData.title}</p>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
