import React from "react";
import ReactMarkdown from "react-markdown";
import "./Sidebar.scss";

export default function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <h1 className="sidebarHeader__title">Notes</h1>
        <button onClick={onAddNote} className="sidebarHeader__button">
          <p>+</p>
        </button>
      </div>
      <div className="sidebarNotes">
        {sortedNotes.map((note, index) => (
          <div
            className={`sidebarNote ${note.id === activeNote && "active"}`}
            key={index}
            onClick={() => setActiveNote(note.id)}
          >
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

            <ReactMarkdown className="sidebarNote__body">
              {note.body && note.body.substr(0, 50) + "..."}
            </ReactMarkdown>
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
