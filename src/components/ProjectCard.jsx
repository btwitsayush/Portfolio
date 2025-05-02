import React, { useState } from 'react';
import '../styles/ProjectCard.css';
import { FaGithub, FaSearch } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';
import BookStore from '../assets/images/BookStore.png';
import FlavorsOfAwadh from '../assets/images/Flavour-Of -Awadh.png';
import PricePrediction from '../assets/images/price-prediction.png';
import Yolo from '../assets/images/yolov8.png';
import CloudHome from '../assets/images/CloudHome.jpeg';
import { 
  skillCardVariants, 
  containerVariants,
  headerVariants,
  filterButtonVariants,
  searchVariants,
  buttonVariants
} from '../animations/animations';

const categories = ['All', 'Frontend', 'Backend', 'Machine Learning', 'Computer Vision'];

const projects = [
    {
        title: "BookStore Website",
        description: "A dynamic online bookstore platform built with React where users can explore and access free books, featuring category filters and book details.",
        technologies: ["HTML", "CSS", "JavaScript","React.js", "Tailwind"],
        image: BookStore,
        category: "Frontend",
        githubLink: "https://github.com/btwitsayush/BookStore",
        liveDemo: "https://book-store-seven-lilac.vercel.app/",
        hasLiveDemo: true
      },
       
      {
        title: "Flavors of Awadh",
        description: "A restaurant website showcasing the rich cuisine of Awadh with elegant UI components, a dynamic menu, and responsive design for all devices.",
        technologies: ["HTML", "CSS", "JavaScript","Node.js","Express.js"],
        image: FlavorsOfAwadh,
        category: "Backend",
        githubLink: "https://github.com/btwitsayush/Flavors-of-Awadh",
        liveDemo: "https://flavors-of-awadh.onrender.com/order-now",
        hasLiveDemo: true
      },

    {
        title: "Price Prediction",
        description: "A machine learning project that predicts the price of items using regression models. It includes data preprocessing, model training, and evaluation.",
        technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        image: PricePrediction,
        category: "Machine Learning",
        githubLink: "https://github.com/btwitsayush/Price-Prediction",
        liveDemo: "https://github.com/btwitsayush/Price-Prediction",
        hasLiveDemo: false
      },
      {
        title: "Cloud Home",
        description: "A cloud storage web app where users can upload, organize, and access their files easily, featuring file management and folder creation functionalities.",
        technologies: ["React.js", "NodeJs", "Express.js","MongoDB","Cloudinary"],
        image: CloudHome,
        category: "Frontend",
        githubLink: "https://github.com/btwitsayush/Cloud-Home",
        liveDemo: "https://cloudhome-lemon.vercel.app",
        hasLiveDemo: true
      },
      {
        title: "Rotating Bounding Box Detection",
        description: "An object detection application that uses YOLOv8 and OpenCV to draw rotated bounding boxes around detected objects for better accuracy in non-axis-aligned images.",
        technologies: ["Python", "YOLOv8", "OpenCV", "TensorFlow"],
        image: Yolo,
        category: "Computer Vision",
        githubLink: "https://github.com/btwitsayush/rotating-boundingbox-yolov8-opencv",
        liveDemo: "https://github.com/btwitsayush/rotating-boundingbox-yolov8-opencv",
        hasLiveDemo: false
      },


];

const ProjectCard = ({ project }) => (
  <motion.div 
    className="projectcard-card"
    variants={skillCardVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ 
      once: false,
      amount: "some",
    }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="projectcard-image">
      <img src={project.image} alt={project.title} />
    </div>
    <div className="projectcard-content">
      <h2 className="projectcard-title">{project.title}</h2>
      <p className="projectcard-desc">{project.description}</p>
      
      <div className="projectcard-tech">
        {project.technologies.map((tech, techIndex) => (
          <span key={techIndex} className="projectcard-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="projectcard-actions">
        <motion.a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="projectcard-btn"
          variants={buttonVariants}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <FaGithub /> View Code
        </motion.a>
        {project.hasLiveDemo && (
          <motion.a 
            href={project.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="projectcard-btn projectcard-demo"
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <BiLinkExternal /> Live Demo
          </motion.a>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="projectcard-section">
      <motion.div 
        className="projectcard-header"
        {...headerVariants}
      >
        <div className="projectcard-left">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`projectcard-filter ${activeCategory === category ? 'projectcard-active' : ''}`}
              onClick={() => setActiveCategory(category)}
              {...filterButtonVariants}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <motion.div 
          className="projectcard-right"
          {...searchVariants}
        >
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="projectcard-search"
          />
          <FaSearch className="projectcard-search-icon" />
        </motion.div>
      </motion.div>

      <motion.div 
        className="projectcard-grid"
        variants={containerVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ 
          once: false,
          amount: "some",
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectsSection; 