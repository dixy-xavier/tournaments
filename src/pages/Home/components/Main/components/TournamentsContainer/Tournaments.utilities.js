import { formattedDate } from '../../../Home.utilities';

/**
 *  This function takes an object and key path (array of path)
 *  It returns the value of the key path it points in the object
 */
const getValue = (data, path) => {
  if (path.length === 0) return data;
  else return getValue(data[path[0]], path.slice(1, path.length));
};

/**
 *  This function takes an object and key, returns the value
 *  corresponding to that key in the object
 *  If the value is a date, it formats the date to 'DD-MM-YYYY' format
 */
export const getDisplayValue = (tournament, key) => {
  const value = getValue(tournament, key);
  const isValueDate = key.includes('date_start') || key.includes('date_end');
  return (isValueDate ? formattedDate(value) : value);
};
