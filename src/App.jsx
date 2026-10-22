import { useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Kitchen from './Components/Kitchen';
import Taps from './Components/Taps';
import Blogs from './Components/Blogs';
import Blog1 from './Components/Blog1';
import Blog2 from './Components/Blog2';
import Blog3 from './Components/Blog3';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/kitchen" element={<Kitchen/>} />
      <Route path="/taps" element={<Taps/>}/>
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog1" element={<Blog1 />} />
      <Route path="/blog2" element={<Blog2 />} />
      <Route path="/blog3" element={<Blog3 />} />
    </Routes>
   
     <Footer/>
    </>
  )
}

export default App;
