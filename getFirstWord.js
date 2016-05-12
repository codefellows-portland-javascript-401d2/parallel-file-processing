const fs = require('fs');

function getFirstWord(filenames, callback) {
    var results = [];
    filenames.forEach(function(file, index) {
        fs.readFile(file, 'utf8', (err, firstWordComesOut) => {
            if (err) {
                callback(err);
            }
            results[index] = firstWordComesOut.split(' ')[0];
            if (index == filenames.length - 1 && arrayIsFull(results)) {
                callback(null, results);
            }
        });
    });
}

function arrayIsFull(arr) {
    for (var a = 0; a < arr.length; a++) {
        console.log('"' + arr[a] + '"');
        if (arr[a] == '' || arr[a] == undefined) {
            return false;
        }
    }
    return true;
}

module.exports = getFirstWord;
