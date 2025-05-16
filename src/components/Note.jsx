export default function Note({ note, onEdit, onDelete }) {
    return (
      <div className="note">
        <h1>Notes</h1>
        {note.length > 0 ? (
          note.map((item) => (
            <div className="note-container" key={item.id}>
              <h2>Title: {item.title}</h2>
              <p>{item.note}</p>
              <button onClick={() => onDelete(item.id)}>Remove</button>
              <button onClick={() => onEdit(item)}>Edit</button>
            </div>
          ))
        ) : (
          <p>No notes found.</p>
        )}
      </div>
    );
  }
  