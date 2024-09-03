import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const activeStyle = "text-red-600 underline underline-offset-4";

  return (
    <footer className="flex text-black flex-col items-center w-full py-5 px-8 text-sm  ">
      <div className="w-full flex justify-center mb-4">
        <div className="border-t border-black w-3/4"></div>
      </div>
      <div className="flex space-x-4 mb-4">
        <a href="https://github.com/GSantostefano" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-santostefano/" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.instagram.com/gacho.santoss/" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://wa.me/5493435066052" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </div>
      <div className="text-[10px]">
        Creado por | Santostefano S.A.S |
      </div>
    </footer>
  );
};

export default Footer;