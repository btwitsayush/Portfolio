import React from 'react'
import '../styles/Hero.css'
import profileImage from '../assets/images/profile.jpeg'
import { motion } from 'framer-motion'
import { 
  animatedTextVariants, 
  wordVariants, 
  typingContainerVariants, 
  typingCharacterVariants 
} from '../animations/animations'

const Hero = () => {
  const text = "I always try to solve real-world problems through smart, efficient technology. My goal is to build software that makes a real impact, while continuously learning and growing in the field of AI and machine learning.";
  const words = text.split(" ");
  const nameCharacters = "Ayush Srivastava".split("");

  return (
    <div className="hero-container">
      <div className="hero-content-wrapper">
        <motion.div 
          className="hero-left"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-title mb-3">
            Hi, I'm{" "}
            <motion.span
              style={{ display: 'inline-block', color: '#2B5EFF' }}
              variants={typingContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {nameCharacters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={typingCharacterVariants}
                  style={{ display: 'inline-block', width: char === " " ? "0.2em" : "auto" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </h1>
          <motion.div
            variants={animatedTextVariants}
            initial="hidden"
            animate="visible"
            className="hero-description mb-4"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <div className="button-wrapper">
            <a 
              href="https://docs.google.com/document/d/1X0g1MbLezta3MWYYZ4RPBh9lRTNKLSQ_pLjj3Rf8uF0/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="hero-button">
                Download My Resume
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div 
          className="hero-right"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;

