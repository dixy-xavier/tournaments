import React, { useState } from 'react';
import HEADERS from '../../../Main.constants';
import Dialog from '../Dialog/Dialog';
import { getDisplayValue } from '../Tournaments.utilities';
import { SERIES_LABELS, TOURNAMENT_LABELS } from './Tournament.constants';
import styles from './Tournament.css';

const Tournament = ({ tournament }) => {
  const [activeTournament, setTournament] = useState({});
  return (
    <div className={styles.wrapper} onClick={() => setTournament(tournament)}>
      {HEADERS.map(item => (
        <div key={item.label} className={styles.cell}>
          {getDisplayValue(tournament, item.name)}
        </div>
      ))}
      {activeTournament.id === tournament.id && (
        <Dialog
          toggleDialog={(e) => {
            setTournament({});
            e.stopPropagation();
          }}
          tournamentLabels={TOURNAMENT_LABELS}
          seriesLabels={SERIES_LABELS}
          data={activeTournament}
        />
      )}
    </div>
  );
};

export default Tournament;
