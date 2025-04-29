import React from 'react';
import '../../styles/Projects.css';
import projectBg from '../../assets/images/project-bg.png';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-header" style={{ backgroundImage: `url(${projectBg})` }}>
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">My Work: Built with Love & Bugs (sometimes )</p>
      </div>
      
      <div className="projects-grid">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects; 