import { useState } from 'react';

const CuentasCRUD = () => {
  const [cuentas, setCuentas] = useState([]);
  const [newCuenta, setNewCuenta] = useState({
    nombre: '',
    tipo: 'Activo' // Valor por defecto
  });
  const [editingIndex, setEditingIndex] = useState(-1); // Para controlar la edición de una cuenta existente

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCuenta({ ...newCuenta, [name]: value });
  };

  const handleAddCuenta = () => {
    if (newCuenta.nombre && newCuenta.tipo) {
      if (editingIndex === -1) {
        // Agregar nueva cuenta
        setCuentas([...cuentas, { ...newCuenta, id: Date.now() }]);
      } else {
        // Editar cuenta existente
        const updatedCuentas = [...cuentas];
        updatedCuentas[editingIndex] = { ...newCuenta, id: cuentas[editingIndex].id };
        setCuentas(updatedCuentas);
        setEditingIndex(-1); // Terminar modo edición
      }
      setNewCuenta({ nombre: '', tipo: 'Activo' }); // Limpiar formulario
    } else {
      alert('Todos los campos deben estar completos.');
    }
  };

  const handleEditCuenta = (index) => {
    setNewCuenta({ ...cuentas[index] });
    setEditingIndex(index);
  };

  const handleDeleteCuenta = (index) => {
    const updatedCuentas = cuentas.filter((_, i) => i !== index);
    setCuentas(updatedCuentas);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Administrador de Cuentas</h1>
      <div className="mb-4">
        <input
          type="text"
          name="nombre"
          value={newCuenta.nombre}
          onChange={handleChange}
          placeholder="Nombre de la cuenta"
          className="border p-2 mr-2"
        />
        <select
          name="tipo"
          value={newCuenta.tipo}
          onChange={handleChange}
          className="border p-2 mr-2"
        >
          <option value="Activo">Activo</option>
          <option value="Pasivo">Pasivo</option>
          <option value="Patrimonio Neto">Patrimonio Neto</option>
        </select>
        <button onClick={handleAddCuenta} className="bg-blue-500 text-white p-2 mr-2">
          {editingIndex === -1 ? 'Agregar Cuenta' : 'Guardar Cambios'}
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
            <th className="border p-2">Tipo</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cuentas.map((cuenta, index) => (
            <tr key={cuenta.id}>
              <td className="border p-2">{cuenta.nombre}</td>
              <td className="border p-2">{cuenta.tipo}</td>
              <td className="border p-2">
                <button onClick={() => handleEditCuenta(index)} className="bg-yellow-500 text-white p-2 mr-2">
                  Editar
                </button>
                <button onClick={() => handleDeleteCuenta(index)} className="bg-red-500 text-white p-2">
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

export default CuentasCRUD;
