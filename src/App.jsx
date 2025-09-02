import React from 'react';
import Navigation from './components/Navigation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-dark text-text-dark">
      <Navigation />
      
      <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-accent-dark shadow-xl">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/C5603AQHJTMGvtg-qAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1654641103560?e=1759968000&v=beta&t=c6ZC2pPGH2u6aaZBMVcG8mcTpea5zZcVaoTs8r9bR4o" 
                    alt="Jhalak Maheshwari"
                    className="w-full h-full object-cover object-center transform scale-105 hover:scale-110 transition-transform duration-300"
                    style={{
                      imageRendering: 'crisp-edges',
                      WebkitBackfaceVisibility: 'hidden',
                      backfaceVisibility: 'hidden'
                    }}
                  />
                </div>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-accent-dark to-purple-500 opacity-20 blur-xl -z-10"></div>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-text-dark bg-gradient-to-r from-accent-dark to-purple-500 bg-clip-text text-transparent">
              Jhalak Maheshwari
            </h1>
            <p className="mt-4 text-xl text-secondary-dark">Engineering clean, reusable components for modern web platforms. 
                Frontend Developer & UI/UX Enthusiast</p>
            <p className="mt-4 text-ssm text-secondary-dark leading-relaxed max-w-3xl mx-auto">Results Oriented software developer with 8 years of experience building intuitive, scalable, and reusable user interfaces. With a Master's in Computer Science from Northeastern University, I've worked on products that reach millions of users—from creating reusable UI widgets at Intuit powering TurboTax and QuickBooks, to building AI-driven conversational commerce experiences at Salesforce. My core expertise lies in JavaScript, React, Node.js, and Lightning Web Components, and I'm passionate about designing clean, performant components that make digital interactions seamless and enjoyable.</p>
          </div>
        </section>

        <section id="skills" className="min-h-screen bg-primary-dark">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen bg-background-dark">
          <Projects />
        </section>

        <section id="connect" className="min-h-screen bg-primary-dark">
          <Connect />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
