import React from 'react';
import styles from './Search.css';

const Search = ({ searchText, onSearch }) => (
  <input
    className={styles.search}
    placeholder="Search by series name"
    value={searchText}
    onChange={event => onSearch(event.target.value)}
  />
);

export default Search;
