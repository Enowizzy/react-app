import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNews from "./admin/components/add-news/addNews";
import EditNews from "./admin/components/edit-news/editNews";
import "./App.css";
import About from "./user/components/about/About";
import Contact from "./user/components/contact/Contact";
import Error from "./user/components/error/error";
import Home from "./user/components/home/Home";
import Navbar from "./user/components/navbar/Navbar";
import News from "./user/components/news/news";
import {ToastContainer} from 'react-toastify';


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
          <Route path="/admin/create-news" element={<AddNews />}></Route>
          <Route path="/admin/edit-news" element={<EditNews />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
