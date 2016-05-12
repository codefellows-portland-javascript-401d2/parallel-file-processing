const path = require('path');
const fs = require('fs');
const getBytes = require('./getBytes');
var inputDirectory;

if (process.argv[2]) {
  inputDirectory = path.join(__dirname, process.argv[2]);
} else {
  inputDirectory = path.join(__dirname, 'data');
}

getBytes.getFirstBytes(inputDirectory, function(results) {
  bonusPrint(inputDirectory, results);
});

function simplePrint(data) {
  console.log(data);
}

function bonusPrint(directory, data) {
  fs.readdir(directory, (err, fileNames) => {
    if (err) throw err;

    fileNames.forEach(function(file, index) {
      console.log(file, data[index]);
      
    });
  });
}
