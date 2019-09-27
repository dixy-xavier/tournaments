import React, { useEffect, useState } from 'react';
import TournamentsContainer from './components/TournamentsContainer/TournamentsContainer';
import { GET_TOURNAMENTS } from './Main.constants';
import styles from './Main.css';
import { request } from './utils/utils';

const Main = ({ searchText, startDate, endDate }) => {
  const [tournaments, setTournaments] = useState([]);
  useEffect(() => {
    request(GET_TOURNAMENTS).then(response => {
      if (response.length) {
        const list = response.map(tournament => ({
          ...tournament,
          date_start: new Date(tournament.date_start.split('Z')[0]),
          date_end: new Date(tournament.date_end.split('Z')[0]),
        }));
        setTournaments(list);
      }
    });
  }, []);
  const filteredList = tournaments.filter(tournament => (
    tournament.series.name.toLowerCase().includes(searchText.toLowerCase()) &&
    tournament.date_start >= startDate &&
    tournament.date_start <= endDate
  ));
  return (
    <div className={styles.wrapper}>
      {filteredList.length ? (
        <TournamentsContainer tournaments={filteredList} />
      ) : (
        <div className={styles.noData}>No matches found</div>
      )}
    </div>
  );
};

export default Main;
