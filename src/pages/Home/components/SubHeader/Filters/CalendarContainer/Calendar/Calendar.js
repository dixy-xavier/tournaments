import React from 'react';
import ReactCalendar from 'react-calendar';
import styles from './Calendar.css';

const Calendar = ({ date, onChange }) => (
  <div className={styles.calendar}>
    <ReactCalendar
      value={date}
      onChange={onChange}
      className={styles.calendarWrapper}
    />
  </div>
);

export default Calendar;
