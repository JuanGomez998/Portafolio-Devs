import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
    useScrollReveal();

    return (
        <div className="app">
            <CustomCursor />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Services />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}

export default App;
