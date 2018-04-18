import http from 'http';
import assert from 'assert';

import '../index.js';

describe('Test Node Server', done => {
  it('should return 200 status code', done => {
    http.get('http://localhost:5000', response => {
      console.log(response);
      assert.equal(200, response.statusCode);
      done();
    });
  });
});
