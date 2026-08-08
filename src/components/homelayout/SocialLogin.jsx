import { use } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthContext";

const SocialLogin = () => {
  const { googleSignIn, githubSignIn, setLoading } = use(AuthContext);

  const handleGoogleSignIn = ()=>{
    googleSignIn().then(res=>{
      // console.log(res.user)
       setLoading(false);
      alert('login with google successful')
    })
    .catch(err=>{
      console.log(err)
    })
  };
 const handleGithubSignIn = () => {
   githubSignIn()
     .then((res) => {
       setLoading(false);
       alert("Login with GitHub successful");
     })
     .catch((err) => {
       alert(err.message);
     });
 };

  return (
    <div>
      <h2 className="font-semibold text-xl text-accent-content mb-3">
        Login With
      </h2>
      <div className="space-y-3">
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-secondary w-full">
          <FaGoogle size={20} />
          Login With Google
        </button>
        <button onClick={handleGithubSignIn} className="btn btn-outline btn-primary w-full">
          <FaGithub size={20} />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
