import { NavLink } from "react-router-dom";

const Footer = () => {
  const activeStyle = "text-red-600 underline underline-offset-4";

  return (
    <footer className="flex flex-col items-center w-full py-5 px-8 text-sm text-white bg-stone-950">
      <div className="w-full flex justify-center">
        <div className="border-t border-red-600 w-3/4"></div>
      </div>
      <div className="w-3/4 flex justify-between mt-4">
        <ul className="flex flex-col items-center gap-3">
          <li>Footer 1</li>
          <li>Footer 2</li>
          <li>Footer 3</li>
        </ul>
        <ul className="flex flex-col items-center gap-3">
          <li>Footer 4</li>
          <li>Footer 5</li>
          <li>Footer 6</li>
        </ul>
        <ul className="flex flex-col items-center gap-3">
          <li>Footer 7</li>
          <li>Footer 8</li>
          <li>Footer 9</li>
        </ul>
        <ul className="flex flex-col items-center gap-3">
          <li>Footer 10</li>
          <li>Footer 11</li>
          <li>Footer 12</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
