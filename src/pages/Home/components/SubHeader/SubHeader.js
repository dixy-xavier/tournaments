import React from 'react';
import Filters from './Filters/Filters';
import styles from './SubHeader.css';

const SubHeader = (props) => (
  <div className={styles.wrapper}>
    <h2 className={styles.header}>Tournament List</h2>
    <Filters
      {...props}
    />
  </div>
);

export default SubHeader;
