import { useState } from "react";

const CuentasCRUD = () => {
  const [cuentas, setCuentas] = useState([]);
  const [newCuenta, setNewCuenta] = useState({
    nombre: "",
    tipo: "Activo", // Valor por defecto
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
        updatedCuentas[editingIndex] = {
          ...newCuenta,
          id: cuentas[editingIndex].id,
        };
        setCuentas(updatedCuentas);
        setEditingIndex(-1); // Terminar modo edición
      }
      setNewCuenta({ nombre: "", tipo: "Activo" }); // Limpiar formulario
    } else {
      alert("Todos los campos deben estar completos.");
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
      <div className="mb-4 text-red-600 grid w-4/12 gap-4">
        <label className="block">
          <span className="">Nombre de la cuenta:</span>
          <input
            type="text"
            name="nombre"
            value={newCuenta.nombre}
            onChange={handleChange}
            placeholder="Nombre de la cuenta"
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Tipo:</span>
          <select
            name="tipo"
            value={newCuenta.tipo}
            onChange={handleChange}
            className="mt-1 block w-full border-red-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
          >
            <option value="Activo">Activo</option>
            <option value="Pasivo">Pasivo</option>
            <option value="Patrimonio Neto">Patrimonio Neto</option>
          </select>
        </label>
        <button
          onClick={handleAddCuenta}
          className="text-white inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          {editingIndex === -1 ? "Agregar Cuenta" : "Guardar Cambios"}
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
            <tr className="bg-stone-950 text-white">
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Nombre
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Tipo
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Acciones
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {cuentas.map((cuenta, index) => (
              <tr key={cuenta.id} className="h-16">
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {cuenta.nombre}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {cuenta.tipo}
                </td>
                <td className="border p-2 align-middle h-full">
                  <button
                    onClick={() => handleEditCuenta(index)}
                    className="bg-yellow-500 text-white inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 h-full w-full"
                  >
                    Editar
                  </button>
                  </td>
                <td className="border p-2 align-middle h-full">
                  <button
                    onClick={() => handleDeleteCuenta(index)}
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

export default CuentasCRUD;
