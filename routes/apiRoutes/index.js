const router = require("express").Router();
const { notes } = require("../../db/db");
const { validateNotes, createNewNote } = require('../../lib/notes')

router.get("/notes", (req, res) => {
  let results = notes
  res.json(results)
});

router.post('/notes', (req, res) => {
  if (!validateNotes(req.body)) {
    res.status(400).send("Please enter information for your note")
  } else {
    const note = createNewNote(req.body, notes)
    res.json(note)
  }
})

module.exports = router;
