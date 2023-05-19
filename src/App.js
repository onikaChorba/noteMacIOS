import { useState } from "react";
import uuid from "react-uuid";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    console.log("Add Note");
    const newNote = {
      id: uuid(),
      title: "Untitle Note",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };
  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };
  return (
    <div className="App" style={{ display: "flex" }}>
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
      />
      <Workspace />
    </div>
  );
}

export default App;
