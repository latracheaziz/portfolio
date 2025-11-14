import { useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import { GithubOutlined, EyeOutlined } from '@ant-design/icons';
import { projects } from '../constants/data';
import '../styles/Projects.css';

const Projects = ({ t, lang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="section section-alt" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          {t.projects.title}
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-header">
                <h3>{project.name[lang]}</h3>
              </div>
              <p className="project-description">{project.description[lang]}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <Button
                  icon={<GithubOutlined />}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.projects.viewCode}
                </Button>
                {project.demo && (
                  <Button
                    type="primary"
                    icon={<EyeOutlined />}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.projects.viewDemo}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
