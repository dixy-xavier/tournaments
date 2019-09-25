import React from 'react';
import Tournament from './Tournament/Tournament';
import styles from './Tournaments.css';

const Tournaments = ({ tournaments }) => (
  <div className={styles.dataWrapper}>
    {tournaments.map(item => (
      <Tournament key={item.id} tournament={item} />
    ))}
  </div>
);

export default Tournaments;
