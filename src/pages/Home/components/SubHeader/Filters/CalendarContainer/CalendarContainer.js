import React, { useState } from 'react';
import Button from '../../../Button/Button';
import { formattedDate } from '../../../Home.utilities';
import FilterWrapper from '../FilterWrapper/FilterWrapper';
import Calendar from './Calendar/Calendar';

const CalendarContainer = ({ type, date, onChange }) => {
  const [displayCalendar, toggleCalendar] = useState(false);
  return (
    <FilterWrapper label={`Select ${type} date`}>
      <Button onClick={() => toggleCalendar(!displayCalendar)}>
        {formattedDate(date)}
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
