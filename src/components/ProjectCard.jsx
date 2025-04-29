import React, { useState } from 'react';
import '../styles/ProjectCard.css';
import { FaGithub, FaSearch } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import BookStore from '../assets/images/BookStore.png';
import FlavorsOfAwadh from '../assets/images/Flavour-Of -Awadh.png';
import PricePrediction from '../assets/images/price-prediction.png';

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
        image: "/path/to/cloud-home.jpg",
        category: "Frontend",
        githubLink: "https://github.com/btwitsayush/Cloud-Home",
        liveDemo: "https://cloudhome-lemon.vercel.app",
        hasLiveDemo: true
      },
      {
        title: "Rotating Bounding Box Detection",
        description: "An object detection application that uses YOLOv8 and OpenCV to draw rotated bounding boxes around detected objects for better accuracy in non-axis-aligned images.",
        technologies: ["Python", "YOLOv8", "OpenCV", "TensorFlow"],
        image: "/path/to/rotating-bbox.jpg",
        category: "Computer Vision",
        githubLink: "https://github.com/btwitsayush/rotating-boundingbox-yolov8-opencv",
        liveDemo: "https://github.com/btwitsayush/rotating-boundingbox-yolov8-opencv",
        hasLiveDemo: false
      },


];

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
      <div className="projectcard-header">
        <div className="projectcard-left">
          {categories.map(category => (
            <button
              key={category}
              className={`projectcard-filter ${activeCategory === category ? 'projectcard-active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="projectcard-right">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="projectcard-search"
          />
          <FaSearch className="projectcard-search-icon" />
        </div>
      </div>

      <div className="projectcard-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="projectcard-card">
            <div className="projectcard-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="projectcard-content">
              <h2 className="projectcard-title">{project.title}</h2>
              <p className="projectcard-desc">{project.description}</p>
              
              <div className="projectcard-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="projectcard-tag">{tech}</span>
                ))}
              </div>

              <div className="projectcard-actions">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="projectcard-btn">
                  <FaGithub /> View Code
                </a>
                {project.hasLiveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="projectcard-btn projectcard-demo">
                    <BiLinkExternal /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection; 