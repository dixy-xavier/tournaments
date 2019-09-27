import moment from 'moment';

/**
 *  This function takes date as argument and converts to
 *  format 'DD-MM-YYYY'
 */
export const formattedDate = date => moment(date).format('D MMM, YYYY');
