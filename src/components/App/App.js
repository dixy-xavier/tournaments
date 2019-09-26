import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Header from './Header/Header';
import styles from './App.css';

const App = () => (
  <div className={styles.wrapper}>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default App;
