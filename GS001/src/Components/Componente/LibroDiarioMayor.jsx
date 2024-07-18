import { useState } from 'react';

const LibroDiarioMayor = () => {
  const [transacciones, setTransacciones] = useState([]);
  const [newTransaccion, setNewTransaccion] = useState({
    fecha: '',
    descripcion: '',
    cuenta: '',
    debe: 0,
    haber: 0
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
        haber: 0
      }); // Limpiar formulario
    } else {
      alert('Fecha, descripción y cuenta son campos obligatorios.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Libro Diario y Mayor</h1>
      <div className="mb-4 grid w-4/12 gap-4">
        <input
          type="date"
          name="fecha"
          value={newTransaccion.fecha}
          onChange={handleChange}
          placeholder="Fecha"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="descripcion"
          value={newTransaccion.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="cuenta"
          value={newTransaccion.cuenta}
          onChange={handleChange}
          placeholder="Cuenta"
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="debe"
          value={newTransaccion.debe}
          onChange={handleChange}
          placeholder="Debe"
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="haber"
          value={newTransaccion.haber}
          onChange={handleChange}
          placeholder="Haber"
          className="border p-2 mr-2"
        />
        <button onClick={handleAddTransaccion} className="bg-blue-500 text-white p-2">
          Agregar Transacción
        </button>
      </div>
      <h2 className="text-xl font-bold mb-4">Libro Diario</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Fecha</th>
            <th className="border p-2">Descripción</th>
            <th className="border p-2">Cuenta</th>
            <th className="border p-2">Debe</th>
            <th className="border p-2">Haber</th>
          </tr>
        </thead>
        <tbody>
          {transacciones.map((transaccion) => (
            <tr key={transaccion.id}>
              <td className="border p-2">{transaccion.fecha}</td>
              <td className="border p-2">{transaccion.descripcion}</td>
              <td className="border p-2">{transaccion.cuenta}</td>
              <td className="border p-2">{transaccion.debe}</td>
              <td className="border p-2">{transaccion.haber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-xl font-bold mt-8 mb-4">Libro Mayor</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Cuenta</th>
            <th className="border p-2">Debe</th>
            <th className="border p-2">Haber</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(cuentas).map((cuenta, index) => (
            <tr key={index}>
              <td className="border p-2">{cuenta}</td>
              <td className="border p-2">{cuentas[cuenta].debe}</td>
              <td className="border p-2">{cuentas[cuenta].haber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibroDiarioMayor;
