import React, { useState } from 'react';
import SubHeader from './components/SubHeader/SubHeader';
import Main from './components/Main/Main';
import styles from './Home.css';

const START_DATE = new Date('2019-01-01 00:00:00');
const END_DATE = new Date('2019-12-31 23:59:59');

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState(START_DATE);
  const [endDate, setEndDate] = useState(END_DATE);
  return (
    <div className={styles.wrapper}>
      <SubHeader
        searchText={searchText}
        setSearchText={setSearchText}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        clearAll={() => {
          setSearchText('');
          setStartDate(START_DATE);
          setEndDate(END_DATE);
        }}
      />
      <Main
        searchText={searchText}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};

export default Home;
