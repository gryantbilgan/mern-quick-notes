const Note = require('../../models/note');

module.exports = {
    getAllNotes,
    createNote
}

async function createNote(req, res) {
    console.log('Request Body:', req.body)
    try {
        const note = await Note.create({text: req.body.text})
        res.status(201).json(note)
    } catch (err) {
        res.status(500).json(err)
    }
}

async function getAllNotes(req, res) {
    const notes = await Note.find({});
    if (notes) {
        res.status(200).json(notes)
    } else {
        res.status(401).json(error)
    }
}

