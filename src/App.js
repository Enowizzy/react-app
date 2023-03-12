import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./user/components/about/About";
import Contact from "./user/components/contact/Contact";
import Home from "./user/components/home/Home";
import Navbar from "./user/components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Jeedie React Dev</h1>
      {/* <BrowserRouter>
        <Routes>
          <Route> path='/' element={<Home/>}</Route>
          <Route> path='/about' element={<About/>}</Route>
          <Route> path='/contact' element={<Contact/>}</Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
