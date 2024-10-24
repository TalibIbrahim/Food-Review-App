import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-primary-500 text-white font-medium text-xl p-5 px-10">
      <div className="flex items-center justify-between">
        <div>Byters</div>
        <div>
          <ul className="flex items-center justify-between ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-2 py-2  border-b-4 border-slate-50 mx-4"
                  : "px-2 mx-4 py-2  "
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "px-2 py-2  border-b-4 border-slate-50 mx-4"
                  : "px-2 py-2 mx-4 "
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "px-2 py-2  border-b-4 border-slate-50 mx-4"
                  : "px-2 py-2 mx-4 "
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="w-48 flex items-center justify-between">
          <button className="border border-slate-50 text-white px-4 py-2 rounded-lg">
            Login
          </button>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
