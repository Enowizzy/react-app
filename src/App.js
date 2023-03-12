import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./user/components/about/About";
import Contact from "./user/components/contact/Contact";
import Home from "./user/components/home/Home";
import Navbar from "./user/components/navbar/Navbar";
import News from "./user/components/news/news";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
