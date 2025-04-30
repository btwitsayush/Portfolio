import React from 'react';
import '../styles/JourneyCard.css';
import { motion } from 'framer-motion';

const JourneyCard = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  date, 
  details, 
  achievements, 
  technologies, 
  board, 
  percentage, 
  cgpa,
  index 
}) => (
  <motion.div 
    className="journey-card"
    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: "some" }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <Icon className="journey-icon" />
    <div className="journey-content">
      <h3 className="journey-title">{title}</h3>
      <p className="journey-subtitle">{subtitle}</p>
      <p className="journey-date">{date}</p>
      
      {technologies && (
        <div className="journey-tech">
          <p><strong>Technologies:</strong> {technologies}</p>
        </div>
      )}

      {details && details.map((detail, index) => (
        <p key={index} className="journey-details">{detail}</p>
      ))}

      {board && (
        <div className="journey-board">
          <p><strong>Board:</strong> {board}</p>
        </div>
      )}
      {percentage && (
        <div className="journey-score">
          <p><strong>Percentage:</strong> {percentage}</p>
        </div>
      )}
      {cgpa && (
        <div className="journey-score">
          <p><strong>CGPA:</strong> {cgpa}</p>
        </div>
      )}
      {achievements && (
        <div className="journey-achievements">
          <p><strong>Achievements:</strong> {achievements}</p>
        </div>
      )}
    </div>
  </motion.div>
);

export default JourneyCard; 