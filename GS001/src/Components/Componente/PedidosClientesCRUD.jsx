import { useState } from 'react';

const PedidosClientesCRUD = () => {
  const [pedidos, setPedidos] = useState([]);
  const [newPedido, setNewPedido] = useState({
    cliente: '',
    fecha: '',
    productos: '',
    total: '',
    estado: '',
    notas: ''
  });
  const [editingIndex, setEditingIndex] = useState(-1); // Para controlar la edición de un pedido existente

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPedido({ ...newPedido, [name]: value });
  };

  const handleAddPedido = () => {
    if (newPedido.cliente && newPedido.fecha && newPedido.total) {
      if (editingIndex === -1) {
        // Agregar nuevo pedido
        setPedidos([...pedidos, { ...newPedido, id: Date.now() }]);
      } else {
        // Editar pedido existente
        const updatedPedidos = [...pedidos];
        updatedPedidos[editingIndex] = { ...newPedido, id: pedidos[editingIndex].id };
        setPedidos(updatedPedidos);
        setEditingIndex(-1); // Terminar modo edición
      }
      setNewPedido({
        cliente: '',
        fecha: '',
        productos: '',
        total: '',
        estado: '',
        notas: ''
      }); // Limpiar formulario
    } else {
      alert('Cliente, fecha y total son campos obligatorios.');
    }
  };

  const handleEditPedido = (index) => {
    setNewPedido({ ...pedidos[index] });
    setEditingIndex(index);
  };

  const handleDeletePedido = (index) => {
    const updatedPedidos = pedidos.filter((_, i) => i !== index);
    setPedidos(updatedPedidos);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Administrador de Pedidos de Clientes</h1>
      <div className="mb-4 grid w-4/12 gap-4">
        <input
          type="text"
          name="cliente"
          value={newPedido.cliente}
          onChange={handleChange}
          placeholder="Cliente"
          className="border p-2 mr-2"
        />
        <input
          type="date"
          name="fecha"
          value={newPedido.fecha}
          onChange={handleChange}
          placeholder="Fecha"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="productos"
          value={newPedido.productos}
          onChange={handleChange}
          placeholder="Productos"
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="total"
          value={newPedido.total}
          onChange={handleChange}
          placeholder="Total"
          className="border p-2 mr-2"
        />
        <select
          name="estado"
          value={newPedido.estado}
          onChange={handleChange}
          className="border p-2 mr-2"
        >
          <option value="">Seleccionar Estado</option>
          <option value="pendiente">Pendiente</option>
          <option value="procesado">Procesado</option>
          <option value="enviado">Enviado</option>
          <option value="entregado">Entregado</option>
          <option value="cancelado">Cancelado</option>
        </select>
        <input
          type="text"
          name="notas"
          value={newPedido.notas}
          onChange={handleChange}
          placeholder="Notas"
          className="border p-2 mr-2"
        />
        <button onClick={handleAddPedido} className="bg-blue-500  p-2 mr-2">
          {editingIndex === -1 ? 'Agregar Pedido' : 'Guardar Cambios'}
        </button>
        {editingIndex !== -1 && (
          <button onClick={() => setEditingIndex(-1)} className="bg-gray-500  p-2">
            Cancelar Edición
          </button>
        )}
      </div>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Cliente</th>
            <th className="border p-2">Fecha</th>
            <th className="border p-2">Productos</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Estado</th>
            <th className="border p-2">Notas</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido, index) => (
            <tr key={pedido.id}>
              <td className="border p-2">{pedido.cliente}</td>
              <td className="border p-2">{pedido.fecha}</td>
              <td className="border p-2">{pedido.productos}</td>
              <td className="border p-2">{pedido.total}</td>
              <td className="border p-2">{pedido.estado}</td>
              <td className="border p-2">{pedido.notas}</td>
              <td className="border p-2">
                <button onClick={() => handleEditPedido(index)} className="bg-yellow-500  p-2 mr-2">
                  Editar
                </button>
                <button onClick={() => handleDeletePedido(index)} className="bg-red-500  p-2">
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

export default PedidosClientesCRUD;
