'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var coreConfig = require;
var app = (0, _express2.default)();

app.get('/', function (req, res) {
  res.send('Hi There!!, Welcome to node microservice boilerplate');
});

var PORT = _config.core.APP_PORT;
app.listen(PORT);
console.log('Listning to port ', PORT);