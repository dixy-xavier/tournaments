import React from 'react';
import HEADERS from '../../../Main.constants';
import styles from './TournamentHeader.css';

const TournamentHeader = () => (
  <div className={styles.wrapper}>
    {HEADERS.map(header => (
      <div key={header.label} className={styles.cell}>
        {header.icon}
        <span>{header.label}</span>
      </div>
    ))}
  </div>
);

export default TournamentHeader;
