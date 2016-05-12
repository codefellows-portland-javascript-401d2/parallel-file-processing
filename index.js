(function(module) {
    var files = {};

    const fs = require('fs');
    // const path = require('path');

    fs.readFile(files, 'utf8', (err,file) => {
        // doing things here, really cool things
        console.log(err,file);  // callback
    });

    module.files = files;
})(window);
