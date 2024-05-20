// src/components/Sidenav.jsx

const Sidenav = ({ visibleComponent, onClick }) => {
  const activeStyle = "text-red-600 underline underline-offset-4";

  return (
    <div className="h-3/4 w-64 fixed left-0 text-white flex items-center flex-col p-4">
      <div>
        <ul className="flex flex-col items-center mt-10 gap-3">
          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${visibleComponent === 'Preflop' ? activeStyle : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"}`}
              onClick={() => onClick('Preflop')}
            >
              {visibleComponent === 'Preflop' ? 'PREFLOP' : 'PREFLOP'}
            </button>
          </li>
          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${visibleComponent === 'Flop' ? activeStyle : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"}`}
              onClick={() => onClick('Flop')}
            >
              {visibleComponent === 'Flop' ? 'FLOP' : 'FLOP'}
            </button>
          </li>
          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${visibleComponent === 'Turn' ? activeStyle : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"}`}
              onClick={() => onClick('Turn')}
            >
              {visibleComponent === 'Turn' ? 'TURN' : 'TURN'}
            </button>
          </li>
          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${visibleComponent === 'River' ? activeStyle : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"}`}
              onClick={() => onClick('River')}
            >
              {visibleComponent === 'River' ? 'RIVER' : 'RIVER'}
            </button>
          </li>
          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${visibleComponent === 'Equilab' ? activeStyle : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"}`}
              onClick={() => onClick('Equilab')}
            >
              {visibleComponent === 'Equilab' ? 'EQUILAB' : 'EQUILAB'}
            </button>
          </li>
          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${visibleComponent === 'Icm' ? activeStyle : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"}`}
              onClick={() => onClick('Icm')}
            >
              {visibleComponent === 'Icm' ? 'ICM' : 'ICM'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;