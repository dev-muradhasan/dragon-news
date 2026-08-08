import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import { ClockLoader } from "react-spinners";

const Navbar = () => {
  const { user, logOutUser,loading } = use(AuthContext);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        alert("log out successful");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="grid grid-cols-3 items-center">
      <div className="text-accent-content font-semibold col-span-1">
        {user?.displayName || ''}
      </div>
      <div className="text-accent text-lg flex gap-5 col-span-1 justify-center">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      {loading ? (
        <div className="flex col-span-1 justify-end">
          <ClockLoader size={40} color="#cb2888" />
        </div>
      ) : (
        <div className="flex items-center gap-3 col-span-1 justify-end">
          <img
            className="cursor-pointer rounded-full w-10 h-10"
            src={user?.photoURL || userIcon}
            alt=""
          />
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-primary px-8 font-medium text-lg"
            >
              LogOut
            </button>
          ) : (
            <Link
              to={"/auth/login"}
              className="btn btn-primary px-8 font-medium text-lg"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
