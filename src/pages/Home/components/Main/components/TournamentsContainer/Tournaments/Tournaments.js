import React from 'react';
import Tournament from '../Tournament/Tournament';
import styles from './Tournaments.css';

const Tournaments = ({ tournaments }) => (
  <div className={styles.wrapper}>
    {tournaments.map(item => (
      <Tournament key={item.id} tournament={item} />
    ))}
  </div>
);

export default Tournaments;
