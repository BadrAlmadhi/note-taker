const router = require('express').Router();
//const fs = require('fs');
const {readFromFile, writeToFile, readAndAppend} = require('../db/utils');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)) )
});

router.post("/notes", (req, res) => {
    const { title, text } = req.body;
    const newNote = { title, text, id: uuidv4() };
    return res.json(readAndAppend(newNote, "./db/db.json"));
  });

  router.delete("/notes/:id", (req, res) => {
    fetch(`/api/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  });
 

module.exports = router;