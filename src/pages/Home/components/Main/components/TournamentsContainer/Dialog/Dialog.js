import React from 'react';
import Button from '../../../../Button/Button';
import { getDisplayValue } from '../Tournaments.utilities';
import styles from './Dialog.css';

const Dialog = ({ toggleDialog, data, tournamentLabels, seriesLabels }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <h3 className={styles.header}>Tournament Details</h3>
      <div className={styles.content}>
        {tournamentLabels.map(item => (
          <div className={styles.valueWrapper}>
            <label className={styles.label}>{item.label}</label>
            <span className={styles.value}>{getDisplayValue(data, item.name)}</span>
          </div>
        ))}
        <div className={styles.seriesTitle}>Series Details</div>
        {seriesLabels.map(item => (
          <div className={styles.valueWrapper}>
            <label className={styles.label}>{item.label}</label>
            <span className={styles.value}>{getDisplayValue(data, item.name)}</span>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <Button className={styles.primary} onClick={toggleDialog}>Close</Button>
      </div>
    </div>
  </div>
);

export default Dialog;
