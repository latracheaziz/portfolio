import { useEffect, useRef, useState } from 'react';
import { volunteer } from '../constants/data';
import '../styles/Volunteer.css';

const Volunteer = ({ t, lang }) => {
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
    <section id="volunteer" className="section section-alt" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          {t.volunteer.title}
        </h2>
        <div className="volunteer-grid">
          {volunteer.map((exp, index) => (
            <div
              key={index}
              className={`volunteer-card ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-icon">🤝</div>
              <h3>{exp.organization[lang]}</h3>
              <p className="role">{exp.role[lang]}</p>
              <p className="period">{exp.period}</p>
              <p className="location">{exp.location}</p>
              <div className="activities">
                <h4>{t.volunteer.activities}</h4>
                <ul>
                  {exp.activities[lang].map((activity, actIndex) => (
                    <li key={actIndex}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
