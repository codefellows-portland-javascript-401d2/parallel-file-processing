const assert = require('assert');
const index = require('../index');
const getByte = require('../getByte');

const goodArray = ['file1', 'file2', 'file3'];
const badArray = ['file1', 'bad', 'bad'];
const noDataArray = ['file4'];

describe('index', () =>{

  it('provides an error message if it fails to retrieve data', done =>{
    index(badArray, function(error){
      assert.equal(error, 'failed to find a file');
      done();
    });
  });

  it('does not return an error if the file names are valid', done =>{
    index(goodArray, function(error){
      assert.equal(error, false);
      done(error);
    });
  });

  it('returns bytes in correct order', done => {
    index(goodArray, function(error, data){
      assert.equal(data[0].toString(), '1');
      assert.equal(data[1].toString(), '2');
      assert.equal(data[2].toString(), '3');
      done();
    });
  });

});

describe('getByte', () =>{

  it('successfully finds the file', done =>{
    getByte(goodArray[1], 1, function(error, data){
      assert.ok(data);
      done();
    });
  });

  it('does not give an error when filename is valid', done => {
    getByte(goodArray[1], 1, function(error){
      assert.equal(error, false);
      done();
    });
  });

  it('gives an error when the file cannot be found', done =>{
    getByte(badArray[1], 1, function(error){
      assert.ok(error);
      done();
    });
  });

  it('does not freak out if there is no data in the file', done =>{
    getByte(noDataArray[0], 1, function(error, data){
      assert.ok(data);
      done();
    });
  });

});
