const assert = require('assert');
const path = require('path');
const getFiles = require('../parallelFile');

describe('get files in directory', _ => {
  it('should return an array of each file basename with first word in the file', done => {
    const directory = path.join(__dirname, '../files');

    getFiles(directory, (error, files) => {
      if (error) return done(error);

      assert.ok(files.indexOf('file-01.txt Bacon') >= 0, 'file-01.txt with the first word "Bacon" does not exist');
      assert.ok(files.indexOf('file-02.txt Lorem') >= 0, 'file-02.txt with the first word "Lorem" does not exist');
      assert.ok(files.indexOf('file-03.html <!DOCTYPE') >= 0, 'file-03.html with the first word "<!DOCTYPE" does not exist');
      assert.ok(files.indexOf('file-04.html <!DOCTYPE') >= 0, 'file-04.html with the first word "<!DOCTYPE" does not exist');
      assert.ok(files.indexOf('file-05.md #') >= 0, 'file-05.md with the first word "#" does not exist');
      assert.ok(files.indexOf('file-06.md #') >= 0, 'file-06.md with the first word "#" does not exist');

      done();
    });
  });

  it('should not return an array of each file basename with first word in the file', done => {
    const directory = path.join(__dirname, '../data');

    getFiles(directory, (error) => {
      assert.ifError(error.Error);

      done();
    });
  });
});
