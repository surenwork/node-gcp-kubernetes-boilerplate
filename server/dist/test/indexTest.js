'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

require('../index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Test Node Server', function (done) {
  it('should return 200 status code', function (done) {
    _http2.default.get('http://localhost:5000', function (response) {
      console.log(response);
      _assert2.default.equal(200, response.statusCode);
      done();
    });
  });
});