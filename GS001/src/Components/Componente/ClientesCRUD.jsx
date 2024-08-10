import { useState } from "react";

const ClientesCRUD = () => {
  const [clientes, setClientes] = useState([]);
  const [newCliente, setNewCliente] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
    email: "",
    dni: "",
    notas: "",
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
        updatedClientes[editingIndex] = {
          ...newCliente,
          id: clientes[editingIndex].id,
        };
        setClientes(updatedClientes);
        setEditingIndex(-1); // Terminar modo edición
      }
      setNewCliente({
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
        email: "",
        dni: "",
        notas: "",
      }); // Limpiar formulario
    } else {
      alert("Nombre, dirección y teléfono son campos obligatorios.");
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
      
      <h1 className=" text-2xl font-bold mb-4">Administrador de Clientes</h1>
      <div className="mb-4 text-red-600 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="">Nombre del cliente:</span>
          <input
            type="text"
            name="nombre"
            value={newCliente.nombre}
            onChange={handleChange}
            placeholder="Nombre del cliente"
            className="mt-1 block w-full  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Apellido del cliente:</span>
          <input
            type="text"
            name="apellido"
            value={newCliente.apellido}
            onChange={handleChange}
            placeholder="Apellido del cliente"
            className="mt-1 block w-full  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Dirección:</span>
          <input
            type="text"
            name="direccion"
            value={newCliente.direccion}
            onChange={handleChange}
            placeholder="Dirección"
            className="mt-1 block w-full  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Teléfono:</span>
          <input
            type="text"
            name="telefono"
            value={newCliente.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
            className="mt-1 block w-full  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Email:</span>
          <input
            type="email"
            name="email"
            value={newCliente.email}
            onChange={handleChange}
            placeholder="Email"
            className="mt-1 block w-full  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        
        <label className="block">
          <span className="">DNI:</span>
          <input
            type="text"
            name="dni"
            value={newCliente.dni}
            onChange={handleChange}
            placeholder="DNI"
            className="mt-1 block w-full  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Notas:</span>
          <input
            type="text"
            name="notas"
            value={newCliente.notas}
            onChange={handleChange}
            placeholder="Notas"
            className="mt-1 block w-full  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <div className="flex justify-center mt-4">
  <button
    onClick={handleAddCliente}
    className="text-white  justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
  >
    {editingIndex === -1 ? "Agregar Cliente" : "Guardar Cambios"}
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
                Apellido
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Dirección
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Teléfono
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Email
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                DNI
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Notas
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Acciones
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-black border-black">
            {clientes.map((cliente, index) => (
              <tr key={cliente.id} className="h-16">
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {cliente.nombre}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {cliente.apellido}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {cliente.direccion}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {cliente.telefono}
                </td>
                <td className="border border-black p-2 align-middle min-w-[200px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {cliente.email}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {cliente.dni}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {cliente.notas}
                </td>
                <td className="border border-black p-2 align-middle h-full">
                  <button
                    onClick={() => handleEditCliente(index)}
                    className="bg-yellow-500 text-white inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 h-full w-full"
                  >
                    Editar
                  </button>
                </td>
                <td className="border border-black p-2 align-middle h-full">
                  <button
                    onClick={() => handleDeleteCliente(index)}
                    className="bg-red-600 text-white inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black h-full w-full"
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

export default ClientesCRUD;
