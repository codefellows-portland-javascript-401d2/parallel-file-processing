const path = require('path');
const fs = require('fs');

// Is given a single file name
// With a callback, returns either an error or the first byte of file data

function getByte(fileName, index, callback){
  const directory = 'data';

  fs.readdir(directory, (error, files) => {

    if (error) {
      callback('failed to find directory');
      return;
    }

    if (files.indexOf(fileName) < 0) {
      callback(`failed to find file: ${fileName}`);
      return;
    }

    files.forEach(function(file){

      if (file === fileName){
        var filePath = path.join(directory, file);
        fs.readFile(filePath, (error, filetext) =>{
          if (filetext == ''){
            callback(false, ' empty file');
          }else{
            var bufferVar = Buffer.alloc(1, filetext, 'utf8');
            callback(false, bufferVar, index);
          }
        });
      }
    });
  });
}

module.exports = getByte;
