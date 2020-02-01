const utils = {
  // returns a date in the right format
  formatDate: (date) => {
    // test if date has any "/" or not to see if it's year only or YYYY/MM/DD
    const isYearOnly = /[0-9]+(?!\\)/.test(date);
    // check if it's BCE or CE
    const isBCE = /^-/.test(date);

    if (isYearOnly && isBCE) {
      var year = date.match(/[0-9]+/);
      return `${year} B.C.E.`;
    } else if (isYearOnly) {
      return `${date} C.E`;
    } else {
      // convert date to a readable format and check to see if adds BCE or CE
    }

  }
}

export default utils;