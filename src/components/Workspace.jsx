import React from "react";

export default function Workspace() {
  return (
    <div className="worcspace">
      <div className="worcspaceEdit">
        <input type="text" id="title" autoFocus />
        <textarea id="body" placeholder="Write your note here..." />
      </div>
      <div className="worcspacePreview">
        <h1>Title</h1>
        <div> Note preview</div>
      </div>
    </div>
  );
}
