import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi"; // Asegúrate de importar FiX aquí

const Menu = ({ setMenuOpen }) => {
  const navigationBlocks = [
    {
      title: "Productos",
      links: [
        { path: "/jabones", label: "Jabones" },
        { path: "/velas", label: "Velas" },
        { path: "/sales-de-baño", label: "Sales de Baño" },
        { path: "/deco-concreto", label: "Deco Concreto" },
        { path: "/promociones", label: "Promociones" },
      ],
    },
    {
      title: "Soporte",
      links: [
        
        { path: "/preguntas", label: "Preguntas" },
        { path: "/contacto", label: "Contacto" },
        { path: "/perfil", label: "Mi Perfil" },
      ],
    },
  ];

  return (
    <div className="fixed inset-0  bg-white z-50 w-3/4 h-3/5 p-8 shadow-lg overflow-y-auto">
      <button
        className="absolute top-5 right-5 text-2xl p-2  rounded-full bg-gray-100 hover:bg-gray-300 transition-colors"
        onClick={() => setMenuOpen(false)}
      >
        <FiX className="text-black " />
      </button>
      {navigationBlocks.map((block, index) => (
        <div key={index} className="mb-5">
          <h2 className="text-lg font-semibold mb-4  text-gray-800">{block.title}</h2>
          <ul className="space-y-4 ">
            {block.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <NavLink
                  to={link.path}
                  className= { ({ isActive }) =>
                    `block transition-colors border-b border-black duration-300 ${
                      isActive ? "text-yellow-600 underline" : "hover:text-yellow-600"
                    }`
                  }
                  onClick={() => setMenuOpen(false)} // Cerrar menú al hacer clic
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
