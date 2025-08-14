import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageSquare, Send, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
    transition: { duration: 0.6 },
  };

  const contactOptions = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      description: "Drop me a line anytime",
      action: "mailto:your.email@example.com",
      label: "Send Email"
    },
    {
      icon: <Globe size={24} />,
      title: "Atensai",
      description: "Check out what we're building",
      action: "https://atensai.com",
      label: "Visit Atensai"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Let's Connect",
      description: "Discuss opportunities and ideas",
      action: "#",
      label: "Schedule Chat"
    }
  ];

  return (
    <section className="contact" ref={ref}>
      <div className="container">
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="section-header"
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to collaborate, innovate, or just have a great conversation?
          </p>
        </motion.div>

        <div className="contact-grid">
          {contactOptions.map((option, index) => (
            <motion.a
              key={index}
              href={option.action}
              target={option.action.startsWith('http') ? '_blank' : undefined}
              rel={option.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              {...fadeInUp}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="contact-card"
            >
              <div className="contact-icon">
                {option.icon}
              </div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <div className="contact-action">
                <span>{option.label}</span>
                <Send size={16} />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.8 }}
          className="contact-footer"
        >
          <p>
            Based remotely, working globally. 
            Always excited about new challenges and meaningful projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
