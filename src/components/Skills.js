import { useEffect, useRef, useState } from 'react';
import { skills } from '../constants/data';
import '../styles/Skills.css';

const Skills = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const skillCategories = [
    { key: 'programming', icon: '💻', items: skills.programming, label: t.skills.programming },
    { key: 'frameworks', icon: '⚛️', items: skills.frameworks, label: t.skills.frameworks },
    { key: 'tools', icon: '🛠️', items: skills.tools, label: t.skills.tools },
    { key: 'databases', icon: '🗄️', items: skills.databases, label: t.skills.databases },
    { key: 'others', icon: '📦', items: skills.others, label: t.skills.others }
  ];

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          {t.skills.title}
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.key}
              className={`skill-category ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.label}</h3>
              </div>
              <div className="skill-tags">
                {category.items.map((skill, index) => (
                  <span
                    key={index}
                    className="skill-tag"
                    style={{ animationDelay: `${(catIndex * 0.1) + (index * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
