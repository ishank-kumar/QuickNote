export default function Note({ note, setNote, onEdit }) {
    function HandleClick(index) {
      const updatedNotes = note.filter((_, i) => i !== index);
      setNote(updatedNotes);
    }
  
    return (
      <div className="note">
        <h1>Notes</h1>
        {note.length > 0 ? (
          note.map((item, index) => (
            <div className="note-container" key={index}>
              <h2>Title: {item.title}</h2>
              <p>{item.note}</p>
              <button onClick={() => HandleClick(index)}>Remove</button>
              <button onClick={() => onEdit(index)}>Edit</button>
            </div>
          ))
        ) : (
          <p>No notes found.</p>
        )}
      </div>
    );
  }
  