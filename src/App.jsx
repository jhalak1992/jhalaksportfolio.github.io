import React from 'react';
import Navigation from './components/Navigation';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to My Portfolio</h1>
            <p className="mt-4 text-xl text-gray-600">Frontend Developer & UI/UX Enthusiast</p>
          </div>
        </section>

        <section id="skills" className="min-h-screen bg-white">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
            <p className="mt-4 text-gray-600">Showcase of my work</p>
          </div>
        </section>

        <section id="connect" className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Connect</h2>
            <p className="mt-4 text-gray-600">Let's get in touch</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
