import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/Contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_529dt9o', //service-id email-js
        'template_v3is5vq', //template-id email-js
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Ayush',
          reply_to: formData.email
        },
        'iAPdZqwYjsBrP2uLs' //public key-email js
      );

      if (result.status === 200) {
        toast.success('Message sent successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    const emailAddress = "srivastavaayush6393@gmail.com";
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;
    window.open(gmailComposeUrl, '_blank');
  };

  return (
    <div className="contact-section">
      <ToastContainer />
      <div className="title-wrapper">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h1>
      </div>
      
      <div className="contact-container">
        {/* Left Card - Form */}
        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input 
                type="text" 
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email Address"
              />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea 
                className="form-control"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Enter your message here..."
              />
            </div>

            <button type="submit" className="send-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        {/* Right Card - Contact Info */}
        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: "some" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="contact-info">
            <motion.div 
              className="contact-item" 
              onClick={handleEmailClick} 
              style={{ cursor: 'pointer' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="icon-wrapper">
                <MdEmail className="contact-icon" />
              </div>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">srivastavaayush6393@gmail.com</p>
              </div>
            </motion.div>

            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://www.linkedin.com/in/-ayush-srivastava" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="icon-wrapper">
                  <FaLinkedin className="contact-icon" />
                </div>
                <div>
                  <p className="contact-label">LinkedIn</p>
                  <p className="contact-value">LinkedIn Profile</p>
                </div>
              </a>
            </motion.div>

            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://github.com/btwitsayush" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="icon-wrapper">
                  <FaGithub className="contact-icon" />
                </div>
                <div>
                  <p className="contact-label">GitHub</p>
                  <p className="contact-value">GitHub Profile</p>
                </div>
              </a>
            </motion.div>

            <motion.p 
              className="contact-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: "some" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 