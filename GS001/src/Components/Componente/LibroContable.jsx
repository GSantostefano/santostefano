import { useState } from 'react';

const LibroContable = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({
    date: '',
    detail: '',
    transactions: [{ account: '', debit: '', credit: '', operationCost: '' }]
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newTransactions = [...newEntry.transactions];
    newTransactions[index][name] = value;
    setNewEntry({ ...newEntry, transactions: newTransactions });
  };

  const handleAddTransaction = () => {
    setNewEntry({
      ...newEntry,
      transactions: [...newEntry.transactions, { account: '', debit: '', credit: '', operationCost: '' }]
    });
  };

  const handleEntryChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleRemoveTransaction = (index) => {
    const newTransactions = newEntry.transactions.filter((_, i) => i !== index);
    setNewEntry({ ...newEntry, transactions: newTransactions });
  };

  const handleResetEntry = () => {
    setNewEntry({
      date: '',
      detail: '',
      transactions: [{ account: '', debit: '', credit: '', operationCost: '' }]
    });
  };

  const handleAddEntry = () => {
    const totalDebit = newEntry.transactions.reduce((sum, t) => sum + Number(t.debit || 0), 0);
    const totalCredit = newEntry.transactions.reduce((sum, t) => sum + Number(t.credit || 0), 0);

    if (newEntry.date && newEntry.detail && totalDebit > 0 && totalDebit === totalCredit) {
      setEntries([...entries, { ...newEntry, id: Date.now() }]);
      handleResetEntry();
    } else {
      alert('Los débitos deben ser iguales a los créditos y todos los campos deben estar completos.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Libro Contable</h1>
      <div className="mb-4">
        <input
          type="date"
          name="date"
          value={newEntry.date}
          onChange={handleEntryChange}
          placeholder="Fecha"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          name="detail"
          value={newEntry.detail}
          onChange={handleEntryChange}
          placeholder="Detalle"
          className="border p-2 mr-2"
        />
        {newEntry.transactions.map((transaction, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              name="account"
              value={transaction.account}
              onChange={(e) => handleChange(e, index)}
              placeholder="Cuenta"
              className="border p-2 mr-2"
            />
            <input
              type="number"
              name="debit"
              value={transaction.debit}
              onChange={(e) => handleChange(e, index)}
              placeholder="Debe"
              className="border p-2 mr-2"
            />
            <input
              type="number"
              name="credit"
              value={transaction.credit}
              onChange={(e) => handleChange(e, index)}
              placeholder="Haber"
              className="border p-2 mr-2"
            />
            <input
              type="number"
              name="operationCost"
              value={transaction.operationCost}
              onChange={(e) => handleChange(e, index)}
              placeholder="Costo de Operación"
              className="border p-2 mr-2"
            />
            <button onClick={() => handleRemoveTransaction(index)} className="bg-red-500 text-white p-2">Eliminar</button>
          </div>
        ))}
        <button onClick={handleAddTransaction} className="bg-blue-500 text-white p-2 mr-2">Añadir Transacción</button>
        <button onClick={handleAddEntry} className="bg-green-500 text-white p-2 mr-2">Agregar Entrada</button>
        <button onClick={handleResetEntry} className="bg-gray-500 text-white p-2">Cancelar</button>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Fecha</th>
            <th className="border p-2">Detalle</th>
            <th className="border p-2">Cuenta</th>
            <th className="border p-2">Debe</th>
            <th className="border p-2">Haber</th>
            <th className="border p-2">Costo de Operación</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <React.Fragment key={entry.id}>
              <tr>
                <td className="border p-2">{entry.date}</td>
                <td className="border p-2">{entry.detail}</td>
                <td className="border p-2" colSpan="4"></td>
              </tr>
              {entry.transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="border p-2"></td>
                  <td className="border p-2"></td>
                  <td className="border p-2">{transaction.account}</td>
                  <td className="border p-2">{transaction.debit}</td>
                  <td className="border p-2">{transaction.credit}</td>
                  <td className="border p-2">{transaction.operationCost}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibroContable;
