import { useState } from "react";

const VentasCRUD = () => {
  const [ventas, setVentas] = useState([]);
  const [nuevaVenta, setNuevaVenta] = useState({
    cliente: "",
    producto: "",
    cantidad: "",
    precio: "",
    fecha: "",
    notas: ""
  });
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevaVenta({ ...nuevaVenta, [name]: value });
  };

  const handleAddVenta = () => {
    if (nuevaVenta.cliente && nuevaVenta.producto && nuevaVenta.cantidad && nuevaVenta.precio) {
      if (editingIndex === -1) {
        setVentas([...ventas, { ...nuevaVenta, id: Date.now() }]);
      } else {
        const updatedVentas = [...ventas];
        updatedVentas[editingIndex] = {
          ...nuevaVenta,
          id: ventas[editingIndex].id,
        };
        setVentas(updatedVentas);
        setEditingIndex(-1);
      }
      setNuevaVenta({
        cliente: "",
        producto: "",
        cantidad: "",
        precio: "",
        fecha: "",
        notas: ""
      });
    } else {
      alert("Cliente, producto, cantidad y precio son campos obligatorios.");
    }
  };

  const handleEditVenta = (index) => {
    setNuevaVenta({ ...ventas[index] });
    setEditingIndex(index);
  };

  const handleDeleteVenta = (index) => {
    const updatedVentas = ventas.filter((_, i) => i !== index);
    setVentas(updatedVentas);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Registro de Ventas</h1>
      <div className="mb-4 text-red-600 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="">Cliente:</span>
          <input
            type="text"
            name="cliente"
            value={nuevaVenta.cliente}
            onChange={handleChange}
            placeholder="Cliente"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Producto:</span>
          <input
            type="text"
            name="producto"
            value={nuevaVenta.producto}
            onChange={handleChange}
            placeholder="Producto"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Cantidad:</span>
          <input
            type="number"
            name="cantidad"
            value={nuevaVenta.cantidad}
            onChange={handleChange}
            placeholder="Cantidad"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Precio:</span>
          <input
            type="number"
            name="precio"
            value={nuevaVenta.precio}
            onChange={handleChange}
            placeholder="Precio"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Fecha:</span>
          <input
            type="date"
            name="fecha"
            value={nuevaVenta.fecha}
            onChange={handleChange}
            placeholder="Fecha"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Notas:</span>
          <input
            type="text"
            name="notas"
            value={nuevaVenta.notas}
            onChange={handleChange}
            placeholder="Notas"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleAddVenta}
            className="text-white justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            {editingIndex === -1 ? "Agregar Venta" : "Guardar Cambios"}
          </button>
        </div>
        {editingIndex !== -1 && (
          <button
            onClick={() => setEditingIndex(-1)}
            className="bg-gray-500 text-white p-2"
          >
            Cancelar Edición
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-black">
          <thead>
            <tr className="bg-white text-black border-black">
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Cliente
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Producto
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Cantidad
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Precio
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Fecha
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Notas
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Acciones
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-black border-black">
            {ventas.map((venta, index) => (
              <tr key={venta.id} className="h-16">
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {venta.cliente}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {venta.producto}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {venta.cantidad}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {venta.precio}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {venta.fecha}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {venta.notas}
                </td>
                <td className="border border-black p-2 align-middle h-full">
                  <button
                    onClick={() => handleEditVenta(index)}
                    className="bg-yellow-500 text-white inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 h-full w-full"
                  >
                    Editar
                  </button>
                </td>
                <td className="border border-black p-2 align-middle h-full">
                  <button
                    onClick={() => handleDeleteVenta(index)}
                    className="bg-red-600 text-white inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring
                    -red-600 h-full w-full"
                    >
                    Eliminar
                    </button>
                    </td>
                    </tr>
                    ))}
                    </tbody>
                    </table>
                    </div>
                    </div>
                    );
                    };
                    
                    export default VentasCRUD;