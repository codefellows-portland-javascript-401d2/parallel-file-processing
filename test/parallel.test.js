const assert = require('assert');
//const fs = require('fs');
//const path = require('path');
const para = require('../parallel');


describe('file reader', () => {

  it('reads content', done => {
    para.fileContent('cats.txt', (err, data) => {
      assert.equal( data, 'meow\n');
      done();
    });

  });

  it('retrieves first char of file', done =>{
    para.fileChar('meow', (err, data) => {
      assert.equal( data, 'm');
      done();
    });
  });

  it('takes file list, returns first char of contents in order', done => {
    var input = ['beer.txt', 'cats.txt', 'yoda.txt'];
    var expected = ['A', 'm', 'L'];
    para.getFirstCharArr(input, (err, actual) => {
      assert.deepEqual(actual, expected);
      done();
    });
  });

});
