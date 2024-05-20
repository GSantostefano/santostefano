import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeStyle = "text-red-600 underline underline-offset-4";

  return (
    <nav className="flex items-center justify-between fixed z-10 w-full top-0 py-5 px-8 text-sm text-white font-ligth">
      <ul className="flex items-center gap-3 ">
        <li className="text-2xl">
          <NavLink
            to="/"
          >
          R3C01L
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos"
            className={({ isActive }) => 
            `relative transition-colors duration-300 transform transition-transform ${isActive ? activeStyle : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"}`}
        >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutme"
            className={({ isActive }) => 
                `relative transition-colors duration-300 transform transition-transform ${isActive ? activeStyle : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"}`}
            >
            AboutMe
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/contacto"
            className={({ isActive }) => 
                `relative transition-colors duration-300 transform transition-transform ${isActive ? activeStyle : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"}`}
            >
            Contacto
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3 ">
        <li className="text-2xl">
          <NavLink
            to="/perfil"
            className={({ isActive }) => 
                `relative  duration-50 transform transition-transform ${isActive ? activeStyle : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"}`}
            >
            Mi perfil
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};
export default NavBar;
