const assert = require('assert');
const getFirstWord = require('../getFirstWord');

describe('read files in folder -', () => {
    it('count files', done => {
        const filesGoIn = ['filesGoHere/tooReal.txt', 'filesGoHere/alien.txt', 'filesGoHere/batman.txt', 'filesGoHere/cat.txt', 'filesGoHere/dessert.txt', 'filesGoHere/erb.txt', 'filesGoHere/force.txt'];
        const expected = ['This', 'Ancient', 'You', 'Catnipsum', 'Cupcake', 'Few', 'I\'m'];

        getFirstWord(filesGoIn, (err, resultOutput) => {
            if (err) return done(err);
            assert.deepEqual(resultOutput, expected);
            done();
        });
    });
});
