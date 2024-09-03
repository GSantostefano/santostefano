const Sidenav = ({ visibleComponent, onClick }) => {
  const activeStyle = "text-yellow-600 underline underline-offset-4";

  return (
    <div className="h-3/4 w-64  fixed left-0  flex items-center flex-col p-4">
      <div>
        <ul className="flex flex-col items-left mt-10 gap-3">
        <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "ProveedoresCRUD"
                  ? activeStyle
                  : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"
              }`}
              onClick={() => onClick("ProveedoresCRUD")}
            >
              Proveedores
            </button>
          </li>
        <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "ClientesCRUD.jsx"
                  ? activeStyle
                  : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"
              }`}
              onClick={() => onClick("ClientesCRUD.jsx")}
            >
              Clientes
            </button>
          </li>
          
        {/* <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "CuentasCRUD"
                  ? activeStyle
                  : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"
              }`}
              onClick={() => onClick("CuentasCRUD")}
            >
            Cuentas
            </button>
          </li> */}
          {/* <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "LibroDiario"
                  ? activeStyle
                  : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"
              }`}
              onClick={() => onClick("LibroDiario")}
            >
              Libro Diario
            </button>
          </li> */}
          {/* <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "LibroDiarioMayor"
                  ? activeStyle
                  : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"
              }`}
              onClick={() => onClick("LibroDiarioMayor")}
            >
              LibroDiarioMayor
            </button>
          </li> */}
           <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "Inventario"
                  ? activeStyle
                  : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"
              }`}
              onClick={() => onClick("Inventario")}
            >
              Inventario
            </button>
          </li>
{/*           
          
          

          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "PedidosClientesCRUD"
                  ? activeStyle
                  : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"
              }`}
              onClick={() => onClick("PedidosClientesCRUD")}
            >
              Pedidos Clientes
            </button>
          </li>

          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "ControlStock"
                  ? activeStyle
                  : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"
              }`}
              onClick={() => onClick("ControlStock")}
            >
              ControlStock
            </button>
          </li>
         
          <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "GestionCompras"
                  ? activeStyle
                  : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"
              }`}
              onClick={() => onClick("GestionCompras")}
            >
              GestionCompras
            </button>
          </li> */}
          {/* <li>
            <button
              className={`relative transition-colors duration-300 transform transition-transform ${
                visibleComponent === "GestionCompras"
                  ? activeStyle
                  : "hover:text-yellow-600 hover:scale-105 hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-600"
              }`}
              onClick={() =>
                window.open(
                  "https://es.tradingview.com/chart/VLf3LuWv/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              GestionCompras
            </button>
          </li>

           */}
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
