import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const experiences = [
    {
      company: "IBM",
      role: "Software Developer",
      period: "Current",
      location: "Remote",
      description: "Developing enterprise-grade solutions and contributing to cloud-native applications. Working with cross-functional teams to deliver scalable software systems.",
      technologies: ["Java", "JavaScript", "Cloud Technologies", "Microservices"]
    },
    {
      company: "Atensai",
      role: "Founder & Developer",
      period: "2023 - Present",
      location: "Remote",
      description: "Building innovative solutions including a matchmaking platform. Leading product development, technology architecture, and business strategy.",
      technologies: ["React", "Node.js", "AI/ML", "Product Development"]
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="experience" ref={ref}>
      <div className="container">
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="section-header"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Building impactful solutions across enterprise and startup environments
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="experience-item"
            >
              <div className="experience-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3>{exp.role}</h3>
                    <div className="experience-company">
                      <Building size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="experience-meta">
                    <div className="experience-period">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="experience-location">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="experience-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
