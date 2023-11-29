import { useState } from "react"
import * as notesAPI from '../../utilities/notes-api'


export default function NewNote() {
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote({...newNote, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await notesAPI.createNote({ text: newNote.text })
      setNewNote({text: ''})
    } catch (error) {
      console.log('Error creating note:', error)
    }
  }


  return (
    <>
      <hr />
      <h1>New Note</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
      <input 
        type="text"
        name="text"
        value={newNote.text || ''}
        onChange={handleChange}
        placeholder="Enter Your New Note" />
      <button type="submit">ADD NOTE</button>
      </form>
    </>
  );
}