import Add from "./Add";
import FindUsOn from "./FindUsOn";
import Qzone from "./Qzone";
import SocialLogin from "./SocialLogin";


const RightAside = () => {
    return (
        <div className="space-y-8">
            <SocialLogin></SocialLogin>
            <FindUsOn></FindUsOn>
            <Qzone></Qzone>
            <Add></Add>
        </div>
    );
};

export default RightAside;