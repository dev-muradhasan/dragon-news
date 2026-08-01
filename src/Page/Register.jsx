import { Link } from "react-router";


const Register = () => {

    const handleRegister = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        console.log({name,photo,email,pass})
    }

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
                name="pass"
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