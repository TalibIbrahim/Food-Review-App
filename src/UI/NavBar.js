import { Link, NavLink, useLocation } from "react-router-dom";
import BytersLogo from "../Assets/BYTE_logo.png";
import "./Navbar.css";

const NavBar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const activeLinkStyle = isHomePage
    ? "px-6 py-2  border-b-4 links-active mx-4"
    : "px-6 py-2  border-b-4 links-active-2 mx-4";

  const defaultLinkStyle = isHomePage
    ? "px-6 mx-4 py-2 links rounded-lg"
    : "px-6 mx-4 py-2 links-2 rounded-lg";

  const defaultLoginStyle = isHomePage
    ? "button text-white px-4 py-2 rounded-lg"
    : "button-nav-2 text-white px-4 py-2 rounded-lg";

  const logoStyle = isHomePage
    ? "w-20 mt-2 custom-transition"
    : "w-20 mt-2 btn-nav-2 custom-transition";

  return (
    <nav
      className={
        isHomePage
          ? "navbar-bg text-white font-medium text-xl p-5 px-10"
          : "navbar-style-2 font-medium text-xl p-5 px-10 shadow-md"
      }
    >
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={BytersLogo} alt="brand-logo" className={logoStyle} />{" "}
          </Link>
        </div>
        <div>
          <ul className="flex items-center justify-between ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : defaultLinkStyle
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : defaultLinkStyle
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : defaultLinkStyle
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="w-48 flex items-center justify-between">
          {/* Login Button with onClick to navigate to Login page */}
          <Link
            className={defaultLoginStyle}
            to={"/login"} // Navigates to the Login page
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            className="button2 text-white px-4 py-2 rounded-lg"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
