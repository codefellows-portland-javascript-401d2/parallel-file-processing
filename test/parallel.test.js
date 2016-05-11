const assert = require('assert');
//const fs = require('fs');
//const path = require('path');
const para = require('../parallel');


describe('file reader', function(){

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

  //it('returns an array in file order')

});
