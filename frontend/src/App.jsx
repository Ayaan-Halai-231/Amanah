import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import FreeTrailForm from './components/FreeTrailForm';
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

// Admin pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import ManageBlogs from './pages/admin/ManageBlogs';
import ManageCourses from './pages/admin/ManageCourses';
import ManageTestimonials from './pages/admin/ManageTestimonials';
import ManageSlider from './pages/admin/ManageSlider';
import ViewContacts from './pages/admin/ViewContacts';
import ViewEnrollments from './pages/admin/ViewEnrollments';
import ManageAssets from './pages/admin/ManageAssets';

// Wrapper to conditionally show Navbar/Footer
function Layout({ children }) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div className={isAdmin ? "" : "page-container"}>
      {!isAdmin && <Navbar />}
      <div>
        {children}
        {!isAdmin && <WhatsAppButton />}
      </div>
      {!isAdmin && <Footer />}
    </div>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/childcourses" element={<ChildCourses />} />
          <Route path="/youngcourses" element={<YoungCourses />} />
          <Route path="/enroll/:id" element={<Enroll />} />
          <Route path="/free-trial" element={<FreeTrailForm />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="blogs" element={<ManageBlogs />} />
            <Route path="courses" element={<ManageCourses />} />
            <Route path="testimonials" element={<ManageTestimonials />} />
            <Route path="slider" element={<ManageSlider />} />
            <Route path="contacts" element={<ViewContacts />} />
            <Route path="enrollments" element={<ViewEnrollments />} />
            <Route path="assets" element={<ManageAssets />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;