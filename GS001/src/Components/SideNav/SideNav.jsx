// src/components/Sidenav.jsx
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  const activeStyle = "text-white-600 underline underline-offset-4";
  return (
    <div className="h-3/4 w-64 fixed  left-0 text-white flex items-center flex-col p-4">
      <div>
        <ul className="flex flex-col items-center mt-10 gap-3">
          <li>Componente 1</li>
          <li>Componente 2</li>
          <li>Componente 3</li>
          <li>Componente 4</li>
          <li>Componente 5</li>
          <li>Componente 6</li>
          <li>Componente 7</li>
          <li>Componente 8</li>
          <li>Componente 9</li>
          <li>Componente 10</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
