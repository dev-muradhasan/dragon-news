import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
      <div>
        <h2 className="font-semibold text-xl text-accent-content">
          Login With
        </h2>
        <div className="space-y-3 mt-3">
          <button className="btn btn-outline btn-secondary w-full">
            <FaGoogle size={20} />
            Login With Google
          </button>
          <button className="btn btn-outline btn-primary w-full">
            <FaGithub size={20} />
            Login With Github
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;