import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const FindUsOn = () => {
    return (
      <div>
        <h2 className="font-semibold text-xl text-accent-content">
          Find Us On
        </h2>
        <div className="mt-3">
          <div className="join join-vertical w-full">
            <button className="btn join-item bg-white text-accent justify-start">
              <span className="bg-base-300 p-2 rounded-full">
                <FaFacebookF color="#3B599C"></FaFacebookF>
              </span>{" "}
              Facebook
            </button>
            <button className="btn join-item bg-base-100 text-accent justify-start">
              <span className="bg-base-300 p-2 rounded-full">
                <FaTwitter color="#58A7DE"></FaTwitter>
              </span>{" "}
              Twitter
            </button>
            <button className="btn join-item bg-base-100 text-accent justify-start">
              <span className="bg-base-300 p-2 rounded-full">
                <FaInstagram color="#E7616D"></FaInstagram>
              </span>{" "}
              Instagram
            </button>
          </div>
        </div>
      </div>
    );
};

export default FindUsOn;