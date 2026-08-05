import { HashLoader } from "react-spinners";


const Loading = () => {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <HashLoader color="#ca262e" size={50} />
      </div>
    );
};

export default Loading;