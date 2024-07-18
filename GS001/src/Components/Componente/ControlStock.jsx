import { useState } from 'react';

const ControlStock = () => {
  const [productos, setProductos] = useState([]);
  const [newProducto, setNewProducto] = useState({
    nombre: '',
    cantidad: 0,
    tipoMovimiento: '',
    notas: ''
  });
  const [inventario, setInventario] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProducto({ ...newProducto, [name]: value });
  };

  const handleAddProducto = () => {
    if (newProducto.nombre && newProducto.cantidad && newProducto.tipoMovimiento) {
      const updatedInventario = [...inventario];
      const productoExistente = updatedInventario.find(producto => producto.nombre === newProducto.nombre);

      if (newProducto.tipoMovimiento === 'entrada') {
        if (productoExistente) {
          productoExistente.cantidad += parseInt(newProducto.cantidad);
        } else {
          updatedInventario.push({ ...newProducto, cantidad: parseInt(newProducto.cantidad) });
        }
      } else if (newProducto.tipoMovimiento === 'salida') {
        if (productoExistente) {
          productoExistente.cantidad -= parseInt(newProducto.cantidad);
          if (productoExistente.cantidad < 0) productoExistente.cantidad = 0;
        } else {
          alert('El producto no existe en el inventario.');
        }
      }

      setInventario(updatedInventario);
      setProductos([...productos, { ...newProducto, id: Date.now() }]);

      setNewProducto({
        nombre: '',
        cantidad: 0,
        tipoMovimiento: '',
        notas: ''
      }); // Limpiar formulario
    } else {
      alert('Nombre, cantidad y tipo de movimiento son campos obligatorios.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Control de Stock</h1>
      <div className="mb-4 grid w-4/12">
        <input
          type="text"
          name="nombre"
          value={newProducto.nombre}
          onChange={handleChange}
          placeholder="Nombre del producto"
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="cantidad"
          value={newProducto.cantidad}
          onChange={handleChange}
          placeholder="Cantidad"
          className="border p-2 mr-2"
        />
        <select
          name="tipoMovimiento"
          value={newProducto.tipoMovimiento}
          onChange={handleChange}
          className="border p-2 mr-2"
        >
          <option value="">Seleccionar Movimiento</option>
          <option value="entrada">Entrada</option>
          <option value="salida">Salida</option>
        </select>
        <input
          type="text"
          name="notas"
          value={newProducto.notas}
          onChange={handleChange}
          placeholder="Notas"
          className="border p-2 mr-2"
        />
        <button onClick={handleAddProducto} className="bg-blue-500 text-white p-2">
          Agregar Movimiento
        </button>
      </div>
      <h2 className="text-xl font-bold mb-4">Inventario</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {inventario.map((producto, index) => (
            <tr key={index}>
              <td className="border p-2">{producto.nombre}</td>
              <td className="border p-2">{producto.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-xl font-bold mt-8 mb-4">Historial de Movimientos</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Cantidad</th>
            <th className="border p-2">Tipo de Movimiento</th>
            <th className="border p-2">Notas</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td className="border p-2">{producto.nombre}</td>
              <td className="border p-2">{producto.cantidad}</td>
              <td className="border p-2">{producto.tipoMovimiento}</td>
              <td className="border p-2">{producto.notas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ControlStock;
