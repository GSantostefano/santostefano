import { useState } from "react";
import QRCode from "qrcode.react";

const InventarioCRUD = () => {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    cantidad: "",
    precio: "",
    notas: ""
  });
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({ ...nuevoProducto, [name]: value });
  };

  const handleAddProducto = () => {
    if (nuevoProducto.nombre && nuevoProducto.cantidad && nuevoProducto.precio) {
      if (editingIndex === -1) {
        setProductos([...productos, { ...nuevoProducto, id: Date.now() }]);
      } else {
        const updatedProductos = [...productos];
        updatedProductos[editingIndex] = {
          ...nuevoProducto,
          id: productos[editingIndex].id,
        };
        setProductos(updatedProductos);
        setEditingIndex(-1);
      }
      setNuevoProducto({
        nombre: "",
        cantidad: "",
        precio: "",
        notas: ""
      });
    } else {
      alert("Nombre, cantidad y precio son campos obligatorios.");
    }
  };

  const handleEditProducto = (index) => {
    setNuevoProducto({ ...productos[index] });
    setEditingIndex(index);
  };

  const handleDeleteProducto = (index) => {
    const updatedProductos = productos.filter((_, i) => i !== index);
    setProductos(updatedProductos);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Inventario</h1>
      <div className="mb-4 text-red-600 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="">Nombre del Producto:</span>
          <input
            type="text"
            name="nombre"
            value={nuevoProducto.nombre}
            onChange={handleChange}
            placeholder="Nombre del Producto"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Cantidad:</span>
          <input
            type="number"
            name="cantidad"
            value={nuevoProducto.cantidad}
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
            value={nuevoProducto.precio}
            onChange={handleChange}
            placeholder="Precio"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Notas:</span>
          <input
            type="text"
            name="notas"
            value={nuevoProducto.notas}
            onChange={handleChange}
            placeholder="Notas"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleAddProducto}
            className="text-white justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            {editingIndex === -1 ? "Agregar Producto" : "Guardar Cambios"}
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
                Nombre
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Cantidad
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Precio
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Notas
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                QR Code
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-black border-black">
            {productos.map((producto, index) => (
              <tr key={producto.id} className="h-16">
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {producto.nombre}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {producto.cantidad}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {producto.precio}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {producto.notas}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  <QRCode value={JSON.stringify(producto)} size={64} />
                </td>
                <td className="border border-black p-2 align-middle h-full">
                  <button
                    onClick={() => handleEditProducto(index)}
                    className="bg-yellow-500 text-white inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 h-full w-full"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteProducto(index)}
                    className="bg-red-600 text-white inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 h-full w-full"
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

export default InventarioCRUD;
