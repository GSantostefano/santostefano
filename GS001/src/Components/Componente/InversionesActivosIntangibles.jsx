import { useState } from 'react';

const InversionesActivosIntangibles = () => {
  const [activos, setActivos] = useState([]);
  const [newActivo, setNewActivo] = useState({
    nombre: '',
    fechaInversion: '',
    costoInicial: '',
    actualizaciones: [{ fecha: '', valor: '' }]
  });

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index === null) {
      setNewActivo({ ...newActivo, [name]: value });
    } else {
      const newActualizaciones = [...newActivo.actualizaciones];
      newActualizaciones[index][name] = value;
      setNewActivo({ ...newActivo, actualizaciones: newActualizaciones });
    }
  };

  const handleAddActualizacion = () => {
    setNewActivo({
      ...newActivo,
      actualizaciones: [...newActivo.actualizaciones, { fecha: '', valor: '' }]
    });
  };

  const handleRemoveActualizacion = (index) => {
    const newActualizaciones = newActivo.actualizaciones.filter((_, i) => i !== index);
    setNewActivo({ ...newActivo, actualizaciones: newActualizaciones });
  };

  const handleResetActivo = () => {
    setNewActivo({
      nombre: '',
      fechaInversion: '',
      costoInicial: '',
      actualizaciones: [{ fecha: '', valor: '' }]
    });
  };

  const handleAddActivo = () => {
    if (newActivo.nombre && newActivo.fechaInversion && newActivo.costoInicial) {
      setActivos([...activos, { ...newActivo, id: Date.now() }]);
      handleResetActivo();
    } else {
      alert('Todos los campos deben estar completos.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inversiones en Activos Intangibles</h1>
      <div className="mb-4">
        <input
          type="text"
          name="nombre"
          value={newActivo.nombre}
          onChange={handleChange}
          placeholder="Nombre del Activo"
          className="border p-2 mr-2"
        />
        <input
          type="date"
          name="fechaInversion"
          value={newActivo.fechaInversion}
          onChange={handleChange}
          placeholder="Fecha de Inversión"
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="costoInicial"
          value={newActivo.costoInicial}
          onChange={handleChange}
          placeholder="Costo Inicial"
          className="border p-2 mr-2"
        />
        {newActivo.actualizaciones.map((actualizacion, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="date"
              name="fecha"
              value={actualizacion.fecha}
              onChange={(e) => handleChange(e, index)}
              placeholder="Fecha"
              className="border p-2 mr-2"
            />
            <input
              type="number"
              name="valor"
              value={actualizacion.valor}
              onChange={(e) => handleChange(e, index)}
              placeholder="Valor"
              className="border p-2 mr-2"
            />
            <button onClick={() => handleRemoveActualizacion(index)} className="bg-red-500 text-white p-2">Eliminar</button>
          </div>
        ))}
        <button onClick={handleAddActualizacion} className="bg-blue-500 text-white p-2 mr-2">Añadir Actualización</button>
        <button onClick={handleAddActivo} className="bg-green-500 text-white p-2 mr-2">Agregar Activo</button>
        <button onClick={handleResetActivo} className="bg-gray-500 text-white p-2">Cancelar</button>
      </div>
      <div className="overflow-auto max-h-96">
        <table className="table-fixed w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 w-1/6">Nombre</th>
              <th className="border p-2 w-1/6">Fecha de Inversión</th>
              <th className="border p-2 w-1/6">Costo Inicial</th>
              <th className="border p-2 w-1/6">Fecha de Actualización</th>
              <th className="border p-2 w-1/6">Valor</th>
            </tr>
          </thead>
          <tbody>
            {activos.map(activo => (
              <React.Fragment key={activo.id}>
                <tr>
                  <td className="border p-2">{activo.nombre}</td>
                  <td className="border p-2">{activo.fechaInversion}</td>
                  <td className="border p-2">{activo.costoInicial}</td>
                  <td className="border p-2" colSpan="2"></td>
                </tr>
                {activo.actualizaciones.map((actualizacion, index) => (
                  <tr key={index}>
                    <td className="border p-2"></td>
                    <td className="border p-2"></td>
                    <td className="border p-2"></td>
                    <td className="border p-2">{actualizacion.fecha}</td>
                    <td className="border p-2">{actualizacion.valor}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InversionesActivosIntangibles;
