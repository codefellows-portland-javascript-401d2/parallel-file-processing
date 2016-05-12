const getFiles = require('./parallelFile');

getFiles(process.argv[2], (error, files) => {
  files.forEach(file => {
    console.log(file);    
  });
});
