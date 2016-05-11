const fs = require('fs');
const path = require('path');

//list of file names in files: beer.txt; cats.txt; yoda.txt;

var fileContent =  function (file, callback){
  var pathName = path.join(__dirname, file);

  fs.readFile(pathName, (err, data) => {
    if (err) return callback(err);
    callback(null, data.toString());
  });
};

var fileChar = function(content, callback){
  var char = content.slice(0,1);
  callback(null, char);
};

exports.fileContent = fileContent;
exports.fileChar = fileChar;
