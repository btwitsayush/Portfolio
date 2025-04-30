import React from 'react';
import '../../styles/Projects.css';
import projectBg from '../../assets/images/project-bg.png';
import ProjectCard from '../ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="projects-header" 
        style={{ backgroundImage: `url(${projectBg})` }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="projects-title"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Projects
        </motion.h1>
        <motion.p 
          className="projects-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          My Work: Built with Love & Bugs (sometimes )
        </motion.p>
      </motion.div>
      
      <div className="projects-grid">
        <ProjectCard />
      </div>
    </motion.div>
  );
};

export default Projects; 