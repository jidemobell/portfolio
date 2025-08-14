
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Guitar, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="about" ref={ref}>
      <div className="container">
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A blend of technology, creativity, and entrepreneurial spirit
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="about-text"
          >
            <p>
              I'm a passionate software developer currently working at IBM, where I contribute to 
              cutting-edge enterprise solutions. My journey in technology spans full-stack development, 
              with expertise in modern frameworks and cloud technologies.
            </p>
            <p>
              Beyond my day job, I'm building <strong>Atensai</strong> - a platform focused on innovative 
              solutions including intelligent connection systems. I believe in the power of technology to 
              bring people together and create meaningful digital experiences.
            </p>
            <p>
              When I'm not coding, you'll find me with my guitar, exploring the intersection of 
              creativity and logic that drives both music and programming.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="about-highlights"
          >
            <div className="highlight-item">
              <Code className="highlight-icon" />
              <div>
                <h4>Software Development</h4>
                <p>Full-stack development with modern technologies</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <Lightbulb className="highlight-icon" />
              <div>
                <h4>Innovation</h4>
                <p>Turning research and ideas into practical solutions</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <Users className="highlight-icon" />
              <div>
                <h4>Entrepreneurship</h4>
                <p>Building Atensai and exploring new ventures</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <Guitar className="highlight-icon" />
              <div>
                <h4>Music</h4>
                <p>Guitar enthusiast finding harmony in creativity</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
