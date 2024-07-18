import { useState } from 'react';

const ProveedoresCRUD = () => {
  const [proveedores, setProveedores] = useState([]);
  const [newProveedor, setNewProveedor] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    email: '',
    contactoPrincipal: '',
    notas: ''
  });
  const [editingIndex, setEditingIndex] = useState(-1); // Para controlar la edición de un proveedor existente

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProveedor({ ...newProveedor, [name]: value });
  };

  const handleAddProveedor = () => {
    if (newProveedor.nombre && newProveedor.direccion && newProveedor.telefono) {
      if (editingIndex === -1) {
        // Agregar nuevo proveedor
        setProveedores([...proveedores, { ...newProveedor, id: Date.now() }]);
      } else {
        // Editar proveedor existente
        const updatedProveedores = [...proveedores];
        updatedProveedores[editingIndex] = { ...newProveedor, id: proveedores[editingIndex].id };
        setProveedores(updatedProveedores);
        setEditingIndex(-1); // Terminar modo edición
      }
      setNewProveedor({
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

  const handleEditProveedor = (index) => {
    setNewProveedor({ ...proveedores[index] });
    setEditingIndex(index);
  };

  const handleDeleteProveedor = (index) => {
    const updatedProveedores = proveedores.filter((_, i) => i !== index);
    setProveedores(updatedProveedores);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Administrador de Proveedores</h1>
      <div className="mb-4">
        <input
          type="text"
          name="nombre"
          value={newProveedor.nombre}
          onChange={handleChange}
          placeholder="Nombre del proveedor"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="direccion"
          value={newProveedor.direccion}
          onChange={handleChange}
          placeholder="Dirección"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="telefono"
          value={newProveedor.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
          className="border p-2 mr-2"
        />
        <input
          type="email"
          name="email"
          value={newProveedor.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="contactoPrincipal"
          value={newProveedor.contactoPrincipal}
          onChange={handleChange}
          placeholder="Contacto Principal"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="notas"
          value={newProveedor.notas}
          onChange={handleChange}
          placeholder="Notas"
          className="border p-2 mr-2"
        />
        <button onClick={handleAddProveedor} className="bg-blue-500 text-white p-2 mr-2">
          {editingIndex === -1 ? 'Agregar Proveedor' : 'Guardar Cambios'}
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
          {proveedores.map((proveedor, index) => (
            <tr key={proveedor.id}>
              <td className="border p-2">{proveedor.nombre}</td>
              <td className="border p-2">{proveedor.direccion}</td>
              <td className="border p-2">{proveedor.telefono}</td>
              <td className="border p-2">{proveedor.email}</td>
              <td className="border p-2">{proveedor.contactoPrincipal}</td>
              <td className="border p-2">{proveedor.notas}</td>
              <td className="border p-2">
                <button onClick={() => handleEditProveedor(index)} className="bg-yellow-500 text-white p-2 mr-2">
                  Editar
                </button>
                <button onClick={() => handleDeleteProveedor(index)} className="bg-red-500 text-white p-2">
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

export default ProveedoresCRUD;
