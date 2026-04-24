import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Projects from './components/Projects'
import HowWeWork from './components/HowWeWork'
import Testimonials from './components/Testimonials'
import DemoDashboard from './components/DemoDashboard'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  const [showDemo, setShowDemo] = useState(false)
  
  useEffect(() => {
    // Disable browser scroll restore
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Always start from top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <Hero onShowDemo={() => setShowDemo(true)} />
      <TrustBar />
      <Services />
      <Projects />
      <HowWeWork />
      <Testimonials />
      <DemoDashboard show={showDemo} onClose={() => setShowDemo(false)} />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
