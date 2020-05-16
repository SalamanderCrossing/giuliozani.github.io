const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('.'));
/*
app.get('/', function(req, res) {
  res.sendfile('index.html');
});
*/
let written = false;
app.post('/', function(req, res) {
  // console.log(req.body);
  if (!written) {
    fs.writeFile('data_chrome.json', req.body.data, () => {
      console.log('written');
    });
    written = true;
  }
  res.end('yes');
});
app.listen(3000, function() {
  console.log('Started on PORT 3000');
});
