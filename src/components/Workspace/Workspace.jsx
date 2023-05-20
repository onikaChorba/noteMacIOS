import React from "react";
import ReactMarkdown from "react-markdown";
import "./Workspace.scss";
export default function Workspace({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };
  if (!activeNote) return <div className="noNote">No note selected</div>;

  return (
    <div className="worcspace">
      <div className="worcspaceEdit">
        <input
          type="text"
          id="title"
          autoFocus
          className="worcspaceEdit__title"
          placeholder="Title ..."
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          className="worcspaceEdit__body"
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      <div className="worcspacePreview">
        <h1 className="worcspacePreview__title">
          <b>{activeNote.title}</b>
        </h1>
        <ReactMarkdown className="worcspacePreview__body">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
}
