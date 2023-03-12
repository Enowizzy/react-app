import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./user/components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Jeedie React Dev</h1>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
