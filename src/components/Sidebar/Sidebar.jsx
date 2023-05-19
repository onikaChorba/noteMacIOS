import React from "react";
import "./Sidebar.scss";
export default function Sidebar({ notes, onAddNote, onDeleteNote }) {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <h1 className="sidebarHeader__title">Notes</h1>
        <button onClick={onAddNote} className="sidebarHeader__button">
          <p>+</p>
        </button>
      </div>
      <div className="sidebarNotes">
        {notes.map((note, index) => (
          <div className="sidebarNote" key={index}>
            <div className="sidebarNote__title">
              <div>
                <strong className="noteTitle">{note.title}</strong>
              </div>
              <button
                onClick={() => onDeleteNote(note.id)}
                className="sidebarHeader__button noteDelete"
              >
                +
              </button>
            </div>

            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
            <small className="noteMeta">
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
