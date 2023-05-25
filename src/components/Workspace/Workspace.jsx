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
    <div className="workspace">
      <div className="workspaceEdit">
        <input
          type="text"
          id="title"
          autoFocus
          className="workspaceEdit__title"
          placeholder="Title ..."
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          className="workspaceEdit__body"
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      <div className="workspacePreview">
        <h1 className="workspacePreview__title">
          <b>{activeNote.title}</b>
        </h1>
        <ReactMarkdown className="workspacePreview__body">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
}
