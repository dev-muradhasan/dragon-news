import { Suspense } from "react";
import Categoris from "../Categoris";




const LeftAside = () => {

    return (
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <Categoris></Categoris>
        </Suspense>
    );
};

export default LeftAside;