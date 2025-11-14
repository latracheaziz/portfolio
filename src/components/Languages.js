import { useEffect, useRef, useState } from 'react';
import { languages } from '../constants/data';
import '../styles/Languages.css';

const Languages = ({ t, lang }) => {
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

  const renderStars = (count) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < count ? 'star filled' : 'star'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="languages" className="section" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
          {t.languages.title}
        </h2>
        <div className="languages-grid">
          {languages.map((language, index) => (
            <div
              key={index}
              className={`language-card ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="language-info">
                <h3>{language.name[lang]}</h3>
                <p className="level">{language.level[lang]}</p>
              </div>
              {renderStars(language.stars)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
