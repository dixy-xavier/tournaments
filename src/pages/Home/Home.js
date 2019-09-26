import React from 'react';
import SubHeader from './components/SubHeader/SubHeader';
import Main from './components/Main/Main';
import styles from './Home.css';

const Home = () => (
  <div className={styles.wrapper}>
    <SubHeader />
    <Main />
  </div>
);

export default Home;
