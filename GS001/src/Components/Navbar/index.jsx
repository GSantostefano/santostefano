import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Menu from "./menu";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeStyle = "text-yellow-600 underline underline-offset-4";

  return (
    <>
      <nav
        className="flex items-center justify-between fixed bg-white z-30 text-black w-full top-0 py-5 px-8 text-sm font-light border-b border-black"
        style={{
          fontFamily: "'Playfair Display', serif",
          filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1))",
        }}
      >
        {/* Sección izquierda */}
        <div className="flex items-center text-4xl">
          <NavLink to="/">Royal Saints</NavLink>
        </div>

        {/* Menú para escritorio - Sección central */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex justify-center gap-6">
            {["/jabones", "/velas", "/sales-de-baño", "/promociones"].map((path, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative transition-colors duration-300 transform ${
                      isActive ? activeStyle : "hover:text-yellow-600"
                    }`
                  }
                >
                  {path.substring(1).replace(/-/g, ' ')}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Sección derecha */}
        <div className="hidden lg:flex gap-6">
          {["/preguntas", "/contacto", "/perfil"].map((path, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative transition-colors duration-300 transform ${
                    isActive ? activeStyle : "hover:text-yellow-600"
                  }`
                }
              >
                {path.substring(1).replace(/-/g, ' ')}
              </NavLink>
            </li>
          ))}
        </div>

        {/* Botón del menú para móvil */}
        <button
          className="lg:hidden text-2xl p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX className="text-black" /> : <FiMenu className="text-black" />}
        </button>
      </nav>

      {/* Componente de menú */}
      {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
    </>
  );
};

export default NavBar;
