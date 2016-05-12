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

var getFirstCharArr = function(arr, callback){
  var chars = [];
  var count = arr.length;

  arr.forEach(function(file){
    fileContent(file, (err, contents) => {

      fileChar(contents, (err, char) => {
        chars.push(char);
        if(!--count){
          callback(null, chars);
        }
      });
    });
  });
};
//above function works but things aren't being pushed to chars in input order
exports.fileContent = fileContent;
exports.fileChar = fileChar;
exports.getFirstCharArr = getFirstCharArr;
