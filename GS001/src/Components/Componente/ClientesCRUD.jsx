import { useState } from 'react';

const ClientesCRUD = () => {
  const [clientes, setClientes] = useState([]);
  const [newCliente, setNewCliente] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    email: '',
    contactoPrincipal: '',
    notas: ''
  });
  const [editingIndex, setEditingIndex] = useState(-1); // Para controlar la edición de un cliente existente

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCliente({ ...newCliente, [name]: value });
  };

  const handleAddCliente = () => {
    if (newCliente.nombre && newCliente.direccion && newCliente.telefono) {
      if (editingIndex === -1) {
        // Agregar nuevo cliente
        setClientes([...clientes, { ...newCliente, id: Date.now() }]);
      } else {
        // Editar cliente existente
        const updatedClientes = [...clientes];
        updatedClientes[editingIndex] = { ...newCliente, id: clientes[editingIndex].id };
        setClientes(updatedClientes);
        setEditingIndex(-1); // Terminar modo edición
      }
      setNewCliente({
        nombre: '',
        direccion: '',
        telefono: '',
        email: '',
        contactoPrincipal: '',
        notas: ''
      }); // Limpiar formulario
    } else {
      alert('Nombre, dirección y teléfono son campos obligatorios.');
    }
  };

  const handleEditCliente = (index) => {
    setNewCliente({ ...clientes[index] });
    setEditingIndex(index);
  };

  const handleDeleteCliente = (index) => {
    const updatedClientes = clientes.filter((_, i) => i !== index);
    setClientes(updatedClientes);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Administrador de Clientes</h1>
      <div className="mb-4 grid w-4/12">
        <input
          type="text"
          name="nombre"
          value={newCliente.nombre}
          onChange={handleChange}
          placeholder="Nombre del cliente"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="direccion"
          value={newCliente.direccion}
          onChange={handleChange}
          placeholder="Dirección"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="telefono"
          value={newCliente.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
          className="border p-2 mr-2"
        />
        <input
          type="email"
          name="email"
          value={newCliente.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="contactoPrincipal"
          value={newCliente.contactoPrincipal}
          onChange={handleChange}
          placeholder="Contacto Principal"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="notas"
          value={newCliente.notas}
          onChange={handleChange}
          placeholder="Notas"
          className="border p-2 mr-2"
        />
        <button onClick={handleAddCliente} className="bg-blue-500 text-white p-2 mr-2">
          {editingIndex === -1 ? 'Agregar Cliente' : 'Guardar Cambios'}
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
            <th className="border p-2">Dirección</th>
            <th className="border p-2">Teléfono</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Contacto Principal</th>
            <th className="border p-2">Notas</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={cliente.id}>
              <td className="border p-2">{cliente.nombre}</td>
              <td className="border p-2">{cliente.direccion}</td>
              <td className="border p-2">{cliente.telefono}</td>
              <td className="border p-2">{cliente.email}</td>
              <td className="border p-2">{cliente.contactoPrincipal}</td>
              <td className="border p-2">{cliente.notas}</td>
              <td className="border p-2">
                <button onClick={() => handleEditCliente(index)} className="bg-yellow-500 text-white p-2 mr-2">
                  Editar
                </button>
                <button onClick={() => handleDeleteCliente(index)} className="bg-red-500 text-white p-2">
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

export default ClientesCRUD;
