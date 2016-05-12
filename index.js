(function(module) {
    var files = {};

    const fs = require('fs');

    fs.readFile(files, 'utf8', (err,file) => {
        console.log(err,file);  // callback
    });

    module.files = files;
})(window);
