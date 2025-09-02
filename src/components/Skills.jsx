import React from 'react';

const SkillCard = ({ title, skills }) => (
  <div className="bg-card-dark p-6 rounded-xl border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:border-accent-dark/50">
    <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4 min-h-[3rem] flex items-center hover:scale-105 transition-transform duration-200">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1.5 bg-accent-dark/10 text-text-dark rounded-full text-sm font-medium hover:bg-accent-dark/20 transition-all duration-200 whitespace-nowrap"
        >
          {skill.trim()}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Javascript", "Java", "Python", "Kotlin"],
    },
    {
      title: "Web Technologies",
      skills: [
        "ReactJS",
        "React Native",
        "Redux",
        "AngularJS",
        "Html",
        "CSS",
        "Node.js",
        "Lightning Web",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Java Spring", "Hibernate"],
    },
    {
      title: "Testing & Quality Assurance",
      skills: [
        "Jest",
        "Cypress",
        "Karma",
        "Mocha",
        "Chai",
        "Sinon",
        "Selenium",
      ],
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      skills: [
        "Prompt Engineering",
        "Fine-tuning",
        "OpenAI ChatGPT",
        "Gemini",
        "Cursor",
        "Jupyter Lab",
      ],
    },
    {
      title: "Databases",
      skills: ["MySql", "AWS DynamoDb", "Elasticsearch (Basic)"],
    },
    {
      title: "Monitoring & Analytics",
      skills: ["Splunk", "Catchpoint", "Browser Stack", "Lighthouse"],
    },
    {
      title: "Development Tools & Utilities",
      skills: [
        "Figma",
        "Cursor",
        "VS Code",
        "IntelliJ",
        "Webstorm",
        "Jenkins",
        "Android Studio",
        "Eclipse",
        "Git",
        "Jira",
        "Npm",
        "Babel",
        "Webpack",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-3xl text-text-dark text-center mb-12">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard
            key={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
