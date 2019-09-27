import React from 'react';
import { FaSearch } from 'react-icons/fa';
import FilterWrapper from '../FilterWrapper/FilterWrapper';
import styles from './Search.css';

const Search = ({ searchText, onSearch }) => (
  <FilterWrapper>
    <FaSearch />
    <input
      className={styles.search}
      placeholder="Search by series name"
      value={searchText}
      onChange={event => onSearch(event.target.value)}
    />
  </FilterWrapper>
);

export default Search;
