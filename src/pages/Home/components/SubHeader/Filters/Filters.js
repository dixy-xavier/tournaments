import React from 'react';
import CalendarContainer from './CalendarContainer/CalendarContainer';
import Search from './Search/Search';
import styles from './Filters.css';

const Filters = ({ searchText, setSearchText, startDate, setStartDate, endDate, setEndDate }) => (
  <div className={styles.wrapper}>
    <span className={styles.title}>Filter By</span>
    <Search value={searchText} onSearch={setSearchText} />
    <CalendarContainer type='start' date={startDate} onChange={setStartDate} />
    <CalendarContainer type='end' date={endDate} onChange={setEndDate} />
  </div>
);

export default Filters;
