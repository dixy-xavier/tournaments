import React from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import TournamentsContainer from './components/TournamentsContainer/TournamentsContainer';
import { tournaments } from './Main.constants';
import styles from './Main.css';

const Main = () => (
  <div className={styles.wrapper}>
    <MainHeader />
    <TournamentsContainer tournaments={tournaments} />
  </div>
);

export default Main;
