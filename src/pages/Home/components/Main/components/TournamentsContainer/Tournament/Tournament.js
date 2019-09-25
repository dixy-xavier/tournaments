import React from 'react';
import HEADERS from '../../../Main.constants';
import { getDisplayValue } from '../../../utils/utils';
import styles from './Tournament.css';

const Tournament = ({ tournament }) => (
  <div className={styles.wrapper}>
    {HEADERS.map(item => (
      <div key={item.label} className={styles.cell}>
        {getDisplayValue(tournament, item.name)}
      </div>
    ))}
  </div>
);

export default Tournament;
