var assert = require( 'assert' );
var files = require( '../files' );

var input = ['./my-files/Frodo.txt', './my-files/Merry.txt', './my-files/Pippin.txt', './my-files/Sam.txt'];
var expected = ['Frodo', 'Merry', 'Pippin', 'Sam'];

describe ( 'takes the first word out of my files', () => {

  it ('correctly displays the first words', done => {

    files(input, (err, actual) => {
      if (err) return done(err);
      assert.deepEqual(actual, expected);
      done();
    });
  });
});
