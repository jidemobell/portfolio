import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, ExternalLink, Brain, Search } from 'lucide-react';

interface ResearchProject {
  title: string;
  category: string;
  description: string;
  status: string;
  technologies: string[];
  /** Omitted when there is nothing public to link to — never a placeholder. */
  link?: string;
  linkLabel?: string;
}

const Research: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const researchProjects: ResearchProject[] = [
    {
      title: "When the Model Learns the Policy",
      category: "Research",
      description: "A specified study of exposure bias in reciprocal matching: a ranking system learns from outcomes it produced itself, so the model can end up learning its own allocation rather than anyone's preference. The data-generating process is frozen and pre-registered; no results yet.",
      status: "Specification",
      technologies: ["Machine Learning", "Recommenders", "Exposure Bias", "Simulation"],
      link: "https://research-aperture.pages.dev/",
      linkLabel: "Read the specification",
    },
    {
      title: "Neural Rhythm Generation",
      category: "Machine Learning",
      description: "An exploratory generative-music experiment: building a royalty-free MIDI groove pipeline, normalizing patterns into a training set, and training a small model to produce genre-true rhythms for a learner-focused jazz backing app.",
      status: "Prototype",
      technologies: ["Python", "MIDI", "Machine Learning", "Music Generation"],
    },
    {
      title: "The Dataset Is a Claim",
      category: "Independent Exploration",
      description: "An analytics exercise turned forensic: reconciling a \"clean\" real-estate dataset against its three raw sources found 364 of 2,100 rows had been silently dropped, and a currency conversion applied at a rate nobody recorded. The exploration is about what can and cannot be concluded afterwards.",
      status: "Ongoing",
      technologies: ["Analytics", "Data Provenance", "Python"],
      link: "https://javamasteringhouse.pages.dev/",
      linkLabel: "Open the Learning Lab",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
    transition: { duration: 0.6 },
  };

  const iconFor = (category: string) => {
    if (category === "Machine Learning") return <Brain size={24} />;
    if (category === "Research") return <Search size={24} />;
    return <BookOpen size={24} />;
  };

  // Multi-word statuses must not produce a broken modifier class.
  const statusSlug = (status: string) =>
    status
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

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
            Ongoing research, prototypes and open-source experiments
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
                <div className="research-icon">{iconFor(project.category)}</div>
                <div className="research-meta">
                  <span className="research-category">{project.category}</span>
                  <span className={`research-status status-${statusSlug(project.status)}`}>
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
                {project.link ? (
                  <a
                    href={project.link}
                    className="research-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{project.linkLabel ?? "Learn More"}</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="research-link research-link--muted">
                    No public code yet
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="research-cta"
        >
          <h3>Interested in the Thinking Behind the Product?</h3>
          <p>
            I am open to thoughtful conversations about product design,
            behavioral signals, and applied experimentation in software.
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
