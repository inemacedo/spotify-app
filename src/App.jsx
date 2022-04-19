import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logs from "./pages/Logs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </div>
  );
}

export default App;
