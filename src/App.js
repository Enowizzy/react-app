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
import ViewNews from "./admin/components/view-news/ViewNews";
import Register from "./user/components/auth/register";
import Login from "./user/components/auth/login";


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
          <Route path="/admin/edit-news/:code" element={<EditNews />}></Route>
          <Route path="/admin/view-news/:code" element={<ViewNews />}></Route>
          <Route path="/user/register" element={<Register />}></Route>
          <Route path="/user/login" element={<Login />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
