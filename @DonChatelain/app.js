const fs = require('fs');
const byteArray = [];

fs.readFile('./rawData.txt', (err, buffer) => {
  if (err) throw err;
  buffer.forEach(function(byte) {
    byteArray.push(byte);
  });
  
  console.log(byteArray);
});