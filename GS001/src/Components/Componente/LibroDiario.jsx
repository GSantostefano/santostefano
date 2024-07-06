import { useState } from 'react';
import styles from './styles.module.css';

const LibroDiario = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({
    date: '',
    detail: '',
    debit: '',
    credit: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleAddEntry = () => {
    if (newEntry.date && newEntry.detail && newEntry.debit && newEntry.credit) {
      setEntries([...entries, { ...newEntry, id: Date.now() }]);
      setNewEntry({ date: '', detail: '', debit: '', credit: '' });
    }
  };

  return (
    <div className={styles.diaryContainer}>
      <h1>Libro Diario</h1>
      <div className={styles.entryForm}>
        <input
          type="date"
          name="date"
          value={newEntry.date}
          onChange={handleChange}
          placeholder="Fecha"
          className={styles.input}
        />
        <input
          type="text"
          name="detail"
          value={newEntry.detail}
          onChange={handleChange}
          placeholder="Detalle"
          className={styles.input}
        />
        <input
          type="number"
          name="debit"
          value={newEntry.debit}
          onChange={handleChange}
          placeholder="Debe"
          className={styles.input}
        />
        <input
          type="number"
          name="credit"
          value={newEntry.credit}
          onChange={handleChange}
          placeholder="Haber"
          className={styles.input}
        />
        <button onClick={handleAddEntry} className={styles.addButton}>Agregar</button>
      </div>
      <table className={styles.diaryTable}>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Detalle</th>
            <th>Debe</th>
            <th>Haber</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <tr key={entry.id}>
              <td>{entry.date}</td>
              <td>{entry.detail}</td>
              <td>{entry.debit}</td>
              <td>{entry.credit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibroDiario;
