import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <Sidebar />
      <Workspace />
    </div>
  );
}

export default App;
