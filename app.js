const para = require('./parallel');

para.getFirstCharArr(['beer.txt', 'cats.txt', 'yoda.txt'], function(err, results){
  console.log(results);
});
