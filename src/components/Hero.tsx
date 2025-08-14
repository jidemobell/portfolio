import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import developerSvg from '../assets/developer.svg';
import profileImage from '../assets/edited.png';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={developerSvg} alt="Developer backdrop" className="hero-svg" />
      </div>
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-avatar"
        >
          <img src={profileImage} alt="Jide Mobell" className="profile-image" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-text"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-name"
          >
            Jide Mobell
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="hero-titles"
          >
            <p className="hero-role">Software Developer @ IBM</p>
            <p className="hero-role">Founder @ Atensai</p>
            <p className="hero-role">Research Enthusiast</p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="hero-description"
          >
            Building the future through code, research, and innovation.
            Passionate about creating solutions that make a difference.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="hero-links"
          >
            <a href="https://github.com/jidemobell" target="_blank" rel="noopener noreferrer" className="hero-link">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/jidemobell" target="_blank" rel="noopener noreferrer" className="hero-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="hero-link">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="scroll-indicator"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
