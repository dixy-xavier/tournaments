import React from 'react';
import styles from './FilterWrapper.css';

const FilterWrapper = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);

export default FilterWrapper;
