var fs = require('fs');
var colors = require('colors');

fs.readdir('./', function(err, files){
    if (err) throw err;
    fs.writeFile('tekst.txt', files, function(err) {
        if (err) throw err;
        console.log('Utworzono nowy plik z zawartością katalogu!'.red); 
    });
});