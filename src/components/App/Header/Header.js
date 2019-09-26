import React from 'react';
import styles from './Header.css';

const Header = () => (
  <div className={styles.wrapper}>
    <img alt="Bayes logo" className={styles.logo} src="/assets/bayes-logo.png" />
    <h1 className={styles.header}>Bayes Esports Solutions</h1>
  </div>
);

export default Header;
