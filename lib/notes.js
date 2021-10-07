const fs = require("fs");
const path = require("path");

function validateNotes(note) {
  if (!note.title) {
    return false;
  }
  if (!note.text) {
    return false;
  }
  return true;
}

function createNewNote(text, noteArr) {
  const note = text;
  noteArr.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: noteArr }, null, 2)
  );

  return note;
}

function deleteId(id, noteArr) {
  const result = noteArr.filter((note) => note.id === id)[0];
  return result;
}

module.exports = {
  validateNotes,
  createNewNote,
  deleteId,
};
