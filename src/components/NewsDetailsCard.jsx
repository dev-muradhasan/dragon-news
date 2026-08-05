import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router";

const NewsDetailsCard = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id === id);
    setNews(newsDetails);
  }, [data, id]);

  const { title, image_url, details, category_id } = news;

  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm p-5">
      {/* News Image */}
      <figure className="rounded-lg overflow-hidden">
        <img src={image_url} alt={title} className="w-full h-100 object-cover" />
      </figure>

      {/* Content */}
      <div className="mt-8">
        <h2 className="text-3xl text-accent-content font-bold leading-snug">
          {title}
        </h2>

        <p className="text-accent leading-8 mt-4 text-justify">{details}</p>

        {/* Button */}
        <Link
          to={`/category/${category_id}`}
          className="btn btn-secondary rounded-none mt-8"
        >
          <FaArrowLeft /> All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
