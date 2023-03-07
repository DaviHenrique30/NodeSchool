const Modular = require('./Modular');
const directory = process.argv[2];
const extension = process.argv[3];

Modular(directory, extension, (err, filteredList) => {
    if (err) return console.log(err);
    filteredList.forEach(file => {
        console.log(file);
    });
});