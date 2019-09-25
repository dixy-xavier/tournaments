import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import styles from './Home.css';

const Home = () => (
  <div className={styles.wrapper}>
    <Header />
    <Main />
  </div>
);

export default Home;
