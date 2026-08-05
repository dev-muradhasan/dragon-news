import { format } from "date-fns";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-5 space-y-1">
        <img className="w-96" src={logo} alt="" />
        <p className="text-accent text-lg">Journalism Without Fear or Favour</p>
        <div className="text-xl font-medium">
          <span>{format(new Date(), "EEEE,")}</span>
          <span className="text-accent">
            {format(new Date(), " MMMM dd, yyyy")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
