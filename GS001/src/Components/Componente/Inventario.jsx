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
    <div className="container text-black mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventario</h1>
      <div className="mb-4 grid grid-cols-2 w-12/12 gap-4">
        <input
          type="text"
          name="nombre"
          value={newItem.nombre}
          onChange={handleChange}
          placeholder="Nombre del ítem"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="descripcion"
          value={newItem.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
          className="border p-2 mr-2"
        />
        <select
          name="categoria"
          value={newItem.categoria}
          onChange={handleChange}
          className="border p-2 mr-2"
        >
          <option value="Alimento">Alimento</option>
          <option value="Juguete">Juguete</option>
          <option value="Accesorio">Accesorio</option>
          <option value="Medicamento">Medicamento</option>
        </select>
        <input
          type="number"
          name="cantidad"
          value={newItem.cantidad}
          onChange={handleChange}
          placeholder="Cantidad"
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="precio"
          value={newItem.precio}
          onChange={handleChange}
          placeholder="Precio"
          className="border p-2 mr-2"
        />
        <input
          type="date"
          name="fechaAdquisicion"
          value={newItem.fechaAdquisicion}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        <input
          type="date"
          name="fechaVencimiento"
          value={newItem.fechaVencimiento}
          onChange={handleChange}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="proveedor"
          value={newItem.proveedor}
          onChange={handleChange}
          placeholder="Proveedor"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="ubicacion"
          value={newItem.ubicacion}
          onChange={handleChange}
          placeholder="Ubicación"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="sku"
          value={newItem.sku}
          onChange={handleChange}
          placeholder="SKU"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="codigoBarras"
          value={newItem.codigoBarras}
          onChange={handleChange}
          placeholder="Código de Barras"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="imagen"
          value={newItem.imagen}
          onChange={handleChange}
          placeholder="URL de Imagen"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="notas"
          value={newItem.notas}
          onChange={handleChange}
          placeholder="Notas"
          className="border p-2 mr-2"
        />
        <button onClick={handleAddItem} className="bg-blue-500 text-white p-2 mr-2">
          {editingIndex === -1 ? 'Agregar Ítem' : 'Guardar Cambios'}
        </button>
        {editingIndex !== -1 && (
          <button onClick={() => setEditingIndex(-1)} className="bg-gray-500 text-white p-2">
            Cancelar Edición
          </button>
        )}
      </div>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Descripción</th>
            <th className="border p-2">Categoría</th>
            <th className="border p-2">Cantidad</th>
            <th className="border p-2">Precio</th>
            <th className="border p-2">Fecha de Adquisición</th>
            <th className="border p-2">Fecha de Vencimiento</th>
            <th className="border p-2">Proveedor</th>
            <th className="border p-2">Ubicación</th>
            <th className="border p-2">SKU</th>
            <th className="border p-2">Código de Barras</th>
            <th className="border p-2">Imagen</th>
            <th className="border p-2">Notas</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td className="border p-2">{item.nombre}</td>
              <td className="border p-2">{item.descripcion}</td>
              <td className="border p-2">{item.categoria}</td>
              <td className="border p-2">{item.cantidad}</td>
              <td className="border p-2">${item.precio}</td>
              <td className="border p-2">{item.fechaAdquisicion}</td>
              <td className="border p-2">{item.fechaVencimiento}</td>
              <td className="border p-2">{item.proveedor}</td>
              <td className="border p-2">{item.ubicacion}</td>
              <td className="border p-2">{item.sku}</td>
              <td className="border p-2">{item.codigoBarras}</td>
              <td className="border p-2">
                {item.imagen && <img src={item.imagen} alt={item.nombre} className="w-16 h-16" />}
              </td>
              <td className="border p-2">{item.notas}</td>
              <td className="border p-2">
                <button onClick={() => handleEditItem(index)} className="bg-yellow-500 text-white p-2 mr-2">
                  Editar
                </button>
                <button onClick={() => handleDeleteItem(index)} className="bg-red-500 text-white p-2">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventario;
