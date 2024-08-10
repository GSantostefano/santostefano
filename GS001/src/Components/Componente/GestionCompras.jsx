import { useState } from 'react';

const GestionCompras = () => {
  const [ordenesCompra, setOrdenesCompra] = useState([]);
  const [newOrdenCompra, setNewOrdenCompra] = useState({
    proveedor: '',
    producto: '',
    cantidad: 0,
    fechaOrden: '',
    estado: 'Pendiente'
  });
  const [inventario, setInventario] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOrdenCompra({ ...newOrdenCompra, [name]: value });
  };

  const handleAddOrdenCompra = () => {
    if (newOrdenCompra.proveedor && newOrdenCompra.producto && newOrdenCompra.cantidad && newOrdenCompra.fechaOrden) {
      setOrdenesCompra([...ordenesCompra, { ...newOrdenCompra, id: Date.now() }]);
      setNewOrdenCompra({
        proveedor: '',
        producto: '',
        cantidad: 0,
        fechaOrden: '',
        estado: 'Pendiente'
      }); // Limpiar formulario
    } else {
      alert('Todos los campos son obligatorios.');
    }
  };

  const handleRecepcionMercancias = (index) => {
    const updatedOrdenesCompra = [...ordenesCompra];
    updatedOrdenesCompra[index].estado = 'Recibido';

    const updatedInventario = [...inventario];
    const productoExistente = updatedInventario.find(producto => producto.nombre === updatedOrdenesCompra[index].producto);
    if (productoExistente) {
      productoExistente.cantidad += parseInt(updatedOrdenesCompra[index].cantidad);
    } else {
      updatedInventario.push({ nombre: updatedOrdenesCompra[index].producto, cantidad: parseInt(updatedOrdenesCompra[index].cantidad) });
    }

    setOrdenesCompra(updatedOrdenesCompra);
    setInventario(updatedInventario);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Compras</h1>
      <div className="mb-4 grid w-4/12 gap-4">
        <input
          type="text"
          name="proveedor"
          value={newOrdenCompra.proveedor}
          onChange={handleChange}
          placeholder="Proveedor"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="producto"
          value={newOrdenCompra.producto}
          onChange={handleChange}
          placeholder="Producto"
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="cantidad"
          value={newOrdenCompra.cantidad}
          onChange={handleChange}
          placeholder="Cantidad"
          className="border p-2 mr-2"
        />
        <input
          type="date"
          name="fechaOrden"
          value={newOrdenCompra.fechaOrden}
          onChange={handleChange}
          placeholder="Fecha de Orden"
          className="border p-2 mr-2"
        />
        <button onClick={handleAddOrdenCompra} className="bg-blue-500  p-2">
          Agregar Orden de Compra
        </button>
      </div>
      <h2 className="text-xl font-bold mb-4">Órdenes de Compra</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Proveedor</th>
            <th className="border p-2">Producto</th>
            <th className="border p-2">Cantidad</th>
            <th className="border p-2">Fecha de Orden</th>
            <th className="border p-2">Estado</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ordenesCompra.map((orden, index) => (
            <tr key={orden.id}>
              <td className="border p-2">{orden.proveedor}</td>
              <td className="border p-2">{orden.producto}</td>
              <td className="border p-2">{orden.cantidad}</td>
              <td className="border p-2">{orden.fechaOrden}</td>
              <td className="border p-2">{orden.estado}</td>
              <td className="border p-2">
                {orden.estado === 'Pendiente' && (
                  <button onClick={() => handleRecepcionMercancias(index)} className="bg-green-500  p-2">
                    Recepción de Mercancías
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-xl font-bold mt-8 mb-4">Inventario</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Producto</th>
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
    </div>
  );
};

export default GestionCompras;
