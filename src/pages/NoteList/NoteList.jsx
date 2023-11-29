import { useState, useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api';


export default function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);
  
  async function getNotes() {
    const getNotes = await notesAPI.getAllNotes();
    setNotes(getNotes);
  }
  
  return (
    <>
      <hr />
      <h1>Note Page</h1>
      {notes.length === 0 ? (
        <p>No Notes Yet!</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note._id}>
              {note.text} - {new Date(note.createdAt).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
