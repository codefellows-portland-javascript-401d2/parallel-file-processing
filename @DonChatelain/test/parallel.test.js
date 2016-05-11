const assert = require('assert');
const path = require('path');
const fs = require('fs');
const es = require('child_process').execSync;

describe('reading test data file content in testData directory ', () => {
  
  const directory = path.join(__dirname, './testData');
  
  it.skip('finds FIVE files in testData directory', (done) => {
    fs.readdir(directory, (err, filePathData) => {
      if (err) throw err;
      
      console.log('testData files:', filePathData);
      assert(filePathData.length === 5);
      done();
    });
  });
  
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
  
  it('orders collected first bytes (5 total) of each data file', (done) => {
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
  
}); //================  End describe() ========


