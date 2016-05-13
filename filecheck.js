const fs = require('fs');

// accepts a array of files scan and a callback
function filecheck(files, callback) {
  const results = [];
  var count = files.length;
  files.forEach( (file, index) => {
    fs.readFile(file, 'utf-8', (err, filetext) => {
      if (err) return callback(err);
      results[index]=filetext.split(' ')[0];
      if (!--count) {
        callback(null, results, files);
      }
    });
  });
}

module.exports = filecheck;
