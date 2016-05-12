const fs = require('fs');
// const path = require('path');
// const assert = require('assert');






describe('read files in folder -', () => {
    it('count files', done => {
        const filesGoIn = ['filesGoHere/alien.txt', 'filesGoHere/batman.txt', 'filesGoHere/cat.txt', 'filesGoHere/dessert.txt', 'filesGoHere/erb.txt', 'filesGoHere/force.txt', 'filesGoHere/tooReal.txt'];
        const expected = ['You', 'Ancient', 'Catnipsum', 'Cupcake', 'Few', 'I\'m', 'This'];
        var getResults = filesGoIn.map(function(filepath) {
            fs.readFile(filepath, 'utf8',(err,firstWordComesOut)=> {
                if (err) throw err;
                console.log('First Word of "' + filepath.split('/')[1] + '" file:     ', firstWordComesOut.split(' ')[0]);
                return firstWordComesOut.split(' ')[0];  // files(first word of each)ComeOut
            });
        });
        console.log('expected', expected);
        console.log('getResults', getResults);
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
