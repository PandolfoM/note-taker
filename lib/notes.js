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
    JSON.stringify({ noteArr }, null, 2)
  );

  return note;
}

function deleteId(id, noteArr) {
  const result = noteArr.findIndex((noteArr) => noteArr.id === id);
  const savedNotes = noteArr.filter((note) => note.id !== id);
  console.log(savedNotes);
  fs.writeFileSync("db/db.json", JSON.stringify(savedNotes));
  //write savedNotes to the db.json file now like you are in the other function
  return result;
}

module.exports = {
  validateNotes,
  createNewNote,
  deleteId,
};
