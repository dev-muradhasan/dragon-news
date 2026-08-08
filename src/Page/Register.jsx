import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const {
    createUser,
    logOutUser,
    setUser,
    updateProfileFunc,
    setLoading,
    emailVerification,
  } = use(AuthContext);
  const navigate = useNavigate();

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const displayName = e.target.name.value;
  //   const photoURL = e.target.photo.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;

  //   createUser(email, password)
  //     .then(() => {
  //       updateProfileFunc(displayName, photoURL)
  //         .then(() => {
  //           emailVerification()
  //             .then(() => {
  //               setLoading(false);
  //               logOutUser()
  //                 .then(() => {
  //                   alert("sign up successful. please check your email");
  //                   setUser(null)
  //                 })
  //                 .catch((err) => {
  //                   console.log(err.message);
  //                 });
  //                 navigate('/auth/login')
  //             })
  //             .catch((err) => {
  //               console.log(err.message);
  //             });
  //         })
  //         .catch((err) => {
  //           alert(err.message);
  //         });
  //     })
  //     .catch((error) => {
  //       // const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //     });
  // };
  
  const handleRegister = (e) => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then(() => {
        return updateProfileFunc(displayName, photoURL);
      })
      .then(() => {
        return emailVerification();
      })
      .then(() => {
        return logOutUser();
      })
      .then(() => {
        setUser(null);
        setLoading(false);

        toast.success("Sign up successful. Please check your email.");

        navigate("/auth/login");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] mt-5">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-8">
        <h2 className="font-semibold text-2xl text-accent-content text-center mb-0">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="divider mt-0 mb-2"></div>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter Your Name"
              required
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter Your Photo URL"
              required
            />
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
            <button className="btn btn-primary mt-4">Register</button>
            <p className="mt-2 text-center text-sm">
              Allready Have An Account ?{" "}
              <Link
                className="text-secondary hover:underline"
                to={"/auth/login"}
              >
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
