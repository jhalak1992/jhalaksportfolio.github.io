import React from 'react';
import { BriefcaseIcon, CodeBracketIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ConnectCard = ({ title, icon: Icon, points, buttonText }) => {
  // Email obfuscation - split into parts
  const emailParts = ['maheshwari', 'jhalak', 'gmail.com'];
  
  const handleConnect = (e) => {
    e.preventDefault();
    // Reconstruct email with @ and . to avoid easy scraping
    const email = `${emailParts[1]}.${emailParts[0]}@${emailParts[2]}`;
    window.location.href = `mailto:${email}?subject=Connect: ${title}`;
  };

  return (
    <div className="bg-card-dark p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-500/50 group">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-blue-500" />
        </div>
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          {title}
        </h3>
      </div>
      <ul className="space-y-3 mb-8">
        {points.map((point, index) => (
          <li key={index} className="flex items-start text-secondary-dark group-hover:text-text-dark transition-colors duration-300">
            <span className="mr-2 text-blue-500">•</span>
            {point}
          </li>
        ))}
      </ul>
      <button
        onClick={handleConnect}
        className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group-hover:translate-y-0"
      >
        <EnvelopeIcon className="w-5 h-5 mr-2" />
        {buttonText}
      </button>
    </div>
  );
};

const Connect = () => {
  const opportunities = [
    {
      title: "For Recruiters",
      icon: BriefcaseIcon,
      points: [
        "8+ years of web app development experience",
        "Expertise in React, Redux, Salesforce LWC, Node.js, Java & AI",
        "Proven track record of leading engineering teams",
        "Available for full-time opportunities"
      ]
    },
    {
      title: "For Clients",
      icon: CodeBracketIcon,
      points: [
        "Freelance web application development",
        "Custom solutions from concept to deployment",
        "AI integration and modern tech stack",
        "Flexible engagement models"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-text-dark text-center mb-4">
        Let's Connect
      </h2>
      <p className="text-secondary-dark text-center mb-12 max-w-2xl mx-auto">
        Whether you're looking to hire a skilled software engineer or need custom web development solutions, 
        I'm here to help bring your vision to life.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {opportunities.map((opp, index) => (
          <ConnectCard 
            key={index} 
            {...opp} 
            buttonText={opp.title === "For Recruiters" ? "Discuss Opportunities" : "Start a Project"}
          />
        ))}
      </div>
      
      <div className="text-center space-y-2">
        <p className="text-xl text-white font-medium animate-pulse">
          Happy to Work with you! 🙇
        </p>
        <div className="flex items-center justify-center text-secondary-dark space-x-1 group">
          <MapPinIcon className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
          <span className="group-hover:text-white transition-colors duration-300">Based in Bay Area, California</span>
        </div>
      </div>
    </div>
  );
};

export default Connect;
