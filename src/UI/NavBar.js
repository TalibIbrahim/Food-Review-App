import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import BytersLogo from "../Assets/BYTE_logo.png";
import "./Navbar.css";
import AuthContext from "../Store/auth-context";

const NavBar = () => {
  const location = useLocation();

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

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
        <div className="ml-32">
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
        {!isLoggedIn && (
          <div className="w-48 flex items-center justify-between">
            <Link className={defaultLoginStyle} to={"/login"}>
              Login
            </Link>
            <Link
              to={"/signup"}
              className="button2 text-white px-4 py-2 rounded-lg"
            >
              Sign Up
            </Link>
          </div>
        )}
        {isLoggedIn && (
          <div className="w-48 flex items-center justify-end ">
            <Link to={"/profile"} className=" text-col rounded-full">
              <span className="material-symbols-outlined text-5xl pt-2 mr-5">
                account_circle
              </span>
            </Link>
            <button className={defaultLoginStyle} onClick={logoutHandler}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
