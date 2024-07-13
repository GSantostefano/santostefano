import { useState } from 'react';
import styles from './styles.module.css';

const TransactionLog = () => {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    type: 'Compra',
    asset: '',
    quantity: '',
    price: '',
    cost: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleAddTransaction = () => {
    if (newTransaction.date && newTransaction.asset && newTransaction.quantity && newTransaction.price && newTransaction.cost) {
      setTransactions([...transactions, { ...newTransaction, id: Date.now() }]);
      setNewTransaction({ date: '', type: 'Compra', asset: '', quantity: '', price: '', cost: '' });
    }
  };

  return (
    <div className={styles.transactionContainer}>
      <h1>Registro de Transacciones</h1>
      <div className={styles.transactionForm}>
        <input
          type="date"
          name="date"
          value={newTransaction.date}
          onChange={handleChange}
          placeholder="Fecha"
          className={styles.input}
        />
        <select
          name="type"
          value={newTransaction.type}
          onChange={handleChange}
          className={styles.input}
        >
          <option value="Compra">Compra</option>
          <option value="Venta">Venta</option>
        </select>
        <input
          type="text"
          name="asset"
          value={newTransaction.asset}
          onChange={handleChange}
          placeholder="Acción/Criptomoneda"
          className={styles.input}
        />
        <input
          type="number"
          name="quantity"
          value={newTransaction.quantity}
          onChange={handleChange}
          placeholder="Cantidad"
          className={styles.input}
        />
        <input
          type="number"
          name="price"
          value={newTransaction.price}
          onChange={handleChange}
          placeholder="Precio"
          className={styles.input}
        />
        <input
          type="number"
          name="cost"
          value={newTransaction.cost}
          onChange={handleChange}
          placeholder="Costo de Operación"
          className={styles.input}
        />
        <button onClick={handleAddTransaction} className={styles.addButton}>Agregar</button>
      </div>
      <table className={styles.transactionTable}>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Tipo</th>
            <th>Acción/Criptomoneda</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Costo de Operación</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>{transaction.asset}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.price}</td>
              <td>{transaction.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionLog;
