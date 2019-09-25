/**
 *  This function takes url path and calls fetch service and
 *  returns a promise which will give the response object
 */
import moment from 'moment';
import { getValue } from '../components/TournamentsContainer/Tournaments.utilities';

export const request = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

/**
 *  This function takes url path and json object as parameter and
 *  returns the path with the replaced path params.
 */
export const replaceParams = (path, params = {}) => Object.keys(params)
  .reduce((prev, next) => prev.replace(new RegExp(`:${next}`, 'g'), params[next]), path);

/**
 *  This function takes url path and json object as parameter and returns it as a
 *  query string. If the object is empty, an empty string is returned
 */
export const queryObjToSearchStr = (url, queryObj) => {
  const keys = Object.keys(queryObj);
  let queryStr = '';
  if (keys.length) {
    const firstKey = keys.shift();
    queryStr = queryStr.concat('?', firstKey, '=', queryObj[firstKey]);
  }
  return `${url}${keys.reduce((prev, next) => prev.concat('&', next, '=', queryObj[next]), queryStr)}`;
};

/**
 *  This function takes an object and key, returns the value
 *  corresponding to that key in the object
 *  If the value is a date, it formats the date to 'DD-MM-YYYY' format
 */
export const getDisplayValue = (tournament, key) => {
  const value = getValue(tournament, key);
  const isValueDate = key.includes('date_start') || key.includes('date_end');
  return (isValueDate ? moment(value.split('Z')[0]).format('DD-MM-YYYY') : value);
};
