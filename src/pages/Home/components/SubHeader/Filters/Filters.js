import React from 'react';
import { FaFilter } from 'react-icons/fa';
import CalendarContainer from './CalendarContainer/CalendarContainer';
import Search from './Search/Search';
import styles from './Filters.css';

const Filters = ({ searchText, setSearchText, startDate, setStartDate, endDate, setEndDate, clearAll }) => (
  <div className={styles.wrapper}>
    <div className={styles.label}>
      <FaFilter />
      <span className={styles.title}>Filter By</span>
    </div>
    <Search searchText={searchText} onSearch={setSearchText} />
    <CalendarContainer type='start' date={startDate} onChange={setStartDate} />
    <CalendarContainer type='end' date={endDate} onChange={setEndDate} />
    <a href='' className={styles.clear} onClick={clearAll}>Clear All</a>
  </div>
);

export default Filters;
