import React from 'react';
import '../styles/Skills.css';
import { motion } from 'framer-motion';
import { skillCardVariants, skillIconVariants, containerVariants } from '../animations/animations';
import { 
  SiPython, 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiTensorflow,
  SiPytorch,
  SiFastapi,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiExpress,
  SiMongodb,
  SiGit
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';  

const SkillCard = ({ icon: Icon, name }) => (
  <motion.div 
    className="skill-card"
    variants={skillCardVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ 
      once: false,
      amount: "some",
    }}
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      variants={skillIconVariants}
      initial="initial"
      animate="animate"
    >
      <Icon className="skill-icon" />
    </motion.div>
    <span className="skill-name">{name}</span>
  </motion.div>
);

const Skills = () => {
  const skills = [
    { icon: SiPython, name: 'Python' },
    { icon: SiPandas, name: 'Pandas' },
    { icon: SiNumpy, name: 'NumPy' },
    { icon: SiScikitlearn, name: 'Scikit-learn' },
    { icon: SiTensorflow, name: 'TensorFlow' },
    { icon: SiPytorch, name: 'PyTorch' },
    { icon: SiFastapi, name: 'FastAPI' },
    { icon: SiHtml5, name: 'HTML5' },
    { icon: SiCss3, name: 'CSS3' },
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: SiReact, name: 'React' },
    { icon: SiExpress, name: 'Express.js' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiGit, name: 'Git' },
    { icon: FaJava, name: 'Java' }  
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-heading">
        Tech I'm <span className="highlight">Comfortable</span> With
      </h2>
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ 
          once: false,
          amount: "some",
        }}
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills; 