const path = require('path');
const fs = require('fs');
const testDirectory= path.join(__dirname, './test/testData');

function getFirstBytes(directory, callback) {
  
  if (!directory) {
    directory = testDirectory;
  }
  fs.readdir(directory, (err, allFilePaths) => {
    if (err) throw err;
    const firstBytes = [];
    var counter = 0;
    
    allFilePaths.forEach((singlePath, index) => {
      const fullPath = path.join(directory, singlePath);

      fs.readFile(fullPath, (err, content) => {
        if (err) throw err;
        
        firstBytes[index] = content[0];        
        counter++;
        
        if (counter === allFilePaths.length) {
          callback(firstBytes);
        }
      });
    });
  });
}

module.exports.getFirstBytes = getFirstBytes;