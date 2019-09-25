import React, { useState } from 'react';
import Filters from './components/Filters/Filters';
import TournamentsContainer from './components/TournamentsContainer/TournamentsContainer';
import { tournaments } from './Main.constants';
import styles from './Main.css';

const Main = () => {
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState(new Date('2019-01-01 00:00:00'));
  const [endDate, setEndDate] = useState(new Date('2019-12-31 23:59:59'));
  let filteredList = tournaments.filter(tournament => tournament.series.name.toLowerCase().includes(searchText));
  return (
    <div className={styles.wrapper}>
      <Filters
        searchText={searchText}
        onSearch={setSearchText}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <TournamentsContainer tournaments={filteredList} />
    </div>
  );
};

export default Main;
