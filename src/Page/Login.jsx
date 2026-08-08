
import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

    const { loginUser , setLoading } = use(AuthContext);
    const handleSignIn = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
          .then(() => {
            setLoading(false);
            navigate(location.state || '/')
            alert("user sign in successful");
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

   
    return (
      <div className="flex justify-center items-center min-h-[80vh] mt-5">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-8">
          <h2 className="font-semibold text-2xl text-accent-content text-center mb-0">
            Login your account
          </h2>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="divider mt-0 mb-2"></div>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Enter Your Email"
                required
              />
              <label className="label mt-2">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Enter Your Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-primary mt-4">Login</button>
              <p className="mt-2 text-center text-sm">
                Dont’t Have An Account ?{" "}
                <Link
                  className="text-secondary hover:underline"
                  to={"/auth/register"}
                >
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    );
};

export default Login;