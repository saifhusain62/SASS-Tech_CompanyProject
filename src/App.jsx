// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navber';
import Home from './pages/Home';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import GraphicsDesign from './pages/GraphicsDesign';
import DigitalMarketing from './pages/DigitalMarketing';
import VideoEditing from './pages/VideoEditing';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <Navbar />
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/graphics-design" element={<GraphicsDesign />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/video-editing" element={<VideoEditing />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;