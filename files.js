const fs = require( 'fs' );

function files (data, callback){
  var results = [];
  var count = data.length;
  data.forEach(function(file, index){
    fs.readFile(file, 'utf-8', function(err, text){
      if (err){
        callback(err);
      }
      var word = text.split(' ')[0];
      results[index]= word;
      count--;
      if (!count){
        callback(null, results);
      }
    });
  });
};

module.exports = files;
