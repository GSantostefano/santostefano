import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeStyle = "text-yellow-600 underline underline-offset-4";

  return  (
    <nav className="flex items-center justify-between fixed bg-white z-10 text-black w-full top-0 py-5 px-8 text-sm font-light border-b border-black">
      <ul className="flex items-center gap-3">
        <li className="">
        <NavLink to="/">
    <div className="text-4xl flex flex-col items-center">
      Gabriel
      <span className="-mt-5 text-[8px] font-light">Aromas Únicos</span>
    </div>
  </NavLink>
        </li>

        {/* <li>
          <NavLink
            to="/aboutme"
            className={({ isActive }) => 
                `relative transition-colors duration-300 transform transition-transform ${isActive ? activeStyle : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"}`}
            >
            Quienes Somos
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/jabones"
            className={({ isActive }) => 
                `relative transition-colors duration-300 transform transition-transform ${isActive ? activeStyle : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"}`}
            >
            | Jabones |
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/velas"
            className={({ isActive }) => 
                `relative transition-colors duration-300 transform transition-transform ${isActive ? activeStyle : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"}`}
            >
            | Velas |
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sales-de-baño"
            className={({ isActive }) => 
                `relative transition-colors duration-300 transform transition-transform ${isActive ? activeStyle : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"}`}
            >
            | Sales de Baño |
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/deco-concreto"
            className={({ isActive }) => 
                `relative transition-colors duration-300 transform transition-transform ${isActive ? activeStyle : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"}`}
            >
            | Deco Concreto |
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/promociones"
            className={({ isActive }) => 
                `relative transition-colors duration-300 transform transition-transform ${isActive ? activeStyle : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"}`}
            >
            | Promociones |
          </NavLink>
        </li>
      </ul>
      
      <ul className="flex items-center gap-3 ">
      <li>
          <NavLink
            to="/preguntas"
            className={({ isActive }) => 
                `relative transition-colors duration-300 transform transition-transform ${isActive ? activeStyle : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"}`}
            >
            | Preguntas |
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            className={({ isActive }) => 
                `relative transition-colors duration-300 transform transition-transform ${isActive ? activeStyle : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"}`}
            >
            | Contacto |
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/perfil"
            className={({ isActive }) => 
                `relative  duration-50 transform transition-transform ${isActive ? activeStyle : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"}`}
            >
            | Mi perfil |
          </NavLink>
        </li>

      </ul>
      
    </nav>

  );
};
export default NavBar;
