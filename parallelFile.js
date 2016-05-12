const fs = require('fs');
const path = require('path');

const getFiles = (directory, callback) => {
  fs.readdir('data', (error, files) => {
    if (error) return callback();

    const results = [];
    const filesCount = files.length;

    files.forEach((file) => {
      const filePath = path.join(directory, file);

      fs.readFile(filePath, 'utf-8', (error, fileText) => {
        if (error) return callback();

        results.push(fileText.split(' ')[0]);

        if (!--filesCount) callback(null, results);
      });
    });
  });
};
