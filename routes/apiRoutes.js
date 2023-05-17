const router = require('express').Router();
//const fs = require('fs');
const {readFromFile, writeToFile, readAndAppend} = require('../db/utils');


router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)) )
});

router.post('/notes', (req,res)=>{
    writeToFile('./db/db.json').then((data) => res.json(JSON.parse(data)) )
});

router.delete('/notes', (req,res)=>{
readAndAppend('./db/db.json').then((data) => res.json(JSON.parse(data)) )
});
module.exports = router;