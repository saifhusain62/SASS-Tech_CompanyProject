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
import ScrollToTop from './components/ScrollTop';



function App() {
  return (
    <Router>
      {/* Main wrapper with flex column and min-height screen */}
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        <ScrollToTop/>
        {/* Navbar */}
        <Navbar />
        
        {/* Main content area - flex-grow pushes footer to bottom */}
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/graphics-design" element={<GraphicsDesign />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/video-editing" element={<VideoEditing />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer - now inside the flex container */}
        
        
      </div>
    </Router>
  );
}

export default App;