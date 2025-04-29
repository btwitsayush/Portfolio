import React from 'react';
import '../../styles/About.css';
import profileImage from '../../assets/images/profile.jpeg';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Skills from '../Skills';
import { motion } from 'framer-motion';
import { containerVariants } from '../../animations/animations';

const About = () => {
  const handleEmailClick = () => {
    const emailAddress = "srivastavaayush6393@gmail.com";
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;
    window.open(gmailComposeUrl, '_blank');
  };

  return (
    <>
      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div 
          className="about-left"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="about-card">
            <div className="profile-section">
              <img 
                src={profileImage} 
                alt="Ayush Srivastava" 
                className="about-profile-image"
              />
            </div>
            <h2 className="about-name">Ayush Srivastava</h2>
            <p className="about-title">Software Development Engineer Intern</p>
            <div className="about-social-icons">
              <a href="https://wa.me/916393964912" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="social-icon" />
              </a>
              <div 
                onClick={handleEmailClick} 
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && handleEmailClick()}
              >
                <MdEmail className="social-icon" />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="about-right"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <motion.h1 
            className="about-heading"
            initial={{ "--line-width": "0%" }}
            animate={{ "--line-width": "22%" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            About Me
          </motion.h1>
          <div className="about-description">
            <p>
              I'm a passionate Machine Learning Engineer with a strong foundation in computer science and a keen interest in artificial intelligence. My journey in tech has been driven by curiosity and the desire to create impactful solutions.
            </p>
            <p>
              Currently focused on developing scalable ML solutions and exploring the latest advancements in AI technology. I believe in continuous learning and staying updated with cutting-edge developments in the field.
            </p>
            <p>
              Currently focused on developing scalable ML solutions and exploring the latest advancements in AI technology. I believe in continuous learning and staying updated with cutting-edge developments in the field.
            </p>
            <p>
              Currently focused on developing scalable ML solutions and exploring the latest advancements in AI technology. I believe in continuous learning and staying updated with cutting-edge developments in the field.
            </p>
          </div>
        </motion.div>
      </motion.div>
      <Skills />
    </>
  );
};

export default About;