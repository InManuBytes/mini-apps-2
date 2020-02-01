import moment from 'moment';

const utils = {
  // returns a date in the right format
  formatDate: (date) => {
    // check if it's BCE or CE
    const isBCE = /^-/.test(date);
    const unit = isBCE ? ' BCE' : '';
    var formattedDate = '';
    const absDate = date.replace(/^-/, '');
    const isNotYearOnly = /[0-9]+(?=\/)/.test(date);
    const newDate = isNotYearOnly ? moment(absDate).format('LL').replace(/ 0/,' ') : absDate;
    formattedDate += newDate;
    formattedDate += unit;
    return formattedDate;
  }
}

export default utils;