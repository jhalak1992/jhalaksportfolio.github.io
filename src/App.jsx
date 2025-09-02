import React from 'react';
import Navigation from './components/Navigation';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-background-dark text-text-dark">
      <Navigation />
      
      <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-text-dark bg-gradient-to-r from-accent-dark to-purple-500 bg-clip-text text-transparent">
              Jhalak Maheshwari
            </h1>
            <p className="mt-4 text-xl text-secondary-dark">Engineering clean, reusable components for modern web platforms. 
                Frontend Developer & UI/UX Enthusiast</p>
            <p className="mt-4 text-ssm text-secondary-dark leading-relaxed max-w-3xl mx-auto">Results Oriented software developer with 8 years of experience building intuitive, scalable, and reusable user interfaces. With a Master’s in Computer Science from Northeastern University, I’ve worked on products that reach millions of users—from creating reusable UI widgets at Intuit powering TurboTax and QuickBooks, to building AI-driven conversational commerce experiences at Salesforce. My core expertise lies in JavaScript, React, Node.js, and Lightning Web Components, and I’m passionate about designing clean, performant components that make digital interactions seamless and enjoyable.</p>
          </div>
        </section>

        <section id="skills" className="min-h-screen bg-primary-dark">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center bg-background-dark">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-dark">Work and Projects</h2>
            <p className="mt-4 text-secondary-dark">Showcase of my work and projects</p>
          </div>
        </section>

        <section id="connect" className="min-h-screen flex items-center justify-center bg-primary-dark">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-dark">Connect</h2>
            <p className="mt-4 text-secondary-dark">Let's get in touch</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
