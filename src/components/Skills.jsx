import React from 'react';
import '../styles/Skills.css';
import { SiTensorflow, SiPython, SiFastapi } from 'react-icons/si';
import { BiData } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';

const SkillCard = ({ icon: Icon, name }) => (
  <div className="skill-card">
    <Icon className="skill-icon" />
    <span className="skill-name">{name}</span>
  </div>
);

const Skills = () => {
  const skills = [
    { icon: SiTensorflow, name: 'TensorFlow' },
    { icon: SiPython, name: 'Advanced Python' },
    { icon: SiFastapi, name: 'FastAPI' },
    { icon: BiData, name: 'Big Data' },
    { icon: BsCodeSlash, name: 'System Design' },
    { icon: SiTensorflow, name: 'TensorFlow' },
    { icon: SiPython, name: 'Advanced Python' },
    { icon: SiFastapi, name: 'FastAPI' },
    { icon: BiData, name: 'Big Data' },
    { icon: BsCodeSlash, name: 'System Design' },
    { icon: SiTensorflow, name: 'TensorFlow' },
    { icon: SiPython, name: 'Advanced Python' },
    { icon: SiFastapi, name: 'FastAPI' },
    { icon: BiData, name: 'Big Data' },
    { icon: BsCodeSlash, name: 'System Design' }
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-heading">
        Tech I'm <span className="highlight">Comfortable</span> With
      </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills; 