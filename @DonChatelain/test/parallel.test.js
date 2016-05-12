const assert = require('assert');
const path = require('path');
const fs = require('fs');
const es = require('child_process').execSync;
const getBytes = require('../getBytes');

describe('reading test data file content in testData directory ', () => {
    
  it('returns expected result array [ 69, 66, 82, 65, 83 ]', (done) => {
    getBytes.getFirstBytes('test/testData', function(results) {
      console.log(results);
      assert(results);
      done();
    });
  });
    
  it('uses CLI argument as directory', () => {
    const actual = es('node app.js test/testData').toString().trim();
    const expected = 'data-1 69\ndata-2 66\ndata-3 82\ndata-4 65\ndata-5 83';
    
    assert.deepEqual(actual, expected); 
  });
  

  
});


