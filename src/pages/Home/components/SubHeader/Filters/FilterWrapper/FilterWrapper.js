import React from 'react';
import styles from './FilterWrapper.css';

const FilterWrapper = ({ label, children }) => (
  <div className={styles.wrapper}>
    <span className={styles.label}>{label}</span>
    {children}
  </div>
);

export default FilterWrapper;
