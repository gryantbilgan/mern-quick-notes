const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

router.get('/', notesCtrl.getAllNotes);

router.post('/', notesCtrl.createNote);

module.exports = router;