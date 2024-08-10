import { useState } from 'react';

const Inventario = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    id: '',
    nombre: '',
    descripcion: '',
    categoria: 'Alimento', // Valor por defecto
    cantidad: 0,
    precio: 0,
    fechaAdquisicion: '',
    fechaVencimiento: '',
    proveedor: '',
    ubicacion: '',
    sku: '',
    codigoBarras: '',
    imagen: '',
    notas: ''
  });
  const [editingIndex, setEditingIndex] = useState(-1); // Para controlar la edición de un ítem existente

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = () => {
    if (newItem.nombre && newItem.cantidad) {
      if (editingIndex === -1) {
        // Agregar nuevo ítem
        setItems([...items, { ...newItem, id: Date.now() }]);
      } else {
        // Editar ítem existente
        const updatedItems = [...items];
        updatedItems[editingIndex] = { ...newItem, id: items[editingIndex].id };
        setItems(updatedItems);
        setEditingIndex(-1); // Terminar modo edición
      }
      setNewItem({
        id: '',
        nombre: '',
        descripcion: '',
        categoria: 'Alimento',
        cantidad: 0,
        precio: 0,
        fechaAdquisicion: '',
        fechaVencimiento: '',
        proveedor: '',
        ubicacion: '',
        sku: '',
        codigoBarras: '',
        imagen: '',
        notas: ''
      }); // Limpiar formulario
    } else {
      alert('Nombre y cantidad son campos obligatorios.');
    }
  };

  const handleEditItem = (index) => {
    setNewItem({ ...items[index] });
    setEditingIndex(index);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventario</h1>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <label className="block">
          <span className="">Nombre del ítem:</span>
          <input
            type="text"
            name="nombre"
            value={newItem.nombre}
            onChange={handleChange}
            placeholder="Nombre del ítem"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Descripción:</span>
          <input
            type="text"
            name="descripcion"
            value={newItem.descripcion}
            onChange={handleChange}
            placeholder="Descripción"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Categoría:</span>
          <select
            name="categoria"
            value={newItem.categoria}
            onChange={handleChange}
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          >
            <option value="Alimento">Alimento</option>
            <option value="Juguete">Juguete</option>
            <option value="Accesorio">Accesorio</option>
            <option value="Medicamento">Medicamento</option>
          </select>
        </label>
        <label className="block">
          <span className="">Cantidad:</span>
          <input
            type="number"
            name="cantidad"
            value={newItem.cantidad}
            onChange={handleChange}
            placeholder="Cantidad"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Precio:</span>
          <input
            type="number"
            name="precio"
            value={newItem.precio}
            onChange={handleChange}
            placeholder="Precio"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Fecha de Adquisición:</span>
          <input
            type="date"
            name="fechaAdquisicion"
            value={newItem.fechaAdquisicion}
            onChange={handleChange}
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Fecha de Vencimiento:</span>
          <input
            type="date"
            name="fechaVencimiento"
            value={newItem.fechaVencimiento}
            onChange={handleChange}
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Proveedor:</span>
          <input
            type="text"
            name="proveedor"
            value={newItem.proveedor}
            onChange={handleChange}
            placeholder="Proveedor"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Ubicación:</span>
          <input
            type="text"
            name="ubicacion"
            value={newItem.ubicacion}
            onChange={handleChange}
            placeholder="Ubicación"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">SKU:</span>
          <input
            type="text"
            name="sku"
            value={newItem.sku}
            onChange={handleChange}
            placeholder="SKU"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Código de Barras:</span>
          <input
            type="text"
            name="codigoBarras"
            value={newItem.codigoBarras}
            onChange={handleChange}
            placeholder="Código de Barras"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">URL de Imagen:</span>
          <input
            type="text"
            name="imagen"
            value={newItem.imagen}
            onChange={handleChange}
            placeholder="URL de Imagen"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Notas:</span>
          <input
            type="text"
            name="notas"
            value={newItem.notas}
            onChange={handleChange}
            placeholder="Notas"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </label>
        <button
          onClick={handleAddItem}
          className="text-white inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          {editingIndex === -1 ? 'Agregar Ítem' : 'Guardar Cambios'}
        </button>
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
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-black text-white">
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Nombre
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Descripción
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Categoría
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Cantidad
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Precio
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Fecha de Adquisición
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Fecha de Vencimiento
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Proveedor
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Ubicación
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                SKU
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Código de Barras
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Imagen
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Notas
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id} className="h-16">
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {item.nombre}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {item.descripcion}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {item.categoria}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {item.cantidad}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  ${item.precio}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {item.fechaAdquisicion}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {item.fechaVencimiento}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {item.proveedor}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {item.ubicacion}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {item.sku}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {item.codigoBarras}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {item.imagen && <img src={item.imagen} alt={item.nombre} className="w-16 h-16" />}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {item.notas}
                </td>
                <td className="border p-2 align-middle h-full">
                  <button
                    onClick={() => handleEditItem(index)}
                    className="bg-yellow-500 text-white inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 h-full w-full"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteItem(index)}
                    className="bg-red-600 text-white inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 h-full w-full mt-2"
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

export default Inventario;
