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
      company: "Activision Blizzard",
      role: "Associate Operations Engineer (NOC)",
      period: "Feb 2023 - Aug 2023",
      location: "Remote, Ireland",
      description: "First responder for globally distributed live game services under 99.9%+ availability requirements — monitoring network and service status, triaging user-impacting incidents, and managing stakeholder communications during critical outages.",
      technologies: ["Linux", "Grafana", "Shell", "Python", "Runbooks"]
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
            Building impactful solutions across enterprise platforms and live services
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

        <p className="experience-tail-note">
          Earlier: founding engineer at an early-stage AI SaaS, and a decade designing and running
          enterprise networks and data centres.
        </p>
      </div>
    </section>
  );
};

export default Experience;
