const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

// https://api.coindesk.com/v1/bpi/currentprice.json
// https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05
// Start building your app using a single, fixed currency symbol,
// Bitcoin (BTC), and a fixed date range of your choosing.
// Use a time-series chart and show closing prices only.

app.get('/prices', function (req, res, next) {

});

app.listen(PORT, () => {
  console.log(`Event module listening on port ${PORT}`);
});

