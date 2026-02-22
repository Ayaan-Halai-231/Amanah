import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ChildCourses from './components/courses/ChildCourses';
import YoungCourses from './components/courses/YoungCourses';
import Enroll from './components/courses/Enroll';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Blogs from './pages/Blog';
import Testimonials from './pages/Testimonials';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {

  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <Router>
      <div className="page-container">
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />}/>
            <Route path="/childcourses" element={<ChildCourses/>}/>
            <Route path="/youngcourses" element={<YoungCourses/>}/>
            <Route path="/enroll/:id" element={<Enroll/>}/>
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
          <WhatsAppButton />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;