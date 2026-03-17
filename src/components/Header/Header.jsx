import { Link, NavLink } from "react-router";

function Header() {
  return (
    <>
      <header className="bg-gray-800 text-white p-2">
        <nav className="container mx-auto flex justify-between items-center px-2">
          <div className="">
            <img src="/public/logo.png" alt="Logo" width={80} />
          </div>
          <ul className="flex space-x-4.5 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` ${isActive ? "text-blue-500 font-semibold border-b-2  border-blue-500 pb-1 duration-400" : "text-white font-semibold"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  ` ${isActive ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1 duration-400" : "text-white font-semibold"}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  ` ${isActive ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1 duration-400" : "text-white font-semibold"}`
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  ` ${isActive ? "text-blue-500 font-semibold border-b-2 border-blue-500 pb-1 duration-400" : "text-white font-semibold"}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="">
            <Link
              to="https://github.com/hasanul-cloud"
              target="_blank"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded cursor-pointer"
            >
              GitHub
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
