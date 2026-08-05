import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";

const Register = () => {
  const { createUser, user, setUser, updateUserProfile } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 character!");
      return;
    } else {
      setNameError("");
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          setUser({...user, displayName:name, photoURL: photo});
          navigate('/')
        }).catch(err=>{
          alert(err.message)
        })
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
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
            {nameError && <p className="text-xs text-red-500">{nameError}</p>}
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
