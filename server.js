var express = require('express');
var app = express();

app.use(express.static('dist'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
