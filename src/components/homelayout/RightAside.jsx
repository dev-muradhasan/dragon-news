import { use } from "react";
import Add from "./Add";
import FindUsOn from "./FindUsOn";
import Qzone from "./Qzone";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../provider/AuthContext";

const RightAside = () => {
  const { user } = use(AuthContext);
  return (
    <div className="space-y-8">
      {!user && <SocialLogin></SocialLogin>}
      <FindUsOn></FindUsOn>
      <Qzone></Qzone>
      <Add></Add>
    </div>
  );
};

export default RightAside;
