import React from 'react';
import { ClockIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const ProjectCard = ({ company, role, duration, projects, logo }) => (
  <div className="group bg-card-dark p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-500/50 relative overflow-hidden">
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="relative"> {/* relative to appear above gradient */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-start space-x-4">
          {logo && (
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center p-1.5 shadow-lg">
              <img src={logo} alt={`${company} logo`} className="w-full h-full object-contain mix-blend-multiply" />
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-105 transition-transform duration-300">
              {company}
            </h3>
            <p className="text-secondary-dark mt-1 font-medium">{role}</p>
          </div>
        </div>
        <div className="flex items-center text-secondary-dark bg-white/5 px-3 py-1 rounded-full">
          <ClockIcon className="w-4 h-4 mr-2" />
          <span className="text-sm">{duration}</span>
        </div>
      </div>
      <ul className="space-y-3 mt-4">
        {projects.map((project, index) => (
          <li key={index} className="text-text-dark flex items-start group/item hover:translate-x-1 transition-transform duration-200">
            <span className="mr-2 text-blue-500 group-hover/item:text-purple-500 transition-colors duration-200">→</span>
            <span className="group-hover/item:text-blue-400 transition-colors duration-200">{project}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Projects = () => {
  const workHistory = [
    {
      company: "Salesforce Inc",
      role: "Software Engineer",
      duration: "3 years, 5 months",
      logo: "/company-logos/salesforce.png",
      projects: [
        "Built unified B2B/B2C commerce components",
        "Developed AI conversational shopping platform",
        "Created Mini Cart for checkout",
        "Preserved guest user shopping carts",
        "Engineered pagination with lazy loading",
        "Implemented custom notification UI components"
      ]
    },
    {
      company: "Intuit Inc",
      role: "Software Engineer 2",
      duration: "3 years, 2 months",
      logo: "/company-logos/intuit.png",
      projects: [
        "Led personalized account connection recommendations",
        "Enabled one-click account connection reuse",
        "Revamped customer error handling experiences",
        "Established A/B testing environment",
        "Added proactive bank status notifications",
        "Mentored and onboarded new hires"
      ]
    },
    {
      company: "Intuit Inc",
      role: "Software Engineer – Co-op",
      duration: "7 months",
      logo: "/company-logos/intuit.png",
      projects: [
        "Designed UI for tax verification",
        "Automated Java services layer access",
        "Created unified developer status dashboard"
      ]
    },
    {
      company: "Infogain",
      role: "Software Engineer",
      duration: "2 years, 2 months",
      logo: "/company-logos/infogain.png",
      projects: [
        "Developed various e-commerce UI modules for client Fashion and You",
        "Developed an extensive PDP, PLP, Cart, Wishlist, Profile, Address, Payment, etc. e-commerce modules for client Karbonn Mobiles"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-text-dark text-center mb-4">
        Work Experience & Projects
      </h2>
      <p className="text-secondary-dark text-center mb-12">
        A timeline of my professional journey and key projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workHistory.map((work, index) => (
          <ProjectCard key={index} {...work} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
