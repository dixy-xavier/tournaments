import React from 'react';
import CalendarContainer from './CalendarContainer/CalendarContainer';
import Search from './Search/Search';
import styles from './Filters.css';

const Filters = ({ searchText, onSearch, startDate, setStartDate, endDate, setEndDate }) => (
  <div className={styles.wrapper}>
    <span>Filter By</span>
    <Search value={searchText} onChange={event => onSearch(event.target.value)} />
    <CalendarContainer type='start' date={startDate} onChange={setStartDate} />
    <CalendarContainer type='end' date={endDate} onChange={setEndDate} />
  </div>
);

export default Filters;
