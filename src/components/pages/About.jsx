import React from 'react';
import '../../styles/About.css';
import aboutImage from '../../assets/images/about.jpeg';
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
                src={aboutImage} 
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
            <p>I'm really passionate about <span className="highlight">machine learning</span> and how we can use it to solve <span className="highlight">real-life problems</span>. I started my journey in tech because I was curious about how things work behind the scenes, and that curiosity slowly turned into a strong interest in artificial intelligence.</p>
            <p>I have a good understanding of computer science, and over time, I've been learning how to build ML models that are useful and can be scaled for <span className="highlight">real applications</span>. Right now, I'm focused on improving my skills by working on <span className="highlight">AI projects</span> and keeping up with the <span className="highlight">latest trends and tools</span> in the field.</p>
            <p>For me, learning never stops. I enjoy exploring new ideas and using what I learn to build smart and simple solutions that can actually <span className="highlight">make a difference</span>.</p>
          </div>
        </motion.div>
      </motion.div>
      <Skills />
    </>
  );
};

export default About;