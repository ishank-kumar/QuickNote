import React, { useState, useEffect, useRef } from "react";
import "./Form.css";
import Note from "./Note";

export default function Form() {
  const [note, setNote] = useState([]);
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const didMountRef = useRef(false);

  // Load once on first render
  useEffect(() => {
    const storedNotes = localStorage.getItem("myNotes");
    if (storedNotes) {
      setNote(JSON.parse(storedNotes));
    }
  }, []);

  // Save to localStorage whenever notes change — after initial mount
  useEffect(() => {
    if (didMountRef.current) {
      localStorage.setItem("myNotes", JSON.stringify(note));
    } else {
      didMountRef.current = true;
    }
  }, [note]);

  function HandleSubmit(event) {
    event.preventDefault();
    const newNote = { title, note: noteText };

    if (editIndex !== null) {
      const updatedNotes = [...note];
      updatedNotes[editIndex] = newNote;
      setNote(updatedNotes);
      setEditIndex(null);
    } else {
      setNote((prev) => [...prev, newNote]);
    }

    setTitle("");
    setNoteText("");
  }

  function handleEdit(index) {
    const selected = note[index];
    setTitle(selected.title);
    setNoteText(selected.note);
    setEditIndex(index);
  }

  const filteredNotes = note.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <div className="container">
      <div className="form">
        <form className="form-container" onSubmit={HandleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Write your note here..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          />
          <button type="submit">
            {editIndex !== null ? "Update Note" : "Save Note"}
          </button>
          <input
          type="text"
          className="search-input"
          placeholder="Search by Title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        </form>
      </div>

      <Note note={filteredNotes} setNote={setNote} onEdit={handleEdit} />
      </div>
    </>
  );
}
