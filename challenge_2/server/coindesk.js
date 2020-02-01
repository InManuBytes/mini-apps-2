// https://api.coindesk.com/v1/bpi/currentprice.json
// https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05
// Start building your app using a single, fixed currency symbol,
// Bitcoin (BTC), and a fixed date range of your choosing.
// Use a time-series chart and show closing prices only.
const request = require('request-promise');

let getHistoricalPriceData = (start='2019-01-01', end='2019-12-31') => {
  var address = `https://api.coindesk.com/v1/bpi/historical/close.json`;
  var query = `${address}?start=${start}&end=${end}`;
  var options = {
    uri: query,
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  };

  return request.get(options)
    .then(function (prices) {
      console.log('There are', prices.length, ' prices');
      return prices;
    })
    .catch(function (err) {
      // API call failed...
      console.log('Failed to retrieve prices');
      return err;
    });
}

module.exports.getHistoricalPriceData = getHistoricalPriceData;
