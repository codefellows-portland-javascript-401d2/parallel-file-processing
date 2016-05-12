(function(module) {
    var files = {};

    // const path = require('path');
    const fs = require('fs');

    function getFirstWord() {
        // const folder = 'filesGoHere';    // name of folder we're looking in for files
        const files = ['filesGoHere/alien.txt',
                        'filesGoHere/batman.txt',
                        'filesGoHere/cat.txt',
                        'filesGoHere/dessert.txt',
                        'filesGoHere/erb.txt',
                        'filesGoHere/force.txt',
                        'filesGoHere/tooReal.txt'];
        const expected = ['You',
                        'Ancient',
                        'Catnipsum',
                        'Cupcake',
                        'Few',
                        'I\'m',
                        'This'];
        var firstWord = files.map(function(filepath) {
            fs.readFile(filepath, 'utf8', (err,firstWordComesOut) => {
                if (err) throw err;
                console.log('First Word of "' + filepath.split('/')[1] + '" file:     ', firstWordComesOut.split(' ')[0]);
            });
        });
        console.log('expected', expected);
        console.log('firstWord', firstWord);
    }
    console.log(getFirstWord);

    // var getResults = filesGoIn.map(function(filepath) {
    //     fs.readFile(filepath, 'utf8',(err,firstWordComesOut)=> {
    //         if (err) throw err;
    //         console.log('First Word of "' + filepath.split('/')[1] + '" file:     ', firstWordComesOut.split(' ')[0]);
    //         return firstWordComesOut.split(' ')[0];  // files(first word of each)ComeOut
    //     });
    // });



    module.getFirstWord = getFirstWord;
})(window);
