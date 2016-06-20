var app = require('express')();
var fortune = require('fortune');
var nedbAdapter = require('fortune-nedb');
var jsonApi = require('fortune-json-api');

var store = fortune({
  adatper: {type: nedbAdapter},
  serializers: [
    { type: jsonApi }
  ]
});

store.defineType('teacher', {
  name: { type: String },
});

store.defineType('time', {
  teacher: { type: String },
  time: { type: Date },
  location: { type: String },
  student: { type: String }
});

store.defineType('masterpwd', {
  password: { type: String }
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(fortune.net.http(store));

var port = process.env.PORT || 8080;
store.connect().then(function () {
  app.listen(port, function () {
    console.log('App server started on port ' + port);
  });
});
