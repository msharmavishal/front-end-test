import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./containers/home"
import Login from "./containers/login"

function App() {
  return (<div style={{padding: 24}} >
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
  );
}

export default App;
