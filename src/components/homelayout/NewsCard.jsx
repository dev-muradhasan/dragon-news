
import { FaEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, image_url, details } = news;

  return (
    <div className="card bg-base-100 border border-gray-200 shadow-sm rounded-lg overflow-hidden">
      {/* Author Info */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-sm text-accent-content">
              {author?.name}
            </h3>

            <p className="text-xs text-accent">
              {format(new Date(author?.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>

        {/* Bookmark & Share */}
        <div className="flex items-center gap-4 text-accent">
          <button className="hover:text-accent-content cursor-pointer transition">
            <FaRegBookmark size={18} />
          </button>

          <button className="hover:text-accent-content cursor-pointer transition">
            <FaShareAlt size={18} />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-bold leading-7 mb-4 text-accent-content">
          {title}
        </h2>

        {/* Image */}
        <img
          src={image_url}
          alt={title}
          className="w-full h-56 object-cover rounded-md"
        />

        {/* Details */}
        <div className="mt-5">
          <p className="text-sm text-accent leading-6">
            {details?.slice(0, 250)}...
          </p>

          <button className="text-orange-500 font-medium text-sm mt-1 hover:underline cursor-pointer">
            Read More
          </button>
        </div>
      </div>

      {/* Card Footer */}
      <div className="border-t border-gray-200 px-4 py-3 flex justify-between items-center">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={
                index < rating?.number ? "text-orange-400" : "text-gray-300"
              }
            />
          ))}

          <span className="text-sm text-accent-content ml-2">
            {rating?.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-accent-content text-sm">
          <FaEye size={20} />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;