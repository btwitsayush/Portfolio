import React from 'react';
import '../../styles/Journey.css';
import { FaBuilding, FaSchool } from 'react-icons/fa';
import { IoSchool } from 'react-icons/io5';
import JourneyCard from '../JourneyCard';

const Journey = () => {
  return (
    <div className="journey-container">
      <h1 className="journey-heading">
        My <span className="highlight">Professional</span> Journey
      </h1>
      <div className="journey-timeline">
        <JourneyCard
          icon={FaBuilding}
          title="SMILe Digital & AI Labs"
          subtitle="Software Development Engineer Intern"
          date="October 2024 – Present"
          technologies="Python, FastAPI, TensorFlow, Docker, Computer Vision"
          details={[
            "Created an app called iSmartSense to help users calculate the Volumetric Weight of packages using images.",
            "Handled the backend development, trained CNN model for custom dataset, and managed data collection and preparation."
          ]}
          achievements="Received the SMILe Ratna Award for my contribution"
        />
        <JourneyCard
          icon={IoSchool}
          title="Lovely Professional University"
          subtitle="Bachelor of Technology in Computer Science"
          date="August 2021 – July 2025"
          cgpa="7.75"
          achievements="Dean's List"
        />
        <JourneyCard
          icon={FaSchool}
          title="Kamla Nehru Institute of Child Education"
          subtitle="Higher Secondary Education (Class 12)"
          date="2020"
          board="CBSE"
          percentage="78%"
        />
        <JourneyCard
          icon={FaSchool}
          title="Saraswati Vidya Mandir Senior Secondary School"
          subtitle="Secondary Education (Class 10)"
          date="2018"
          board="CBSE"
          percentage="69%"
        />
      </div>
    </div>
  );
};

export default Journey; 