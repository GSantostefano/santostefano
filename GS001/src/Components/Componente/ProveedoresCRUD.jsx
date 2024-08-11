import { useState } from "react";

const ProveedoresCRUD = () => {
  const [proveedores, setProveedores] = useState([]);
  const [newProveedor, setNewProveedor] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    email: "",
    dni: "",
    notas: "",
    ciudad: "",   // Nuevo campo
    provincia: ""
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
        updatedProveedores[editingIndex] = {
          ...newProveedor,
          id: proveedores[editingIndex].id,
        };
        setProveedores(updatedProveedores);
        setEditingIndex(-1); // Terminar modo edición
      }
      setNewProveedor({
        nombre: "",
        direccion: "",
        telefono: "",
        email: "",
        dni: "",
        notas: "",
        ciudad: "",   // Nuevo campo
        provincia: ""
      }); // Limpiar formulario
    } else {
      alert("Nombre, dirección y teléfono son campos obligatorios.");
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
      
      <h1 className=" text-2xl font-bold mb-4">Gestión de Proveedores</h1>
      <div className="mb-4 text-red-600 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="">Nombre del proveedor:</span>
          <input
            type="text"
            name="nombre"
            value={newProveedor.nombre}
            onChange={handleChange}
            placeholder="Nombre del proveedor"
            className="mt-1 block w-full  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Dirección:</span>
          <input
            type="text"
            name="direccion"
            value={newProveedor.direccion}
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
            value={newProveedor.telefono}
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
            value={newProveedor.email}
            onChange={handleChange}
            placeholder="Email"
            className="mt-1 block w-full  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Contacto Principal:</span>
          <input
            type="text"
            name="dni"
            value={newProveedor.dni}
            onChange={handleChange}
            placeholder="Contacto Principal"
            className="mt-1 block w-full  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Notas:</span>
          <input
            type="text"
            name="notas"
            value={newProveedor.notas}
            onChange={handleChange}
            placeholder="Notas"
            className="mt-1 block w-full  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Ciudad:</span>
          <input
            type="text"
            name="ciudad"
            value={newProveedor.ciudad}
            onChange={handleChange}
            placeholder="Ciudad"
            className="mt-1 block w-full  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>

        <label className="block">
          <span className="">Provincia:</span>
          <input
            type="text"
            name="provincia"
            value={newProveedor.provincia}
            onChange={handleChange}
            placeholder="Provincia"
            className="mt-1 block w-full  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleAddProveedor}
            className="text-white  justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            {editingIndex === -1 ? "Agregar Proveedor" : "Guardar Cambios"}
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
                Dirección
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Teléfono
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Email
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Contacto Principal
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Notas
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Ciudad
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Provincia
              </th>
              <th className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-black border-black">
            {proveedores.map((proveedor, index) => (
              <tr key={proveedor.id} className="h-16">
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {proveedor.nombre}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {proveedor.direccion}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {proveedor.telefono}
                </td>
                <td className="border border-black p-2 align-middle min-w-[200px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {proveedor.email}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {proveedor.dni}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {proveedor.notas}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {proveedor.ciudad}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  {proveedor.provincia}
                </td>
                <td className="border border-black p-2 align-middle min-w-[100px] max-w-[200px] overflow-x-auto whitespace-nowrap">
                  <div className="flex justify-around">
                    <button
                      onClick={() => handleEditProveedor(index)}
                      className="bg-black hover:bg-red-700 text-white p-2 mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteProveedor(index)}
                      className="bg-black hover:bg-red-700 text-white p-2"
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProveedoresCRUD;
