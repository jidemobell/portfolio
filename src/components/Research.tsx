import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, ExternalLink, Brain, Search } from 'lucide-react';

const Research: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const researchProjects = [
    {
      title: "AI-Powered Connection Intelligence Systems",
      category: "Machine Learning",
      description: "Researching and developing sophisticated algorithms for intelligent user connection systems, incorporating behavioral analysis and compatibility modeling.",
      status: "Ongoing",
      technologies: ["Python", "TensorFlow", "NLP", "Data Science"],
      link: "#"
    },
    {
      title: "Scalable Cloud Architecture Patterns",
      category: "Cloud Computing",
      description: "Investigating modern cloud-native patterns for enterprise applications, focusing on microservices orchestration and serverless architectures.",
      status: "Published",
      technologies: ["Kubernetes", "AWS", "Docker", "Terraform"],
      link: "#"
    },
    {
      title: "Human-Computer Interaction in Dating Apps",
      category: "UX Research",
      description: "Exploring user behavior patterns and interaction design principles specific to relationship-building applications.",
      status: "In Progress",
      technologies: ["User Research", "A/B Testing", "Analytics", "Design"],
      link: "#"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="research" ref={ref}>
      <div className="container">
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="section-header"
        >
          <h2 className="section-title">Research & Innovation</h2>
          <p className="section-subtitle">
            Exploring the intersection of technology, psychology, and human connection
          </p>
        </motion.div>

        <div className="research-grid">
          {researchProjects.map((project, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="research-card"
            >
              <div className="research-header">
                <div className="research-icon">
                  {project.category === "Machine Learning" && <Brain size={24} />}
                  {project.category === "Cloud Computing" && <Search size={24} />}
                  {project.category === "UX Research" && <BookOpen size={24} />}
                </div>
                <div className="research-meta">
                  <span className="research-category">{project.category}</span>
                  <span className={`research-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <h3 className="research-title">{project.title}</h3>
              <p className="research-description">{project.description}</p>
              
              <div className="research-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="research-footer">
                <a href={project.link} className="research-link">
                  <span>Learn More</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="research-cta"
        >
          <h3>Interested in Collaboration?</h3>
          <p>
            I'm always open to discussing research opportunities, 
            sharing insights, and exploring new areas of innovation.
          </p>
          <a href="#contact" className="cta-button">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
