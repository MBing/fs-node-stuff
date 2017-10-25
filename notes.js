console.log('notes loaded');

const fs = require('fs');

var fetchNotes = () => {
    if (fs.existsSync('notes-data.json')) {
        var noteString = fs.readFileSync('notes-data.json');
        return notes = JSON.parse(noteString);
    }
    return [];
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };    

    var duplicateNotes = notes.filter(note => note.title === title);
    
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting note:', title);
};

var removeNote = (title, body) => {
    console.log('Removing note', title, body);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};