import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../provider/AuthContext";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
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
    <div className="flex justify-between items-center">
      <div className="text-accent-content font-semibold w-10"></div>
      <div className="text-accent text-lg flex gap-5">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex justify-center items-center gap-3">
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
    </div>
  );
};

export default Navbar;
