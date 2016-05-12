// const fs = require('fs');
// const path = require('path');
// const assert = require('assert');
const getFirstWord = require('getFirstWord');





describe('read files in folder -', () => {
    it('count files', done => {
        console.log('expected', expected);
        console.log('firstWord', firstWord);

        done();
    });
});

// function getAllFiles(directory, callback) {
//     fs.readdir(directory,(err,files) => {
//         if(err) return callback(err);
//
//         const results = [];
//         var count = files.length;
//
//         files.forEach(file => {
//             const filepath = path.join(directory, file);
//
//             fs.readFile(filepath, 'utf-8', (err,filetext) => {
//                 if(err) return callback(err);
//                 results.push(filetext);
//
//                 if(!--count) {
//                     callback(null, results);
//                 }
//             });
//         });
//     });
// }

// function getAllFilesFlatten(directory, callback) {
//     fs.readdir(directory,(err,files) => {
//         if (err) return callback(err);
//
//         files.forEach(file => {
//             const filepath = path.join(directory,file);
//             readFile(filepath);
//         });
//
//         const results = [];
//         var count = files.length;
//
//         function readFile(filepath) {
//             fs.readFile(filepath, 'utf-8', (err,filetext) => {
//                 if (err) return callback(err);
//                 results.push(filetext);
//
//                 if(!--count) {
//                     callback(null, results);
//                 }
//             });
//         }
//     });
// }

// const sander = {};

// function getAllFilesPromise(directory) {
//     return sander.readdir(directory).then(files => {
//         return Promise.all(files.map(file => {
//             const filepath = path.join(directory,file);
//             return sander.readFile(filepath,'utf-8');
//         }));
//     });
// }
