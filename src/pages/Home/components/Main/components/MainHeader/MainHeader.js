import React from 'react';
import HEADERS from '../../Main.constants';
import styles from './MainHeader.css';

const MainHeader = () => (
  <div className={styles.wrapper}>
    {HEADERS.map(header => (
      <div key={header.label} className={styles.cell}>{header.label}</div>
    ))}
  </div>
);

export default MainHeader;
