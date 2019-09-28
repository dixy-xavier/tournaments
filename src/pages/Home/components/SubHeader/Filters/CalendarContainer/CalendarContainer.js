import React, { useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Button from '../../../Button/Button';
import { formattedDate } from '../../../Home.utilities';
import FilterWrapper from '../FilterWrapper/FilterWrapper';
import Calendar from './Calendar/Calendar';
import styles from './CalendarContainer.css';

const CalendarContainer = ({ type, date, onChange }) => {
  const [displayCalendar, toggleCalendar] = useState(false);
  return (
    <FilterWrapper>
      <Button className={styles.button} onClick={() => toggleCalendar(!displayCalendar)}>
        <FaRegCalendarAlt />
        {`${type} date: ${formattedDate(date)}`}
      </Button>
      {displayCalendar && (
        <Calendar date={date} onChange={(date) => {
          onChange(date);
          toggleCalendar(false);
        }} />
      )}
    </FilterWrapper>
  );
};

export default CalendarContainer;
