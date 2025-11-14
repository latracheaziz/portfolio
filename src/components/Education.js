import { useEffect, useRef, useState } from 'react';
import { education } from '../constants/data';
import '../styles/Education.css';

const Education = ({ t, lang }) => {
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

  return (
    <section id="education" className="section section-alt" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          {t.education.title}
        </h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`education-card ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-icon">🎓</div>
              <h3>{edu.degree[lang]}</h3>
              <p className="school">{edu.school[lang]}</p>
              <p className="period">{edu.period}</p>
              <p className="description">{edu.description[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
