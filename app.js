console.log('starting app');
// nodejs.org/api

const fs = require('fs');
const _ = require('lodash');
const argv = require('yargs').argv;

const notes = require('./notes.js');

var command = argv._[0];

console.log('Command:', command);

if (command === 'add') {
    return (notes.addNote(argv.title, argv.body))? console.log('Added succesfully!'): console.log('Note was not added!');
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title, argv.body);
} else {
    console.log('Command not found');
}
