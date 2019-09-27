import React, { useState } from 'react';
import { formattedDate } from '../../../Main/components/TournamentsContainer/Tournaments.utilities';
import Button from '../../../Main/components/Button/Button';
import Calendar from './Calendar/Calendar';
import styles from './CalendarContainer.css';

const CalendarContainer = ({ type, date, onChange }) => {
  const [displayCalendar, toggleCalendar] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Button onClick={() => toggleCalendar(!displayCalendar)}>
        {formattedDate(date)}
      </Button>
      {displayCalendar && (
        <Calendar date={date} onChange={(date) => {
          onChange(date);
          toggleCalendar(false);
        }}/>
      )}
    </div>
  );
};

export default CalendarContainer;
