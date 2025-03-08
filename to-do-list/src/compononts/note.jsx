import React, { useState } from "react";

const NoteApp = () => {

    const [notes, setNotes] = useState([])

    const [note, setnote] = useState("")


    const AddNote = (e) => {
        e.preventDefault()

        if (!note.trim()) return;
        setNotes([...notes, note])
        setnote("")
    }
    const removeTask = (index) => {
        setNotes(notes.filter((_, i) => i !== index))
    }

    return (
        <div>
            <div>
                <h1>Create Note</h1>
                <form onSubmit={AddNote}>
                    <input type="text" onChange={(e) => setnote(e.target.value)} placeholder="Enter your note" />
                    <button type="submit">Add Note</button>
                </form>
                <ul>
                    {notes.map((note, index) => (
                        <li key={index}>{note} <button onClick={() => removeTask(index)}>Delete</button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NoteApp;