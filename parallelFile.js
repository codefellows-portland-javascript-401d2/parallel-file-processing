const fs = require('fs');
const path = require('path');

const getFiles = (directory = 'files', callback) => {
  fs.readdir(directory, (error, files) => {
    if (error) return callback(error);

    const fileResults = [];
    var filesCount = files.length;

    const readFile = filePath => {
      fs.readFile(filePath, 'utf-8', (error, fileContent) => {
        if (error) return callback();

        const fileBasename = path.basename(filePath);
        const fileFirstWord = fileContent.split(' ')[0];

        fileResults.push(`${fileBasename} ${fileFirstWord}`);

        if (!--filesCount) callback(null, fileResults);
      });
    };

    files.forEach(file => {
      const filePath = path.join(directory, file);

      readFile(filePath);
    });
  });
};

module.exports = getFiles;
