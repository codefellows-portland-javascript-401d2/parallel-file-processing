const getByte = require('./getByte');

// Is given a list of file names
// Returns either an error or an array with bytes in correct order

function byteGetter(fileNames, callback){

  const arrayOfbytes = [];
  var sendError = false;

  fileNames.forEach(function(file, index){

    getByte(file, index, function(error, data, byteIndex){
      if (error) sendError = true;
      insertWithIndex(arrayOfbytes, (error || data), byteIndex);

      if (arrayOfbytes.length === fileNames.length){
        // Has all the files, now callback to the sender
        if (sendError){
          callback('failed to find a file');
        }else{
          callback(false, arrayOfbytes);
        }
      }

    });
  });
}

function insertWithIndex(array, object, index){
  const arrayLength = array.length;
  if (index > arrayLength) index = arrayLength;
  array.splice(index, 0, object);
}

module.exports = byteGetter;
