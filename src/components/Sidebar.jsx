import React from "react";

export default function Sidebar() {
  return (
    <div>
      <div className="sidebarHeader">
        <h1>Notes</h1>
        <button>+</button>
      </div>
      <div className="sidebarNotes">
        <div className="sidebarNote">
          <div className="sidebarNote__title">
            <strong>Title</strong>
            <button>X</button>
          </div>

          <p>Note preview</p>
          <small className="note__meta">Last modified [data]</small>
        </div>
      </div>
    </div>
  );
}
