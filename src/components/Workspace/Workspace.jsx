import React from "react";
import "./Workspace.scss";
export default function Workspace() {
  return (
    <div className="worcspace">
      <div className="worcspaceEdit">
        <input
          type="text"
          id="title"
          autoFocus
          className="worcspaceEdit__title"
          placeholder="Title ..."
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          className="worcspaceEdit__body"
        />
      </div>
      <div className="worcspacePreview">
        <h1>Title</h1>
        <div> Note preview</div>
      </div>
    </div>
  );
}
