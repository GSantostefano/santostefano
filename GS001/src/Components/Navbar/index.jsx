import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeStyle = "text-red-500 underline underline-offset-4";

  return (
    <nav className="flex items-center fixed z-10 w-full top-0 py-5 px-8 text-sm text-white font-ligth">
      <ul className="flex items-center gap-3 ">
        <li className="text-2xl">
          <NavLink
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutme"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            AboutMe
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
