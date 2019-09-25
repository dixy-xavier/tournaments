import React, { useState } from 'react';
import Filters from './components/Filters/Filters';
import TournamentsContainer from './components/TournamentsContainer/TournamentsContainer';
import { tournaments as list } from './Main.constants';
import styles from './Main.css';

const tournaments = list.map(tournament => ({
  ...tournament,
  date_start: new Date(tournament.date_start.split('Z')[0]),
  date_end: new Date(tournament.date_end.split('Z')[0]),
}));

const Main = () => {
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState(new Date('2019-01-01 00:00:00'));
  const [endDate, setEndDate] = useState(new Date('2019-12-31 23:59:59'));
  const filteredList = tournaments.filter(tournament => (
    tournament.series.name.toLowerCase().includes(searchText.toLowerCase()) &&
    tournament.date_start >= startDate &&
    tournament.date_start <= endDate
  ));
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
      {filteredList.length ? (
        <TournamentsContainer tournaments={filteredList} />
      ) : (
        <div className={styles.noData}>No matches found</div>
      )}
    </div>
  );
};

export default Main;
