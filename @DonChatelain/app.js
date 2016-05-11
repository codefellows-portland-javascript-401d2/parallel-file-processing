const path = require('path');
const fs = require('fs');
const testDirectory= path.join(__dirname, './test/testData');
const inputDirectory = process.argv[2];

// main executive
printFirstBytes(inputDirectory);

function printFirstBytes(directory = testDirectory) {
  
  if (directory === testDirectory) {
    console.log('no input given, running test directory');
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
        
        // extra credit
        console.log(allFilePaths[index], firstBytes[index]);
        
        counter++;
        
        if (counter === allFilePaths.length) {
          console.log('total:', firstBytes);
        }
      });
    });
  });
}

module.exports.printFirstBytes = printFirstBytes;