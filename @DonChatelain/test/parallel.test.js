const assert = require('assert');
const path = require('path');
const fs = require('fs');
const es = require('child_process').execSync;
const getBytes = require('../getBytes');

describe('reading test data file content in testData directory ', () => {
  
  const directory = path.join(__dirname, './testData');
    
  it.skip('prints first letter (E) in first test data file', (done) => {
    fs.readdir(directory, (err, filePathData) => {
      if (err) throw err;
      const firstFilePath = path.join(directory, filePathData[0]);
      
      fs.readFile(firstFilePath, 'utf8', (err, content) => {
        if (err) throw err;
        
        assert.equal(content[0], 'E');
        done();
      });
    });
  });
  
  it('orders first bytes- expecting [69, 66, 82, 65, 83]', (done) => {
    // Expected bytes translate from ['E', 'B', 'R', 'A', 'S']
    const expected = [69, 66, 82, 65, 83];
    
    fs.readdir(directory, (err, allFilePaths) => {
      if (err) throw err;
      const firstBytes = [];
      var counter = 0;
      
      allFilePaths.forEach(function(singlePath, index) {
        const fullPath = path.join(directory, singlePath);
        
        fs.readFile(fullPath, (err, content) => {
          if (err) throw err;
          // assign first byte of content by correct order
          firstBytes[index] = content[0];
          counter++;
          
          // when all bytes are collected
          if (counter === allFilePaths.length) { 
            assert.deepEqual(firstBytes, expected);
            done();
          }
        });
      });
    });
  });
  
  it('uses CLI argument as directory', () => {
    const actual = es('node app.js test/testData').toString().trim();
    const expected = '[ 69, 66, 82, 65, 83 ]\ndata-1 69\ndata-2 66\ndata-3 82\ndata-4 65\ndata-5 83';
    
    assert.deepEqual(actual, expected); 
  });
  
  it('returns result from other file', (done) => {
    // getBytes.getFirstBytes('test/testData', console.log);
    getBytes.getFirstBytes('test/testData', function(results) {
      console.log(results);
      assert(results);
      done();
    });

  });
  
}); //================  End describe() ========


