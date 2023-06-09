import Tutorial from "./Tutorial";
import tutorials from "./tutorials";

function App() {
  return (
    <div className="container">
      <Tutorial {...tutorials[0]} />
    </div>
  );
}

export default App;
