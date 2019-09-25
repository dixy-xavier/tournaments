import React from 'react';
import TournamentHeader from './TournamentHeader/TournamentHeader';
import Tournaments from './Tournaments/Tournaments';
import styles from './TournamentsContainer.css';

const TournamentsContainer = ({ tournaments }) => (
  <div className={styles.wrapper}>
    <TournamentHeader />
    <Tournaments tournaments={tournaments} />
  </div>
);

export default TournamentsContainer;
