const Sidenav = ({ visibleComponent, onClick }) => {
  const activeStyle = "text-red-600 underline underline-offset-4";

  return (
    <div className="h-3/4 w-64  fixed left-0 text-white flex items-center flex-col p-4">
      <div>
        <ul className="flex flex-col items-left mt-10 gap-3">
        <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "CuentasCRUD"
                  ? activeStyle
                  : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"
              }`}
              onClick={() => onClick("CuentasCRUD")}
            >
            Cuentas
            </button>
          </li>
          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "LibroDiario"
                  ? activeStyle
                  : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"
              }`}
              onClick={() => onClick("LibroDiario")}
            >
              Libro Diario
            </button>
          </li>
          {/* <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "MyCalendar"
                  ? activeStyle
                  : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"
              }`}
              onClick={() => onClick("MyCalendar")}
            >
              Calendario
            </button>
          </li>
          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "TodoList"
                  ? activeStyle
                  : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"
              }`}
              onClick={() => onClick("TodoList")}
            >
              TO-DO
            </button>
          </li> */}
          
          
          {/* <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "LibroContable.jsx"
                  ? activeStyle
                  : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"
              }`}
              onClick={() => onClick("LibroContable.jsx")}
            >
              LibroContable.jsx
            </button>
          </li>
          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "InversionesActivosIntangibles"
                  ? activeStyle
                  : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"
              }`}
              onClick={() => onClick("InversionesActivosIntangibles")}
            >
              ActivosIntangibles
            </button>
          </li>

          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "TransactionLog"
                  ? activeStyle
                  : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"
              }`}
              onClick={() => onClick("TransactionLog")}
            >
              Inversiones
            </button>
          </li>
          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "Icm"
                  ? activeStyle
                  : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"
              }`}
              onClick={() => onClick("Icm")}
            >
              Poker
            </button>
          </li>
          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "Icm"
                  ? activeStyle
                  : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"
              }`}
              onClick={() =>
                window.open(
                  "https://es.tradingview.com/chart/VLf3LuWv/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Trading
            </button>
          </li>

          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "Icm"
                  ? activeStyle
                  : "hover:text-red-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600"
              }`}
              onClick={() => onClick("Icm")}
            >
              ESPatrimonial
            </button>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
