import { NavLink } from "react-router-dom";
import BytersLogo from "../Assets/BYTE_logo.png";
import "./Navbar.css";
const NavBar = () => {
  return (
    <nav className="navbar-bg text-white font-medium text-xl p-5 px-10">
      <div className="flex items-center justify-between">
        <div>
          <img src={BytersLogo} className="w-20 mt-2" />
        </div>
        <div>
          <ul className="flex items-center justify-between ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-2 py-2  border-b-4 links-active mx-4"
                  : "px-2 mx-4 py-2 links rounded-lg"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "px-2 py-2  border-b-4 links-active mx-4"
                  : "px-2 py-2 mx-4 links rounded-lg"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "px-2 py-2  border-b-4 links-active mx-4"
                  : "px-2 py-2 mx-4 links rounded-lg "
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="w-48 flex items-center justify-between">
          <button className="button text-white px-4 py-2 rounded-lg">
            Login
          </button>
          <button className="button2 text-white px-4 py-2 rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
