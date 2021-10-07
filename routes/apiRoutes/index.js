const router = require("express").Router();
const { notes } = require("../../db/db");
const { validateNotes, createNewNote, deleteId } = require("../../lib/notes");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});

router.delete("/notes/:id", (req, res) => {
  const result = deleteId(req.params.id, notes);
  const deleteItem = notes.splice(result, 1);
  console.log(result);
  console.log(deleteItem);
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();

  if (!validateNotes(req.body)) {
    res.status(400).send("Please enter information for your note");
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

module.exports = router;
