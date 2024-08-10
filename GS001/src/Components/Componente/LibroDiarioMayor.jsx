import { useState } from 'react';

const LibroDiarioMayor = () => {
  const [transacciones, setTransacciones] = useState([]);
  const [newTransaccion, setNewTransaccion] = useState({
    fecha: '',
    descripcion: '',
    cuenta: '',
    debe: 0,
    haber: 0,
  });
  const [cuentas, setCuentas] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaccion({ ...newTransaccion, [name]: value });
  };

  const handleAddTransaccion = () => {
    if (newTransaccion.fecha && newTransaccion.descripcion && newTransaccion.cuenta) {
      const updatedTransacciones = [...transacciones, { ...newTransaccion, id: Date.now() }];
      setTransacciones(updatedTransacciones);

      const updatedCuentas = { ...cuentas };
      if (!updatedCuentas[newTransaccion.cuenta]) {
        updatedCuentas[newTransaccion.cuenta] = { debe: 0, haber: 0 };
      }
      updatedCuentas[newTransaccion.cuenta].debe += parseFloat(newTransaccion.debe);
      updatedCuentas[newTransaccion.cuenta].haber += parseFloat(newTransaccion.haber);
      setCuentas(updatedCuentas);

      setNewTransaccion({
        fecha: '',
        descripcion: '',
        cuenta: '',
        debe: 0,
        haber: 0,
      }); // Limpiar formulario
    } else {
      alert('Fecha, descripción y cuenta son campos obligatorios.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Libro Diario y Mayor</h1>
      <div className="mb-4 text-red-600 grid w-4/12 gap-4">
        <label className="block">
          <span className="">Fecha:</span>
          <input
            type="date"
            name="fecha"
            value={newTransaccion.fecha}
            onChange={handleChange}
            className="mt-1 block w-full text-black  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Descripción:</span>
          <input
            type="text"
            name="descripcion"
            value={newTransaccion.descripcion}
            onChange={handleChange}
            placeholder="Descripción"
            className="mt-1 block w-full text-black  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Cuenta:</span>
          <input
            type="text"
            name="cuenta"
            value={newTransaccion.cuenta}
            onChange={handleChange}
            placeholder="Cuenta"
            className="mt-1 block w-full text-black  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Debe:</span>
          <input
            type="number"
            name="debe"
            value={newTransaccion.debe}
            onChange={handleChange}
            placeholder="Debe"
            className="mt-1 block w-full text-black  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <label className="block">
          <span className="">Haber:</span>
          <input
            type="number"
            name="haber"
            value={newTransaccion.haber}
            onChange={handleChange}
            placeholder="Haber"
            className="mt-1 block w-full text-black  border-red-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm"
          />
        </label>
        <button
          onClick={handleAddTransaccion}
          className="text-white inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Agregar Transacción
        </button>
      </div>

      <h2 className="text-xl font-bold mb-4">Libro Diario</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-black text-white">
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Fecha
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Descripción
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Cuenta
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Debe
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Haber
              </th>
            </tr>
          </thead>
          <tbody>
            {transacciones.map((transaccion) => (
              <tr key={transaccion.id} className="h-16">
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {transaccion.fecha}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {transaccion.descripcion}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {transaccion.cuenta}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {transaccion.debe}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {transaccion.haber}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold mt-8 mb-4">Libro Mayor</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-black text-white">
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Cuenta
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Debe
              </th>
              <th className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                Haber
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(cuentas).map((cuenta, index) => (
              <tr key={index} className="h-16">
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {cuenta}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {cuentas[cuenta].debe}
                </td>
                <td className="border p-2 align-middle min-w-[150px] max-w-[300px] overflow-x-auto whitespace-nowrap">
                  {cuentas[cuenta].haber}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LibroDiarioMayor;
