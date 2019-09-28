import classNames from 'classnames';
import React from 'react';
import styles from './FilterWrapper.css';

const FilterWrapper = ({ children, marginRight }) => (
  <div className={classNames(styles.wrapper, { [styles.marginRight]: marginRight })}>
    {children}
  </div>
);

export default FilterWrapper;
