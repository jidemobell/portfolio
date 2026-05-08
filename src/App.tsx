import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Research from './components/Research';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Experience />
      <Research />
      <Contact />
      <footer className="site-footer">
        <div className="container site-footer-content">
          <span className="site-footer-copy">Selected work and ongoing explorations</span>
          <a
            className="site-footer-link"
            href="https://javamasteringhouse.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning Lab
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
