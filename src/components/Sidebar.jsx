import React from "react";

export default function Sidebar({ notes, onAddNote, onDeleteNote }) {
  return (
    <div>
      <div className="sidebarHeader">
        <h1>Notes</h1>
        <button onClick={onAddNote}>+</button>
      </div>
      <div className="sidebarNotes">
        {notes.map((note, index) => (
          <div className="sidebarNote" key={index}>
            <div className="sidebarNote__title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>X</button>
            </div>

            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
            <small className="note__meta">
              Last modified{" "}
              {new Date(note.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
