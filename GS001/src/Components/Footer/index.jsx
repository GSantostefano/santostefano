import { NavLink } from "react-router-dom";

const Footer = () => {
  const activeStyle = "text-red-600 underline underline-offset-4";

  return (
    <footer className="flex flex-col items-center w-full py-5 px-8 text-sm text-white bg-stone-950">
      <div className="w-full flex justify-center">
        <div className="border-t border-red-600 w-3/4"></div>
      </div>
      Creado por R3C01L D3V3L0P3R'S 1NC
    </footer>
  );
};

export default Footer;
