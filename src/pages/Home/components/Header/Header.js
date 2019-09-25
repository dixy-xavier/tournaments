import React from 'react';
import styles from './Header.css';

const Header = () => (
  <div className={styles.wrapper}>
    <img alt="Bayes logo" className={styles.logo} src="/assets/bayes-logo.png" />
  </div>
);

export default Header;
