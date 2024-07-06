import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importa los estilos de react-calendar
import styles from './styles.module.css'; // Importa los estilos personalizados

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log('Selected date:', newDate);
  };

  return (
    <div className={styles.calendarContainer}>
      <Calendar
        onChange={handleDateChange}
        value={date}
        className={styles.myCustomCalendar}
      />
      <p className={styles.selectedDate}>
        Fecha seleccionada: {date.toDateString()}
      </p>
    </div>
  );
};

export default MyCalendar;
